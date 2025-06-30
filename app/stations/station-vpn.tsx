"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Shield, Plus, Download, Upload, Key, Lock } from "lucide-react"

const vpnConnections = [
  {
    id: 1,
    name: "Main Office VPN",
    station: "Main Station - CBD",
    protocol: "OpenVPN",
    status: "connected",
    uptime: "2d 14h 32m",
    dataTransfer: "2.4 GB",
  },
  {
    id: 2,
    name: "Branch Office VPN",
    station: "Branch Station - Westlands",
    protocol: "IPSec",
    status: "connected",
    uptime: "1d 8h 15m",
    dataTransfer: "1.8 GB",
  },
  {
    id: 3,
    name: "Remote Access VPN",
    station: "Remote Station - Karen",
    protocol: "WireGuard",
    status: "disconnected",
    uptime: "0h 0m",
    dataTransfer: "0 GB",
  },
]

export default function StationVPN() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
            <Shield className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Station VPN</h1>
            <p className="text-gray-500">Manage VPN connections for your stations</p>
          </div>
        </div>
        <Button className="bg-green-500 hover:bg-green-600">
          <Plus className="h-4 w-4 mr-2" />
          Add VPN Connection
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total VPN Connections</CardTitle>
            <Shield className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Across all stations</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Connections</CardTitle>
            <Lock className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Currently connected</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Transfer</CardTitle>
            <Upload className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2 GB</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Uptime</CardTitle>
            <Key className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.5%</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* VPN Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              New VPN Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="vpnName">VPN Connection Name</Label>
              <Input id="vpnName" placeholder="Enter VPN name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="station">Select Station</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose station" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="main">Main Station - CBD</SelectItem>
                  <SelectItem value="branch">Branch Station - Westlands</SelectItem>
                  <SelectItem value="remote">Remote Station - Karen</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="protocol">VPN Protocol</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select protocol" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="openvpn">OpenVPN</SelectItem>
                  <SelectItem value="ipsec">IPSec</SelectItem>
                  <SelectItem value="wireguard">WireGuard</SelectItem>
                  <SelectItem value="pptp">PPTP</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="serverAddress">Server Address</Label>
              <Input id="serverAddress" placeholder="vpn.example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="port">Port</Label>
              <Input id="port" placeholder="1194" />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto Connect</Label>
                <p className="text-sm text-gray-500">Connect automatically on startup</p>
              </div>
              <Switch />
            </div>
            <Button className="w-full bg-green-500 hover:bg-green-600">Create VPN Connection</Button>
          </CardContent>
        </Card>

        {/* Certificate Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5 text-green-500" />
              Certificate Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="certificate">Upload Certificate</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Click to upload certificate file</p>
                <p className="text-xs text-gray-400">Supports .crt, .pem, .p12 files</p>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="privateKey">Private Key</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Key className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Click to upload private key file</p>
                <p className="text-xs text-gray-400">Supports .key, .pem files</p>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="caCertificate">CA Certificate</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Shield className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Click to upload CA certificate</p>
                <p className="text-xs text-gray-400">Certificate Authority file</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" className="flex-1">
                <Download className="h-4 w-4 mr-2" />
                Generate Certificate
              </Button>
              <Button variant="outline" className="flex-1">
                <Key className="h-4 w-4 mr-2" />
                Import Existing
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* VPN Connections Table */}
      <Card>
        <CardHeader>
          <CardTitle>Active VPN Connections</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Connection Name</TableHead>
                <TableHead>Station</TableHead>
                <TableHead>Protocol</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Uptime</TableHead>
                <TableHead>Data Transfer</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vpnConnections.map((connection) => (
                <TableRow key={connection.id}>
                  <TableCell className="font-medium">{connection.name}</TableCell>
                  <TableCell>{connection.station}</TableCell>
                  <TableCell>{connection.protocol}</TableCell>
                  <TableCell>
                    <Badge
                      variant={connection.status === "connected" ? "default" : "destructive"}
                      className={connection.status === "connected" ? "bg-green-500" : ""}
                    >
                      {connection.status === "connected" ? (
                        <Shield className="h-3 w-3 mr-1" />
                      ) : (
                        <Lock className="h-3 w-3 mr-1" />
                      )}
                      {connection.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{connection.uptime}</TableCell>
                  <TableCell>{connection.dataTransfer}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        {connection.status === "connected" ? "Disconnect" : "Connect"}
                      </Button>
                      <Button variant="ghost" size="sm">
                        Configure
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
