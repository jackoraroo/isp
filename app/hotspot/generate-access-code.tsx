"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Key, Copy, Download, QrCode, RefreshCw } from "lucide-react"

const generatedCodes = [
  {
    id: 1,
    code: "WIFI2024001",
    plan: "Standard",
    status: "unused",
    generatedDate: "2024-01-15",
    expiryDate: "2024-01-22",
  },
  {
    id: 2,
    code: "WIFI2024002",
    plan: "Quick Browse",
    status: "used",
    generatedDate: "2024-01-14",
    expiryDate: "2024-01-21",
  },
]

export default function GenerateAccessCode() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center space-x-4">
        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
          <Key className="h-5 w-5 text-green-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Generate Access Codes</h1>
          <p className="text-gray-500">Create WiFi access codes for your hotspot plans</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Code Generation Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5 text-green-500" />
              Generate New Codes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="plan">Select Plan</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="quick">Quick Browse - KSh 5</SelectItem>
                  <SelectItem value="standard">Standard - KSh 10</SelectItem>
                  <SelectItem value="extended">Extended - KSh 20</SelectItem>
                  <SelectItem value="halfday">Half Day - KSh 45</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="quantity">Number of Codes</Label>
              <Input id="quantity" type="number" placeholder="10" min="1" max="100" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prefix">Code Prefix (Optional)</Label>
              <Input id="prefix" placeholder="WIFI2024" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="validityDays">Validity Period (Days)</Label>
              <Input id="validityDays" type="number" placeholder="7" />
            </div>
            <div className="flex space-x-2">
              <Button className="flex-1 bg-green-500 hover:bg-green-600">
                <Key className="h-4 w-4 mr-2" />
                Generate Codes
              </Button>
              <Button variant="outline">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Bulk Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5 text-green-500" />
              Bulk Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Download as CSV
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Download as PDF
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <QrCode className="h-4 w-4 mr-2" />
                Generate QR Codes
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Copy className="h-4 w-4 mr-2" />
                Copy All Codes
              </Button>
            </div>
            <div className="pt-4 border-t">
              <h4 className="font-medium mb-2">Quick Stats</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Total Generated:</span>
                  <span className="font-medium">2</span>
                </div>
                <div className="flex justify-between">
                  <span>Unused:</span>
                  <span className="font-medium text-green-600">1</span>
                </div>
                <div className="flex justify-between">
                  <span>Used:</span>
                  <span className="font-medium text-blue-600">1</span>
                </div>
                <div className="flex justify-between">
                  <span>Expired:</span>
                  <span className="font-medium text-red-600">0</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Generated Codes Table */}
      <Card>
        <CardHeader>
          <CardTitle>Generated Access Codes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Access Code</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Generated Date</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {generatedCodes.map((code) => (
                <TableRow key={code.id}>
                  <TableCell className="font-mono font-medium">{code.code}</TableCell>
                  <TableCell>{code.plan}</TableCell>
                  <TableCell>
                    <Badge
                      variant={code.status === "unused" ? "default" : "secondary"}
                      className={code.status === "unused" ? "bg-green-500" : ""}
                    >
                      {code.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{code.generatedDate}</TableCell>
                  <TableCell>{code.expiryDate}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <QrCode className="h-4 w-4" />
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
