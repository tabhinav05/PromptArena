'use client';

import { Sparkles, Zap, Bot } from 'lucide-react';

export function LandingScreen({ 
  prompt, 
  setPrompt, 
  onStart 
}: { 
  prompt: string;
  setPrompt: (v: string) => void;
  onStart: () => void;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-br from-emerald-500 to-cyan-600 p-6 rounded-3xl">
              <Sparkles className="w-16 h-16 text-white" />
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-4">
             Prompt Arena
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Compare responses from OpenAI and Anthropic in real-time
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-emerald-400" />
                <h3 className="text-lg font-semibold text-white">OpenAI</h3>
              </div>
              <p className="text-gray-400 text-sm">Fast, intelligent responses</p>
            </div>

            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Bot className="w-6 h-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">Anthropic</h3>
              </div>
              <p className="text-gray-400 text-sm">Thoughtful, nuanced responses</p>
            </div>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && onStart()}
              placeholder="Ask anything..."
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-lg"
              autoFocus
            />
            
            <button
              onClick={onStart}
              disabled={!prompt.trim()}
              className="w-full px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 disabled:from-gray-700 disabled:to-gray-700 text-white rounded-xl font-semibold flex items-center justify-center gap-3 text-lg"
            >
              <Sparkles className="w-6 h-6" />
              <span>Start Comparison</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}