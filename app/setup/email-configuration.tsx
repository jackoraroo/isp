"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"

export default function EmailConfiguration() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Email Configuration</h1>
        <p className="text-gray-500">Configure email server settings</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-green-500" />
            Email Server Setup
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Email configuration interface</p>
        </CardContent>
      </Card>
    </div>
  )
}
