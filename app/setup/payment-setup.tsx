"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard } from "lucide-react"

export default function PaymentSetup() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Payment Setup</h1>
        <p className="text-gray-500">Configure payment gateway settings</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-green-500" />
            Payment Configuration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Payment setup interface</p>
        </CardContent>
      </Card>
    </div>
  )
}
