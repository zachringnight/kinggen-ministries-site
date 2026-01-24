"use client";

import { useState, useRef, useEffect } from "react";
import { CheckCircleIcon, SparklesIcon, LockIcon, ArrowLeftIcon } from "../components/Icons";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  preview?: {
    field: string;
    oldValue: string;
    newValue: string;
  };
  status?: "pending" | "confirmed" | "done";
}

// Friendly suggestions to help LeeAnn get started
const suggestions = [
  "Change the phone number",
  "Update the email address",
  "Edit the tagline",
  "Update the address",
  "Show current info",
];

// PIN entry component - simple and friendly
function PinEntry({ onSuccess }: { onSuccess: () => void }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pin.trim()) return;

    setIsChecking(true);
    setError("");

    try {
      const response = await fetch("/api/admin/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin: pin.trim() }),
      });

      const data = await response.json();

      if (data.success) {
        // Remember for this session
        sessionStorage.setItem("admin_verified", "true");
        onSuccess();
      } else {
        setError("That PIN didn't work. Please try again.");
        setPin("");
        inputRef.current?.focus();
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-cream to-brand-light flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md text-center">
        <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto mb-6">
          <LockIcon className="w-8 h-8 text-brand-primary" />
        </div>

        <h1 className="text-2xl font-semibold text-brand-primary font-heading mb-2">
          Website Editor
        </h1>
        <p className="text-gray-500 text-lg mb-8">
          Enter your PIN to continue
        </p>

        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="password"
            inputMode="numeric"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Enter PIN"
            className="w-full text-center text-2xl tracking-widest py-4 px-6 rounded-2xl border-2 border-gray-200 focus:border-brand-accent focus:outline-none transition-colors mb-4"
            maxLength={10}
            autoComplete="off"
          />

          {error && (
            <p className="text-red-500 text-base mb-4">{error}</p>
          )}

          <button
            type="submit"
            disabled={!pin.trim() || isChecking}
            className="w-full bg-brand-primary text-white py-4 px-6 rounded-2xl text-lg font-medium hover:bg-brand-secondary transition-colors disabled:opacity-50"
          >
            {isChecking ? "Checking..." : "Continue"}
          </button>
        </form>

        <p className="text-gray-400 text-sm mt-6">
          Forgot your PIN? Contact Zach for help.
        </p>
      </div>
    </div>
  );
}

