"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Plus, Edit, Trash2, Copy, FileText, MessageSquare } from "lucide-react"

const smsTemplates = [
  {
    id: 1,
    name: "Welcome Message",
    category: "Onboarding",
    content:
      "Welcome to ORANET! Your internet service is now active. Username: {username}, Password: {password}. For support, call +254700000000.",
    variables: ["username", "password"],
    usage: 45,
    lastUsed: "2024-01-15",
    status: "active",
  },
  {
    id: 2,
    name: "Payment Reminder",
    category: "Billing",
    content:
      "Dear {client_name}, your monthly subscription of {amount} is due on {due_date}. Pay via M-Pesa: 123456. Thank you!",
    variables: ["client_name", "amount", "due_date"],
    usage: 123,
    lastUsed: "2024-01-15",
    status: "active",
  },
  {
    id: 3,
    name: "Service Expiry Warning",
    category: "Alerts",
    content:
      "Hi {client_name}, your internet service will expire in {days} days. Please renew to avoid disconnection. ORANET Team.",
    variables: ["client_name", "days"],
    usage: 67,
    lastUsed: "2024-01-14",
    status: "active",
  },
  {
    id: 4,
    name: "Maintenance Notice",
    category: "Announcements",
    content:
      "NOTICE: Scheduled maintenance on {date} from {start_time} to {end_time}. Service may be interrupted. We apologize for any inconvenience.",
    variables: ["date", "start_time", "end_time"],
    usage: 12,
    lastUsed: "2024-01-10",
    status: "active",
  },
  {
    id: 5,
    name: "Data Limit Warning",
    category: "Alerts",
    content:
      "Dear {client_name}, you have used {percentage}% of your monthly data allowance. Current usage: {used_data}/{total_data}GB.",
    variables: ["client_name", "percentage", "used_data", "total_data"],
    usage: 34,
    lastUsed: "2024-01-12",
    status: "draft",
  },
]

const categories = ["All", "Onboarding", "Billing", "Alerts", "Announcements", "Support"]

export default function SMSTemplates() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">SMS Templates</h1>
          <p className="text-gray-500">Create and manage SMS message templates</p>
        </div>
        <Button className="bg-green-500 hover:bg-green-600">
          <Plus className="h-4 w-4 mr-2" />
          Create Template
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Template List */}
        <div className="lg:col-span-2 space-y-6">
          {/* Search and Filter */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search templates..." className="pl-8" />
                </div>
                <div className="flex space-x-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={category === "All" ? "default" : "outline"}
                      size="sm"
                      className={category === "All" ? "bg-green-500 hover:bg-green-600" : ""}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Templates Table */}
          <Card>
            <CardHeader>
              <CardTitle>All Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Template Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Variables</TableHead>
                    <TableHead>Usage</TableHead>
                    <TableHead>Last Used</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {smsTemplates.map((template) => (
                    <TableRow key={template.id}>
                      <TableCell className="font-medium">{template.name}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{template.category}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {template.variables.map((variable) => (
                            <Badge key={variable} variant="outline" className="text-xs">
                              {`{${variable}}`}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>{template.usage}</TableCell>
                      <TableCell>{template.lastUsed}</TableCell>
                      <TableCell>
                        <Badge
                          variant={template.status === "active" ? "default" : "secondary"}
                          className={template.status === "active" ? "bg-green-500" : ""}
                        >
                          {template.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Copy className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Template Editor */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-green-500" />
                Create Template
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="templateName">Template Name</Label>
                <Input id="templateName" placeholder="Enter template name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <select className="w-full p-2 border rounded-md">
                  <option>Select category</option>
                  <option>Onboarding</option>
                  <option>Billing</option>
                  <option>Alerts</option>
                  <option>Announcements</option>
                  <option>Support</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Message Content</Label>
                <Textarea
                  id="content"
                  placeholder="Type your message template here..."
                  rows={6}
                  className="resize-none"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>0/160 characters</span>
                  <span>1 SMS</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Available Variables</Label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "client_name",
                    "username",
                    "password",
                    "amount",
                    "due_date",
                    "plan_name",
                    "expiry_date",
                    "data_used",
                    "data_limit",
                  ].map((variable) => (
                    <Button
                      key={variable}
                      variant="outline"
                      size="sm"
                      className="text-xs h-7"
                      onClick={() => {
                        // Insert variable into textarea
                      }}
                    >
                      {`{${variable}}`}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" className="flex-1">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Preview
                </Button>
                <Button className="flex-1 bg-green-500 hover:bg-green-600">Save Template</Button>
              </div>
            </CardContent>
          </Card>

          {/* Template Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>Template Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Total Templates:</span>
                <span className="font-semibold">5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Active Templates:</span>
                <span className="font-semibold text-green-600">4</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Draft Templates:</span>
                <span className="font-semibold text-orange-600">1</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Most Used:</span>
                <span className="font-semibold">Payment Reminder</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
