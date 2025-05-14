"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function NLPChatbotPage() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [activeTab, setActiveTab] = useState("chat")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(input),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const getBotResponse = (userInput: string): string => {
    // Simple response logic - in a real app, this would call an NLP API
    const input = userInput.toLowerCase()

    if (input.includes("hello") || input.includes("hi")) {
      return "Hello there! How can I help you today?"
    } else if (input.includes("help")) {
      return "I can help you with data analysis, generating reports, and answering questions about your data. What would you like to know?"
    } else if (input.includes("data") || input.includes("analysis")) {
      return "I can analyze your data and provide insights. Would you like me to help you with a specific dataset?"
    } else if (input.includes("report")) {
      return "I can generate reports based on your data. What kind of report are you looking for?"
    } else if (input.includes("thank")) {
      return "You're welcome! Is there anything else I can help you with?"
    } else {
      return "I'm not sure I understand. Could you please rephrase your question or provide more details?"
    }
  }

  // Auto-scroll to the bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">NLP Chatbot</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="chat">Chat</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="chat" className="space-y-4">
          <Card className="h-[600px] flex flex-col">
            <CardHeader>
              <CardTitle>Chat with GenInsight AI</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto flex flex-col space-y-4 p-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`flex max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    <Avatar className={`h-8 w-8 ${message.sender === "user" ? "ml-2" : "mr-2"}`}>
                      <AvatarFallback>{message.sender === "user" ? "U" : "AI"}</AvatarFallback>
                    </Avatar>
                    <div
                      className={`rounded-lg p-3 ${
                        message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700"
                      }`}
                    >
                      <p>{message.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </CardContent>
            <div className="p-4 border-t">
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button type="submit">Send</Button>
              </form>
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Chat History</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Your previous conversations will appear here.</p>
              <div className="mt-4 space-y-2">
                <div className="p-3 rounded-lg border">
                  <p className="font-medium">Yesterday, 3:45 PM</p>
                  <p className="text-sm text-gray-500">Data analysis for Q2 sales</p>
                </div>
                <div className="p-3 rounded-lg border">
                  <p className="font-medium">May 15, 10:30 AM</p>
                  <p className="text-sm text-gray-500">Customer sentiment analysis</p>
                </div>
                <div className="p-3 rounded-lg border">
                  <p className="font-medium">May 10, 2:15 PM</p>
                  <p className="text-sm text-gray-500">Product recommendation query</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Chatbot Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Language Model</label>
                  <select className="w-full p-2 border rounded">
                    <option>GPT-4</option>
                    <option>GPT-3.5</option>
                    <option>Claude</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Response Length</label>
                  <select className="w-full p-2 border rounded">
                    <option>Concise</option>
                    <option>Balanced</option>
                    <option>Detailed</option>
                  </select>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="memory" className="mr-2" />
                  <label htmlFor="memory">Enable conversation memory</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="suggestions" className="mr-2" />
                  <label htmlFor="suggestions">Show response suggestions</label>
                </div>
                <Button>Save Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

