'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, RefreshCw } from 'lucide-react';
import { queryKnowledgeBase } from '@/lib/profile-logic';
import { PROFILE_INFO } from '@/lib/profile-data';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

export default function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: `Chào bạn! Mình là Trợ lý ảo của Phan Gia Khang (Felix - Lớp 12A10 Trường THPT Cái Nước, Cà Mau). Bạn muốn tìm hiểu gì về thành tích HSG Quốc Gia, quote cá nhân hay các thế mạnh thuật toán của Felix?`,
      timestamp: 'Ngay bây giờ',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query }),
      });

      if (!response.ok) {
        throw new Error('API error');
      }

      const data = await response.json();
      const botReply = data.reply || queryKnowledgeBase(query);

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: botReply,
          timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch {
      // Instant local knowledge fallback
      const fallbackReply = queryKnowledgeBase(query);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: fallbackReply,
          timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const sampleQuestions = [
    'Thành tích HSGQG của Felix?',
    'Quote cá nhân của Khang?',
    'Trường & lớp của Khang?',
    'Thuật toán thế mạnh (Segment Tree, DSU)?',
    'Liên hệ Zalo & Facebook?',
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-medium text-xs shadow-xl transition-all duration-200 hover:scale-105 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
          aria-label="Mở cửa sổ Trợ lý ảo Felix"
        >
          <Bot className="w-4 h-4 animate-bounce" />
          <span className="font-semibold">Hỏi Trợ lý Felix</span>
          <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-white dark:bg-slate-900" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="w-[90vw] sm:w-96 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col h-[520px] overflow-hidden transition-all duration-200"
          role="dialog"
          aria-labelledby="ai-assistant-heading"
        >
          {/* Header */}
          <div className="px-4 py-3 bg-blue-600 dark:bg-slate-950 text-white flex items-center justify-between border-b border-blue-700 dark:border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 dark:bg-cyan-500/20 flex items-center justify-center text-white dark:text-cyan-400">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 id="ai-assistant-heading" className="text-xs font-bold font-mono">
                  Felix Bot · Trợ Lý Của Khang
                </h3>
                <span className="text-[10px] text-blue-100 dark:text-cyan-300 block">
                  THPT Cái Nước · Sẵn sàng giải đáp
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-white/80 hover:text-white hover:bg-white/10 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Đóng Trợ lý AI"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Prompt Chips */}
          <div className="p-2.5 bg-slate-50 dark:bg-slate-950/70 border-b border-slate-200/80 dark:border-slate-800/80 overflow-x-auto flex gap-1.5 scrollbar-none text-[11px]">
            {sampleQuestions.map((q) => (
              <button
                key={q}
                onClick={() => handleSendMessage(q)}
                disabled={isLoading}
                className="px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-cyan-400 hover:text-blue-600 dark:hover:text-cyan-300 whitespace-nowrap shrink-0 transition-colors cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs leading-relaxed">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-xl p-3 ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-medium'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                  <span
                    className={`block text-[9px] mt-1 text-right ${
                      msg.sender === 'user'
                        ? 'text-blue-100 dark:text-slate-900/70'
                        : 'text-slate-400 dark:text-slate-500'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs pl-8">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-blue-600 dark:text-cyan-400" />
                <span>Felix Bot đang soạn câu trả lời...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Hỏi về thành tích, trường lớp, quote..."
              className="flex-1 px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400 text-white disabled:opacity-40 transition-colors shrink-0 cursor-pointer"
              aria-label="Gửi tin nhắn"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
