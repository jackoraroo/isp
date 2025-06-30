"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen } from "lucide-react"

export default function KnowledgeBase() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Knowledge Base</h1>
        <p className="text-gray-500">Browse help articles and documentation</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-green-500" />
            Help Documentation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Knowledge base interface</p>
        </CardContent>
      </Card>
    </div>
  )
}
