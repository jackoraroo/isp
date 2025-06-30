"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Plus, Edit, Trash2, Users, UserCheck, UserX, Network, Activity } from "lucide-react"

const pppoeClients = [
  {
    id: 1,
    name: "John Business Ltd",
    username: "john_biz",
    email: "john@business.com",
    phone: "+254 700 123 456",
    plan: "10 Mbps Business",
    status: "online",
    ipAddress: "192.168.100.15",
    sessionTime: "2d 14h 32m",
    dataUsed: "45.2 GB",
    lastLogin: "2024-01-15 09:30",
    location: "Main Station",
  },
  {
    id: 2,
    name: "Sarah Tech Solutions",
    username: "sarah_tech",
    email: "sarah@techsol.com",
    phone: "+254 700 234 567",
    plan: "20 Mbps Enterprise",
    status: "online",
    ipAddress: "10.0.0.25",
    sessionTime: "1d 8h 15m",
    dataUsed: "78.9 GB",
    lastLogin: "2024-01-15 08:45",
    location: "Branch Station",
  },
  {
    id: 3,
    name: "Mike's Office",
    username: "mike_office",
    email: "mike@office.com",
    phone: "+254 700 345 678",
    plan: "5 Mbps Standard",
    status: "offline",
    ipAddress: "192.168.100.45",
    sessionTime: "0h 0m",
    dataUsed: "12.3 GB",
    lastLogin: "2024-01-14 17:20",
    location: "Remote Station",
  },
]

export default function PPPoEClients() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">PPPoE / Static Clients</h1>
          <p className="text-gray-500">Manage PPPoE and static IP client connections</p>
        </div>
        <Button className="bg-green-500 hover:bg-green-600">
          <Plus className="h-4 w-4 mr-2" />
          Add Client
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
            <Users className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">PPPoE & Static IP</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Online Clients</CardTitle>
            <UserCheck className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Currently connected</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Data Usage</CardTitle>
            <Activity className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">136.4 GB</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
            <Network className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Live connections</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search clients..." className="pl-8" />
            </div>
            <Button variant="outline">Filter</Button>
            <Button variant="outline">Export</Button>
            <Button variant="outline">Refresh</Button>
          </div>
        </CardHeader>
      </Card>

      {/* Clients Table */}
      <Card>
        <CardHeader>
          <CardTitle>All PPPoE / Static Clients</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>Session Time</TableHead>
                <TableHead>Data Used</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pppoeClients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback>
                          {client.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{client.name}</div>
                        <div className="text-sm text-gray-500">{client.email}</div>
                        <div className="text-sm text-gray-500">{client.phone}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-sm">{client.username}</TableCell>
                  <TableCell>{client.plan}</TableCell>
                  <TableCell>
                    <Badge
                      variant={client.status === "online" ? "default" : "secondary"}
                      className={client.status === "online" ? "bg-green-500" : ""}
                    >
                      {client.status === "online" ? (
                        <UserCheck className="h-3 w-3 mr-1" />
                      ) : (
                        <UserX className="h-3 w-3 mr-1" />
                      )}
                      {client.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-mono text-sm">{client.ipAddress}</TableCell>
                  <TableCell>{client.sessionTime}</TableCell>
                  <TableCell>{client.dataUsed}</TableCell>
                  <TableCell className="text-sm">{client.lastLogin}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        {client.status === "online" ? "Disconnect" : "Connect"}
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
