"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Plus, Wifi, Clock, DollarSign, Users } from "lucide-react"

export default function AddHotspotPlans() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
          <Plus className="h-5 w-5 text-green-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Add Hotspot Plan</h1>
          <p className="text-gray-500">Create a new WiFi hotspot subscription plan</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Basic Plan Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wifi className="h-5 w-5 text-green-500" />
              Plan Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="planName">Plan Name</Label>
              <Input id="planName" placeholder="e.g., Quick Browse" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Brief description of the plan" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price (KSh)</Label>
                <Input id="price" type="number" placeholder="10.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="currency">Currency</Label>
                <Select defaultValue="ksh">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ksh">KSh (Kenyan Shilling)</SelectItem>
                    <SelectItem value="usd">USD (US Dollar)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Time & Speed Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-green-500" />
              Time & Speed Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="duration">Duration</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="20m">20 Minutes</SelectItem>
                  <SelectItem value="30m">30 Minutes</SelectItem>
                  <SelectItem value="1h">1 Hour</SelectItem>
                  <SelectItem value="2h">2 Hours</SelectItem>
                  <SelectItem value="3h">3 Hours</SelectItem>
                  <SelectItem value="6h">6 Hours</SelectItem>
                  <SelectItem value="12h">12 Hours</SelectItem>
                  <SelectItem value="24h">24 Hours</SelectItem>
                  <SelectItem value="7d">7 Days</SelectItem>
                  <SelectItem value="30d">30 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="downloadSpeed">Download Speed (Mbps)</Label>
                <Input id="downloadSpeed" type="number" placeholder="5" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="uploadSpeed">Upload Speed (Mbps)</Label>
                <Input id="uploadSpeed" type="number" placeholder="2" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dataLimit">Data Limit (GB)</Label>
              <Input id="dataLimit" type="number" placeholder="Unlimited or specify limit" />
            </div>
          </CardContent>
        </Card>

        {/* Device & User Limits */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-green-500" />
              Device & User Limits
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="maxDevices">Maximum Devices</Label>
              <Input id="maxDevices" type="number" placeholder="1" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxUsers">Maximum Concurrent Users</Label>
              <Input id="maxUsers" type="number" placeholder="1" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="idleTimeout">Idle Timeout (minutes)</Label>
              <Input id="idleTimeout" type="number" placeholder="15" />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Allow Device Sharing</Label>
                <p className="text-sm text-gray-500">Allow multiple devices to share the connection</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Advanced Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-500" />
              Advanced Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Enable Plan</Label>
                <p className="text-sm text-gray-500">Make this plan available for purchase</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto-Renewal</Label>
                <p className="text-sm text-gray-500">Allow automatic plan renewal</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Featured Plan</Label>
                <p className="text-sm text-gray-500">Highlight this plan in the portal</p>
              </div>
              <Switch />
            </div>
            <div className="space-y-2">
              <Label htmlFor="validityPeriod">Validity Period (days)</Label>
              <Input id="validityPeriod" type="number" placeholder="30" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gracePeriod">Grace Period (hours)</Label>
              <Input id="gracePeriod" type="number" placeholder="24" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-green-500 hover:bg-green-600">Create Plan</Button>
      </div>
    </div>
  )
}
