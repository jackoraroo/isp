"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare } from "lucide-react"

export default function SMSConfiguration() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">SMS Configuration</h1>
        <p className="text-gray-500">Configure SMS gateway settings</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-green-500" />
            SMS Gateway Setup
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>SMS configuration interface</p>
        </CardContent>
      </Card>
    </div>
  )
}
