'use client';

import { useState } from 'react';
import { LandingScreen } from './components/LandingScreen';
import { ComparisonScreen } from './components/ComparisonScreen';
import { streamLLMs } from './lib/streaming';

export default function Home() {
  const [started, setStarted] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [openaiText, setOpenaiText] = useState('');
  const [anthropicText, setAnthropicText] = useState('');
  const [openaiStatus, setOpenaiStatus] = useState('idle');
  const [anthropicStatus, setAnthropicStatus] = useState('idle');

  const isStreaming = openaiStatus === 'streaming' || anthropicStatus === 'streaming' ||
                      openaiStatus === 'queued' || anthropicStatus === 'queued';

  const handleSubmit = async () => {
    if (!prompt.trim()) return;
    
    setStarted(true);
    setOpenaiText('');
    setAnthropicText('');
    setOpenaiStatus('queued');
    setAnthropicStatus('queued');

    try {
      await streamLLMs(
        prompt,
        (text, status) => {
          if (text) setOpenaiText(prev => prev + text);
          if (status) setOpenaiStatus(status);
        },
        (text, status) => {
          if (text) setAnthropicText(prev => prev + text);
          if (status) setAnthropicStatus(status);
        }
      );
    } catch (error) {
      console.error('Streaming error:', error);
      setOpenaiStatus('error');
      setAnthropicStatus('error');
    }
  };

  if (!started) {
    return <LandingScreen prompt={prompt} setPrompt={setPrompt} onStart={handleSubmit} />;
  }


  return (
    <ComparisonScreen
      prompt={prompt}
      setPrompt={setPrompt}
      onSubmit={handleSubmit}
      openaiText={openaiText}
      anthropicText={anthropicText}
      openaiStatus={openaiStatus}
      anthropicStatus={anthropicStatus}
      isStreaming={isStreaming}
    />
  );
}
