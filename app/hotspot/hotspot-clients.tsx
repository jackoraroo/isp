"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Users, Wifi, Clock, Activity } from "lucide-react"

const clients = [
  {
    id: 1,
    macAddress: "AA:BB:CC:DD:EE:FF",
    ipAddress: "192.168.1.100",
    username: "user001",
    plan: "Standard",
    status: "online",
    sessionTime: "25 minutes",
    dataUsed: "45 MB",
    location: "Main Station",
  },
  {
    id: 2,
    macAddress: "11:22:33:44:55:66",
    ipAddress: "192.168.1.101",
    username: "user002",
    plan: "Quick Browse",
    status: "offline",
    sessionTime: "0 minutes",
    dataUsed: "0 MB",
    location: "Branch Station",
  },
]

export default function HotspotClients() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Hotspot Clients</h1>
        <p className="text-gray-500">Monitor active hotspot client connections</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
            <Users className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Online</CardTitle>
            <Wifi className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Session Time</CardTitle>
            <Clock className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25 min</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Usage</CardTitle>
            <Activity className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45 MB</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search clients..." className="pl-8" />
            </div>
            <Button variant="outline">Refresh</Button>
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Active Connections</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>MAC Address</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Session Time</TableHead>
                <TableHead>Data Used</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell className="font-mono text-sm">{client.macAddress}</TableCell>
                  <TableCell>{client.ipAddress}</TableCell>
                  <TableCell>{client.username}</TableCell>
                  <TableCell>{client.plan}</TableCell>
                  <TableCell>
                    <Badge
                      variant={client.status === "online" ? "default" : "secondary"}
                      className={client.status === "online" ? "bg-green-500" : ""}
                    >
                      {client.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{client.sessionTime}</TableCell>
                  <TableCell>{client.dataUsed}</TableCell>
                  <TableCell>{client.location}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      {client.status === "online" ? "Disconnect" : "Connect"}
                    </Button>
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
