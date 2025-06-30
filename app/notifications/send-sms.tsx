"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Send, Users, FileText, Clock } from "lucide-react"

const clientGroups = [
  { id: "all", name: "All Clients", count: 247 },
  { id: "active", name: "Active Clients", count: 189 },
  { id: "hotspot", name: "Hotspot Users", count: 156 },
  { id: "pppoe", name: "PPPoE Clients", count: 91 },
  { id: "overdue", name: "Overdue Payments", count: 23 },
]

const templates = [
  { id: "welcome", name: "Welcome Message", preview: "Welcome to ORANET! Your internet service is now active..." },
  { id: "payment", name: "Payment Reminder", preview: "Your monthly subscription is due. Please make payment..." },
  { id: "maintenance", name: "Maintenance Notice", preview: "Scheduled maintenance will occur on..." },
  { id: "expiry", name: "Service Expiry", preview: "Your internet service will expire in 3 days..." },
]

export default function SendSMS() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
          <MessageSquare className="h-5 w-5 text-green-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Send SMS</h1>
          <p className="text-gray-500">Send SMS notifications to your clients</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* SMS Composer */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5 text-green-500" />
                Compose SMS
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="recipients">Recipients</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select recipient group" />
                  </SelectTrigger>
                  <SelectContent>
                    {clientGroups.map((group) => (
                      <SelectItem key={group.id} value={group.id}>
                        {group.name} ({group.count} clients)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="customNumbers">Custom Phone Numbers (Optional)</Label>
                <Textarea
                  id="customNumbers"
                  placeholder="Enter phone numbers separated by commas (e.g., +254700123456, +254700234567)"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="template">Use Template (Optional)</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a template" />
                  </SelectTrigger>
                  <SelectContent>
                    {templates.map((template) => (
                      <SelectItem key={template.id} value={template.id}>
                        {template.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Type your message here..." rows={6} className="resize-none" />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>0/160 characters</span>
                  <span>1 SMS</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="schedule" />
                <Label htmlFor="schedule">Schedule for later</Label>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="scheduleDate">Date</Label>
                  <Input id="scheduleDate" type="date" disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="scheduleTime">Time</Label>
                  <Input id="scheduleTime" type="time" disabled />
                </div>
              </div>

              <div className="flex space-x-4">
                <Button variant="outline" className="flex-1">
                  <FileText className="h-4 w-4 mr-2" />
                  Save as Template
                </Button>
                <Button className="flex-1 bg-green-500 hover:bg-green-600">
                  <Send className="h-4 w-4 mr-2" />
                  Send SMS
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* SMS Statistics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-green-500" />
                SMS Statistics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">SMS Balance:</span>
                <Badge variant="default" className="bg-green-500">
                  1,250 SMS
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Sent Today:</span>
                <span className="font-semibold">45</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Sent This Month:</span>
                <span className="font-semibold">1,234</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Delivery Rate:</span>
                <span className="font-semibold text-green-600">98.5%</span>
              </div>
              <Button variant="outline" className="w-full">
                <Users className="h-4 w-4 mr-2" />
                Buy More SMS
              </Button>
            </CardContent>
          </Card>

          {/* Quick Templates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-green-500" />
                Quick Templates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {templates.map((template) => (
                <div key={template.id} className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="font-medium text-sm">{template.name}</div>
                  <div className="text-xs text-gray-500 mt-1 truncate">{template.preview}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-green-500" />
                Recent SMS
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">
                <div className="flex justify-between items-center">
                  <span>Payment Reminder</span>
                  <Badge variant="default" className="bg-green-500 text-xs">
                    Sent
                  </Badge>
                </div>
                <div className="text-xs text-gray-500">23 recipients • 2 hours ago</div>
              </div>
              <div className="text-sm">
                <div className="flex justify-between items-center">
                  <span>Maintenance Notice</span>
                  <Badge variant="secondary" className="text-xs">
                    Scheduled
                  </Badge>
                </div>
                <div className="text-xs text-gray-500">156 recipients • Tomorrow 9:00 AM</div>
              </div>
              <div className="text-sm">
                <div className="flex justify-between items-center">
                  <span>Welcome Message</span>
                  <Badge variant="default" className="bg-green-500 text-xs">
                    Sent
                  </Badge>
                </div>
                <div className="text-xs text-gray-500">5 recipients • Yesterday</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
