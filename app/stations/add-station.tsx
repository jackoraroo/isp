"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Wifi, MapPin, Settings, Network } from "lucide-react"

export default function AddStation() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
          <Wifi className="h-5 w-5 text-green-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Add New Station</h1>
          <p className="text-gray-500">Configure a new WiFi station for your network</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-green-500" />
              Basic Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="stationName">Station Name</Label>
              <Input id="stationName" placeholder="Enter station name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="Enter station location" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Enter station description" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stationType">Station Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select station type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="main">Main Station</SelectItem>
                  <SelectItem value="branch">Branch Station</SelectItem>
                  <SelectItem value="remote">Remote Station</SelectItem>
                  <SelectItem value="backup">Backup Station</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Network Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Network className="h-5 w-5 text-green-500" />
              Network Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ipAddress">IP Address</Label>
              <Input id="ipAddress" placeholder="192.168.1.1" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subnetMask">Subnet Mask</Label>
              <Input id="subnetMask" placeholder="255.255.255.0" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gateway">Gateway</Label>
              <Input id="gateway" placeholder="192.168.1.1" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dns">DNS Server</Label>
              <Input id="dns" placeholder="8.8.8.8" />
            </div>
          </CardContent>
        </Card>

        {/* WiFi Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wifi className="h-5 w-5 text-green-500" />
              WiFi Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ssid">SSID (Network Name)</Label>
              <Input id="ssid" placeholder="ORANET-WIFI" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">WiFi Password</Label>
              <Input id="password" type="password" placeholder="Enter WiFi password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="channel">WiFi Channel</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select channel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="auto">Auto</SelectItem>
                  <SelectItem value="1">Channel 1</SelectItem>
                  <SelectItem value="6">Channel 6</SelectItem>
                  <SelectItem value="11">Channel 11</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bandwidth">Bandwidth Limit</Label>
              <Input id="bandwidth" placeholder="100 Mbps" />
            </div>
          </CardContent>
        </Card>

        {/* Advanced Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-green-500" />
              Advanced Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Enable Station</Label>
                <p className="text-sm text-gray-500">Activate this station immediately</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto Backup</Label>
                <p className="text-sm text-gray-500">Enable automatic configuration backup</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Guest Network</Label>
                <p className="text-sm text-gray-500">Enable guest network access</p>
              </div>
              <Switch />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxClients">Maximum Clients</Label>
              <Input id="maxClients" type="number" placeholder="50" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-green-500 hover:bg-green-600">Create Station</Button>
      </div>
    </div>
  )
}
