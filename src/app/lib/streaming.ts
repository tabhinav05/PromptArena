export async function streamLLMs(
  prompt: string,
  onOpenAI: (text: string, status: string) => void,
  onAnthropic: (text: string, status: string) => void
) {
  try {
    const response = await fetch('https://promptarena-backend.onrender.com/stream', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const reader = response.body?.getReader();
    if (!reader) throw new Error('No reader available');

    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.startsWith('event: ')) {
          const event = line.slice(7);
          const dataLine = lines[i + 1];
          
          if (dataLine?.startsWith('data: ')) {
            const data = JSON.parse(dataLine.slice(6));
            
            if (event.startsWith('openai-')) {
              const type = event.slice(7);
              if (type === 'token') onOpenAI(data.delta, '');
              if (type === 'status') onOpenAI('', data.status);
            }
            
            if (event.startsWith('anthropic-')) {
              const type = event.slice(10);
              if (type === 'token') onAnthropic(data.delta, '');
              if (type === 'status') onAnthropic('', data.status);
            }
          }
        }
      }
    }
  } catch (error) {
    console.error('Streaming error:', error);
    onOpenAI('', 'error');
    onAnthropic('', 'error');
  }
}