// Main chat interface
function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi LeeAnn! I'm here to help you update the website. Just tell me what you'd like to change in plain English.\n\nFor example:\n• \"Change the phone number to 555-123-4567\"\n• \"Update our email to newemail@gmail.com\"\n• \"Change the address to 123 Main St\"\n• \"Show me the current info\"",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = inputRef.current.scrollHeight + "px";
    }
  }, [input]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/admin/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage.content,
          history: messages,
        }),
      });

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.message,
        preview: data.preview,
        status: data.preview ? "pending" : undefined,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content:
            "I'm sorry, something went wrong. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirm = async (messageId: string) => {
    const message = messages.find((m) => m.id === messageId);
    if (!message?.preview) return;

    setMessages((prev) =>
      prev.map((m) => (m.id === messageId ? { ...m, status: "confirmed" } : m))
    );

    try {
      const response = await fetch("/api/admin/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ preview: message.preview }),
      });

      const data = await response.json();

      if (data.success) {
        setMessages((prev) =>
          prev.map((m) => (m.id === messageId ? { ...m, status: "done" } : m))
        );
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            role: "assistant",
            content: `Done! I've updated the ${message.preview?.field}. The change will be live in about a minute after the site rebuilds.`,
          },
        ]);
      } else {
        throw new Error(data.error);
      }
    } catch {
      setMessages((prev) =>
        prev.map((m) => (m.id === messageId ? { ...m, status: "pending" } : m))
      );
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content:
            "I couldn't save that change. Let me know if you'd like to try again.",
        },
      ]);
    }
  };

  const handleCancel = (messageId: string) => {
    setMessages((prev) => prev.filter((m) => m.id !== messageId));
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        role: "assistant",
        content: "No problem! That change has been cancelled. What else can I help you with?",
      },
    ]);
  };

  const handleSuggestion = (suggestion: string) => {
    setInput(suggestion);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_verified");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-cream to-brand-light">
      {/* Simple Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-brand-accent/20 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
              <SparklesIcon className="w-5 h-5 text-brand-primary" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-brand-primary font-heading">
                Website Editor
              </h1>
              <p className="text-sm text-gray-500">
                Make changes by chatting with me
              </p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors text-base"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Exit
          </button>
        </div>
      </header>

      {/* Chat Container */}
      <main className="max-w-3xl mx-auto px-4 pb-32">
        {/* Messages */}
        <div className="py-6 space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-5 py-4 ${
                  message.role === "user"
                    ? "bg-brand-primary text-white rounded-br-md"
                    : "bg-white shadow-sm border border-gray-100 rounded-bl-md"
                }`}
              >
                {/* Message Content */}
                <p
                  className={`text-lg leading-relaxed whitespace-pre-wrap ${
                    message.role === "user" ? "text-white" : "text-gray-700"
                  }`}
                >
                  {message.content}
                </p>

                {/* Preview Card */}
                {message.preview && message.status === "pending" && (
                  <div className="mt-4 p-4 bg-brand-soft rounded-xl border-2 border-brand-accent/30">
                    <p className="text-sm font-medium text-brand-primary mb-3">
                      Here&apos;s what will change:
                    </p>
                    <div className="space-y-2 text-base">
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500 shrink-0">Before:</span>
                        <span className="text-gray-600 line-through">
                          {message.preview.oldValue}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-brand-primary shrink-0">After:</span>
                        <span className="text-brand-primary font-medium">
                          {message.preview.newValue}
                        </span>
                      </div>
                    </div>

                    {/* Confirmation Buttons */}
                    <div className="mt-4 flex gap-3">
                      <button
                        onClick={() => handleConfirm(message.id)}
                        className="flex-1 bg-brand-primary text-white py-3 px-4 rounded-xl text-lg font-medium hover:bg-brand-secondary transition-colors flex items-center justify-center gap-2"
                      >
                        <CheckCircleIcon className="w-5 h-5" />
                        Yes, make this change
                      </button>
                      <button
                        onClick={() => handleCancel(message.id)}
                        className="px-4 py-3 rounded-xl text-lg text-gray-500 hover:bg-gray-100 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {/* Confirmed State */}
                {message.preview && message.status === "confirmed" && (
                  <div className="mt-4 p-4 bg-brand-accent/20 rounded-xl">
                    <p className="text-brand-primary flex items-center gap-2">
                      <span className="animate-spin">⏳</span>
                      Saving your change...
                    </p>
                  </div>
                )}

                {/* Done State */}
                {message.preview && message.status === "done" && (
                  <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-200">
                    <p className="text-green-700 flex items-center gap-2">
                      <CheckCircleIcon className="w-5 h-5" />
                      Change saved successfully!
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white shadow-sm border border-gray-100 rounded-2xl rounded-bl-md px-5 py-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                  <span className="text-lg">Thinking...</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Input Area - Fixed at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-4">
          {/* Quick Suggestions */}
          {messages.length <= 2 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSuggestion(suggestion)}
                  className="px-4 py-2 bg-brand-soft text-brand-primary rounded-full text-base hover:bg-brand-accent/20 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {/* Input Field */}
          <div className="flex gap-3 items-end">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Tell me what you'd like to change..."
              rows={1}
              className="flex-1 resize-none rounded-2xl border-2 border-gray-200 px-5 py-4 text-lg focus:outline-none focus:border-brand-accent transition-colors placeholder:text-gray-400"
              style={{ maxHeight: "150px" }}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="bg-brand-primary text-white px-6 py-4 rounded-2xl text-lg font-medium hover:bg-brand-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
            >
              Send
            </button>
          </div>

          <p className="text-center text-sm text-gray-400 mt-3">
            Press Enter to send, Shift+Enter for a new line
          </p>
        </div>
      </div>
    </div>
  );
}

// Main component with auth check
export default function AdminChatPage() {
  const [isVerified, setIsVerified] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if already verified this session
    const verified = sessionStorage.getItem("admin_verified") === "true";
    setIsVerified(verified);
  }, []);

  // Loading state
  if (isVerified === null) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-brand-cream to-brand-light flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-brand-primary/30 border-t-brand-primary rounded-full animate-spin" />
      </div>
    );
  }

  // PIN entry or chat
  if (!isVerified) {
    return <PinEntry onSuccess={() => setIsVerified(true)} />;
  }

  return <ChatInterface />;
}
