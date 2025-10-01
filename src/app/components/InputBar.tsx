import { Send, Loader2 } from 'lucide-react';

export function InputBar({ 
  value, 
  onChange, 
  onSubmit, 
  disabled 
}: { 
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
  disabled: boolean;
}) {
  return (
    <div className="flex gap-3">
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        onKeyPress={e => e.key === 'Enter' && onSubmit()}
        placeholder="Enter your prompt..."
        disabled={disabled}
        className="flex-1 px-5 py-3.5 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
      <button
        onClick={onSubmit}
        disabled={disabled || !value.trim()}
        className="px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 disabled:from-gray-700 disabled:to-gray-700 text-white rounded-xl font-medium flex items-center gap-2 min-w-[120px] justify-center"
      >
        {disabled ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Sending</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Send</span>
          </>
        )}
      </button>
    </div>
  );
}
