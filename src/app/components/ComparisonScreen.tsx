'use client';

import { Zap, Bot, Loader2 } from 'lucide-react';
import { InputBar } from './InputBar';

export function ComparisonScreen({
  prompt,
  setPrompt,
  onSubmit,
  openaiText,
  anthropicText,
  openaiStatus,
  anthropicStatus,
  isStreaming,
}: {
  prompt: string;
  setPrompt: (v: string) => void;
  onSubmit: () => void;
  openaiText: string;
  anthropicText: string;
  openaiStatus: string;
  anthropicStatus: string;
  isStreaming: boolean;
}) {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <div className="flex-1 overflow-hidden">
        <div className="h-full grid grid-cols-2 divide-x divide-slate-800">
          {/* OpenAI */}
          <div className="flex flex-col h-full bg-gradient-to-b from-emerald-950/20 to-slate-950">
            <div className="bg-gradient-to-r from-emerald-900/30 to-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-emerald-400" />
                <h2 className="text-lg font-semibold text-white">OpenAI GPT-4o-mini</h2>
              </div>
              <span className="text-sm text-emerald-400 flex items-center gap-2">
                {openaiStatus === 'streaming' && <Loader2 className="w-4 h-4 animate-spin" />}
                {openaiStatus}
              </span>
            </div>
            <div className="flex-1 overflow-y-auto p-8">
              <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                {openaiText || <span className="text-gray-600 italic">Waiting...</span>}
              </p>
            </div>
          </div>

          {/* Anthropic */}
          <div className="flex flex-col h-full bg-gradient-to-b from-cyan-950/20 to-slate-950">
            <div className="bg-gradient-to-r from-cyan-900/30 to-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bot className="w-5 h-5 text-cyan-400" />
                <h2 className="text-lg font-semibold text-white">Anthropic Claude Haiku</h2>
              </div>
              <span className="text-sm text-cyan-400 flex items-center gap-2">
                {anthropicStatus === 'streaming' && <Loader2 className="w-4 h-4 animate-spin" />}
                {anthropicStatus}
              </span>
            </div>
            <div className="flex-1 overflow-y-auto p-8">
              <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                {anthropicText || <span className="text-gray-600 italic">Waiting...</span>}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 bg-slate-900">
        <div className="max-w-4xl mx-auto p-6">
          <InputBar
            value={prompt}
            onChange={setPrompt}
            onSubmit={onSubmit}
            disabled={isStreaming}
          />
        </div>
      </div>
    </div>
  );
}
