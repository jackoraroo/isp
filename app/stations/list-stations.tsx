"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Plus, Edit, Trash2, Wifi, WifiOff, MapPin } from "lucide-react"

const stations = [
  {
    id: 1,
    name: "Main Station - CBD",
    location: "Nairobi CBD",
    ipAddress: "192.168.1.1",
    status: "online",
    clients: 45,
    bandwidth: "100 Mbps",
    lastSeen: "2 minutes ago",
  },
  {
    id: 2,
    name: "Branch Station - Westlands",
    location: "Westlands",
    ipAddress: "192.168.1.2",
    status: "online",
    clients: 32,
    bandwidth: "50 Mbps",
    lastSeen: "5 minutes ago",
  },
  {
    id: 3,
    name: "Remote Station - Karen",
    location: "Karen",
    ipAddress: "192.168.1.3",
    status: "offline",
    clients: 0,
    bandwidth: "25 Mbps",
    lastSeen: "2 hours ago",
  },
  {
    id: 4,
    name: "Station Alpha - Kilimani",
    location: "Kilimani",
    ipAddress: "192.168.1.4",
    status: "online",
    clients: 28,
    bandwidth: "75 Mbps",
    lastSeen: "1 minute ago",
  },
]

export default function ListStations() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">WiFi Stations</h1>
          <p className="text-gray-500">Manage and monitor all your WiFi stations</p>
        </div>
        <Button className="bg-green-500 hover:bg-green-600">
          <Plus className="h-4 w-4 mr-2" />
          Add Station
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Stations</CardTitle>
            <Wifi className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">+1 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Online Stations</CardTitle>
            <Wifi className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">75% uptime</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
            <MapPin className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">105</div>
            <p className="text-xs text-muted-foreground">Active connections</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bandwidth</CardTitle>
            <WifiOff className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">250 Mbps</div>
            <p className="text-xs text-muted-foreground">Combined capacity</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search stations..." className="pl-8" />
            </div>
            <Button variant="outline">Filter</Button>
          </div>
        </CardHeader>
      </Card>

      {/* Stations Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Stations</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Station Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Clients</TableHead>
                <TableHead>Bandwidth</TableHead>
                <TableHead>Last Seen</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stations.map((station) => (
                <TableRow key={station.id}>
                  <TableCell className="font-medium">{station.name}</TableCell>
                  <TableCell>{station.location}</TableCell>
                  <TableCell>{station.ipAddress}</TableCell>
                  <TableCell>
                    <Badge
                      variant={station.status === "online" ? "default" : "destructive"}
                      className={station.status === "online" ? "bg-green-500" : ""}
                    >
                      {station.status === "online" ? (
                        <Wifi className="h-3 w-3 mr-1" />
                      ) : (
                        <WifiOff className="h-3 w-3 mr-1" />
                      )}
                      {station.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{station.clients}</TableCell>
                  <TableCell>{station.bandwidth}</TableCell>
                  <TableCell>{station.lastSeen}</TableCell>
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
