"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Activity, Plus, Edit, Trash2, Gauge } from "lucide-react"

const profiles = [
  {
    id: 1,
    name: "Basic Profile",
    downloadSpeed: "5 Mbps",
    uploadSpeed: "2 Mbps",
    priority: "Normal",
    status: "active",
    plans: 3,
  },
  {
    id: 2,
    name: "Premium Profile",
    downloadSpeed: "10 Mbps",
    uploadSpeed: "5 Mbps",
    priority: "High",
    status: "active",
    plans: 2,
  },
]

export default function BandwidthProfile() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
            <Activity className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Bandwidth Profiles</h1>
            <p className="text-gray-500">Manage bandwidth allocation profiles for your plans</p>
          </div>
        </div>
        <Button className="bg-green-500 hover:bg-green-600">
          <Plus className="h-4 w-4 mr-2" />
          Add Profile
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Create Profile Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gauge className="h-5 w-5 text-green-500" />
              Create Bandwidth Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="profileName">Profile Name</Label>
              <Input id="profileName" placeholder="e.g., High Speed Profile" />
            </div>
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
            <div className="space-y-2">
              <Label htmlFor="priority">Priority Level</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
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
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Enable Profile</Label>
                <p className="text-sm text-gray-500">Make this profile available for use</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Button className="w-full bg-green-500 hover:bg-green-600">Create Profile</Button>
          </CardContent>
        </Card>

        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-green-500" />
              Advanced Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="maxConnections">Max Concurrent Connections</Label>
              <Input id="maxConnections" type="number" placeholder="100" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="queueType">Queue Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select queue type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pcq">PCQ (Per Connection Queue)</SelectItem>
                  <SelectItem value="simple">Simple Queue</SelectItem>
                  <SelectItem value="htb">HTB (Hierarchical Token Bucket)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Traffic Shaping</Label>
                <p className="text-sm text-gray-500">Enable advanced traffic control</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Fair Queuing</Label>
                <p className="text-sm text-gray-500">Ensure fair bandwidth distribution</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="space-y-2">
              <Label htmlFor="packetSize">Max Packet Size (bytes)</Label>
              <Input id="packetSize" type="number" placeholder="1500" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bufferSize">Buffer Size (KB)</Label>
              <Input id="bufferSize" type="number" placeholder="64" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Profiles Table */}
      <Card>
        <CardHeader>
          <CardTitle>Bandwidth Profiles</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Profile Name</TableHead>
                <TableHead>Download Speed</TableHead>
                <TableHead>Upload Speed</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Plans Using</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {profiles.map((profile) => (
                <TableRow key={profile.id}>
                  <TableCell className="font-medium">{profile.name}</TableCell>
                  <TableCell>{profile.downloadSpeed}</TableCell>
                  <TableCell>{profile.uploadSpeed}</TableCell>
                  <TableCell>
                    <Badge
                      variant={profile.priority === "High" ? "default" : "secondary"}
                      className={profile.priority === "High" ? "bg-green-500" : ""}
                    >
                      {profile.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="default" className="bg-green-500">
                      {profile.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{profile.plans}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
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
  )
}
