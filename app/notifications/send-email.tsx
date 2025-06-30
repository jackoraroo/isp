"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send } from "lucide-react"

export default function SendEmail() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Send Email</h1>
        <p className="text-gray-500">Send email notifications to clients</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Send className="h-5 w-5 text-green-500" />
            Email Composer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Email sending interface</p>
        </CardContent>
      </Card>
    </div>
  )
}
