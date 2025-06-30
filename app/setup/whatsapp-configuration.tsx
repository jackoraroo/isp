"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle } from "lucide-react"

export default function WhatsAppConfiguration() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">WhatsApp Configuration</h1>
        <p className="text-gray-500">Configure WhatsApp Business API settings</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-green-500" />
            WhatsApp API Setup
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>WhatsApp configuration interface</p>
        </CardContent>
      </Card>
    </div>
  )
}
