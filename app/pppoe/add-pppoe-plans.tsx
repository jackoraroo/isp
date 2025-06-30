"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Plus, Network, Gauge, Settings } from "lucide-react"

export default function AddPPPoEPlans() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
          <Plus className="h-5 w-5 text-green-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Add PPPoE / Static Plan</h1>
          <p className="text-gray-500">Create a new PPPoE or static IP subscription plan</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Basic Plan Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Network className="h-5 w-5 text-green-500" />
              Plan Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="planName">Plan Name</Label>
              <Input id="planName" placeholder="e.g., 10 Mbps Business Plan" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Brief description of the plan" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="planType">Plan Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select plan type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pppoe">PPPoE</SelectItem>
                  <SelectItem value="static">Static IP</SelectItem>
                  <SelectItem value="hybrid">Hybrid (PPPoE + Static)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Monthly Price (KSh)</Label>
                <Input id="price" type="number" placeholder="2500.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="setupFee">Setup Fee (KSh)</Label>
                <Input id="setupFee" type="number" placeholder="500.00" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Speed & Bandwidth Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gauge className="h-5 w-5 text-green-500" />
              Speed & Bandwidth
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="downloadSpeed">Download Speed (Mbps)</Label>
                <Input id="downloadSpeed" type="number" placeholder="10" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="uploadSpeed">Upload Speed (Mbps)</Label>
                <Input id="uploadSpeed" type="number" placeholder="5" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="burstDownload">Burst Download (Mbps)</Label>
                <Input id="burstDownload" type="number" placeholder="15" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="burstUpload">Burst Upload (Mbps)</Label>
                <Input id="burstUpload" type="number" placeholder="8" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dataLimit">Monthly Data Limit (GB)</Label>
              <Input id="dataLimit" type="number" placeholder="Unlimited or specify limit" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fairUsagePolicy">Fair Usage Policy (GB)</Label>
              <Input id="fairUsagePolicy" type="number" placeholder="500" />
            </div>
          </CardContent>
        </Card>

        {/* IP Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Network className="h-5 w-5 text-green-500" />
              IP Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ipPool">IP Pool</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select IP pool" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="main">Main Pool (192.168.100.0/24)</SelectItem>
                  <SelectItem value="static">Static Pool (10.0.0.0/24)</SelectItem>
                  <SelectItem value="business">Business Pool (172.16.0.0/24)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Static IP Assignment</Label>
                <p className="text-sm text-gray-500">Assign dedicated static IP</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Public IP</Label>
                <p className="text-sm text-gray-500">Provide public IP address</p>
              </div>
              <Switch />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dnsServers">DNS Servers</Label>
              <Input id="dnsServers" placeholder="8.8.8.8, 8.8.4.4" />
            </div>
          </CardContent>
        </Card>

        {/* Advanced Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-green-500" />
              Advanced Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="sessionTimeout">Session Timeout (hours)</Label>
              <Input id="sessionTimeout" type="number" placeholder="24" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="idleTimeout">Idle Timeout (minutes)</Label>
              <Input id="idleTimeout" type="number" placeholder="30" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxSessions">Max Concurrent Sessions</Label>
              <Input id="maxSessions" type="number" placeholder="1" />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Enable Plan</Label>
                <p className="text-sm text-gray-500">Make this plan available for subscription</p>
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
                <Label>Business Plan</Label>
                <p className="text-sm text-gray-500">Mark as business/enterprise plan</p>
              </div>
              <Switch />
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
