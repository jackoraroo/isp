"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone } from "lucide-react"

export default function ContactUs() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Contact Us</h1>
        <p className="text-gray-500">Get in touch with our support team</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-green-500" />
            Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Contact information interface</p>
        </CardContent>
      </Card>
    </div>
  )
}
