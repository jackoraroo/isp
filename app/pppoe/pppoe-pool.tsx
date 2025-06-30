"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Network, Plus, Edit, Trash2, Globe } from "lucide-react"

const ipPools = [
  {
    id: 1,
    name: "Main Pool",
    network: "192.168.100.0/24",
    startIP: "192.168.100.10",
    endIP: "192.168.100.100",
    totalIPs: 91,
    usedIPs: 45,
    status: "active",
  },
  {
    id: 2,
    name: "Static Pool",
    network: "10.0.0.0/24",
    startIP: "10.0.0.10",
    endIP: "10.0.0.50",
    totalIPs: 41,
    usedIPs: 12,
    status: "active",
  },
]

export default function PPPoEPool() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
            <Network className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">PPPoE / Static IP Pool</h1>
            <p className="text-gray-500">Manage IP address pools for PPPoE and static connections</p>
          </div>
        </div>
        <Button className="bg-green-500 hover:bg-green-600">
          <Plus className="h-4 w-4 mr-2" />
          Add IP Pool
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-green-500" />
              Create IP Pool
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="poolName">Pool Name</Label>
              <Input id="poolName" placeholder="e.g., Main Pool" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="network">Network Address</Label>
              <Input id="network" placeholder="192.168.1.0/24" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startIP">Start IP</Label>
                <Input id="startIP" placeholder="192.168.1.10" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endIP">End IP</Label>
                <Input id="endIP" placeholder="192.168.1.100" />
              </div>
            </div>
            <Button className="w-full bg-green-500 hover:bg-green-600">Create Pool</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pool Statistics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Total Pools:</span>
              <span className="font-semibold">2</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Total IP Addresses:</span>
              <span className="font-semibold">132</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Used IP Addresses:</span>
              <span className="font-semibold text-green-600">57</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Available IP Addresses:</span>
              <span className="font-semibold text-blue-600">75</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>IP Pools</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pool Name</TableHead>
                <TableHead>Network</TableHead>
                <TableHead>IP Range</TableHead>
                <TableHead>Total IPs</TableHead>
                <TableHead>Used IPs</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ipPools.map((pool) => (
                <TableRow key={pool.id}>
                  <TableCell className="font-medium">{pool.name}</TableCell>
                  <TableCell>{pool.network}</TableCell>
                  <TableCell>
                    {pool.startIP} - {pool.endIP}
                  </TableCell>
                  <TableCell>{pool.totalIPs}</TableCell>
                  <TableCell>{pool.usedIPs}</TableCell>
                  <TableCell>
                    <Badge variant="default" className="bg-green-500">
                      {pool.status}
                    </Badge>
                  </TableCell>
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
