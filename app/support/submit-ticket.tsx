"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle } from "lucide-react"

export default function SubmitTicket() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Submit Ticket</h1>
        <p className="text-gray-500">Submit a support ticket for assistance</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-green-500" />
            Support Ticket
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Support ticket submission interface</p>
        </CardContent>
      </Card>
    </div>
  )
}
