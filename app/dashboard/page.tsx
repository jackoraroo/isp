"use client"
import * as React from "react"
import { AuthGuard } from "@/components/auth-guard"
import {
  Home,
  Radio,
  Users,
  Wifi,
  Network,
  CreditCard,
  Bell,
  BarChart3,
  FileText,
  Settings,
  HelpCircle,
  Shield,
  User,
  LogOut,
  Sun,
  Grid3X3,
  ChevronRight,
  TrendingUp,
  Activity,
  DollarSign,
  ChevronDown,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  Bar,
  BarChart,
  Area,
  AreaChart,
  Pie,
  PieChart,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

// Import all page components
import ListStations from "../stations/list-stations"
import AddStation from "../stations/add-station"
import StationVPN from "../stations/station-vpn"
import AddClient from "../clients/add-client"
import ViewClients from "../clients/view-clients"
import HotspotPlans from "../hotspot/hotspot-plans"
import AddHotspotPlans from "../hotspot/add-hotspot-plans"
import HotspotAccounts from "../hotspot/hotspot-accounts"
import HotspotClients from "../hotspot/hotspot-clients"
import GenerateAccessCode from "../hotspot/generate-access-code"
import BandwidthProfile from "../hotspot/bandwidth-profile"
import PPPoEPool from "../pppoe/pppoe-pool"
import PPPoEPlans from "../pppoe/pppoe-plans"
import AddPPPoEPlans from "../pppoe/add-pppoe-plans"
import PPPoEClients from "../pppoe/pppoe-clients"
import ViewTransactions from "../transactions/view-transactions"
import SendSMS from "../notifications/send-sms"
import SMSTemplates from "../notifications/sms-templates"
import EmailTemplates from "../notifications/email-templates"
import SendEmail from "../notifications/send-email"
import ViewReports from "../reports/view-reports"
import MyInvoices from "../billing/my-invoices"
import GeneralSetup from "../setup/general-setup"
import PaymentSetup from "../setup/payment-setup"
import SMSConfiguration from "../setup/sms-configuration"
import WhatsAppConfiguration from "../setup/whatsapp-configuration"
import EmailConfiguration from "../setup/email-configuration"
import SubmitTicket from "../support/submit-ticket"
import KnowledgeBase from "../support/knowledge-base"
import ContactUs from "../support/contact-us"
import UsersManagement from "../access/users"
import ActivityLog from "../access/activity-log"

// Sample data
const salesData = [
  { month: "Jan", sales: 25 },
  { month: "Feb", sales: 35 },
  { month: "Mar", sales: 130 },
  { month: "Apr", sales: 45 },
  { month: "May", sales: 100 },
  { month: "Jun", sales: 65 },
  { month: "Jul", sales: 80 },
  { month: "Aug", sales: 90 },
  { month: "Sep", sales: 75 },
  { month: "Oct", sales: 85 },
  { month: "Nov", sales: 95 },
  { month: "Dec", sales: 110 },
]

const subscriptionData = [
  { month: "Jan", value: 5.0 },
  { month: "Feb", value: 4.8 },
  { month: "Mar", value: 2.2 },
  { month: "Apr", value: 3.0 },
  { month: "May", value: 1.8 },
  { month: "Jun", value: 2.5 },
  { month: "Jul", value: 3.2 },
  { month: "Aug", value: 4.1 },
  { month: "Sep", value: 3.8 },
  { month: "Oct", value: 4.5 },
  { month: "Nov", value: 5.2 },
  { month: "Dec", value: 5.8 },
]

const hotspotPlanData = [
  { name: "Quick Browse", value: 15, color: "#22c55e" },
  { name: "Standard", value: 20, color: "#16a34a" },
  { name: "Extended", value: 10, color: "#15803d" },
  { name: "Hourly Basic", value: 8, color: "#166534" },
  { name: "Half Day", value: 12, color: "#14532d" },
  { name: "Others", value: 35, color: "#dcfce7" },
]

const pppoePlanData = [
  { name: "5 Mbps", value: 25, color: "#22c55e" },
  { name: "10 Mbps", value: 30, color: "#16a34a" },
  { name: "15 Mbps", value: 15, color: "#15803d" },
  { name: "20 Mbps", value: 20, color: "#166534" },
  { name: "Others", value: 10, color: "#dcfce7" },
]

const staticPlanData = [
  { name: "Basic", value: 20, color: "#22c55e" },
  { name: "Standard", value: 25, color: "#16a34a" },
  { name: "Premium", value: 15, color: "#15803d" },
  { name: "Enterprise", value: 25, color: "#166534" },
  { name: "Custom", value: 15, color: "#dcfce7" },
]

const menuItems = [
  {
    title: "Home",
    icon: Home,
    href: "/dashboard",
    active: true,
  },
  {
    title: "Stations",
    icon: Radio,
    href: "/stations",
    subItems: [
      { title: "List Stations", href: "/stations/list", component: "list-stations" },
      { title: "Add Station", href: "/stations/add", component: "add-station" },
      { title: "Station VPN", href: "/stations/vpn", component: "station-vpn" },
    ],
  },
  {
    title: "Clients",
    icon: Users,
    href: "/clients",
    subItems: [
      { title: "Add Client", href: "/clients/add", component: "add-client" },
      { title: "View Clients", href: "/clients/view", component: "view-clients" },
    ],
  },
  {
    title: "Hotspot",
    icon: Wifi,
    href: "/hotspot",
    subItems: [
      { title: "Hotspot Plans", href: "/hotspot/plans", component: "hotspot-plans" },
      { title: "Add Hotspot Plans", href: "/hotspot/add-plans", component: "add-hotspot-plans" },
      { title: "Hotspot Accounts", href: "/hotspot/accounts", component: "hotspot-accounts" },
      { title: "Hotspot Clients", href: "/hotspot/clients", component: "hotspot-clients" },
      { title: "Generate Access Code", href: "/hotspot/access-code", component: "generate-access-code" },
      { title: "Bandwidth Profile", href: "/hotspot/bandwidth", component: "bandwidth-profile" },
    ],
  },
  {
    title: "PPPoE & Static IP",
    icon: Network,
    href: "/pppoe",
    subItems: [
      { title: "PPPoE / Static IP Pool", href: "/pppoe/pool", component: "pppoe-pool" },
      { title: "PPPoE / Static Plans", href: "/pppoe/plans", component: "pppoe-plans" },
      { title: "Add PPPoE / Static Plans", href: "/pppoe/add-plans", component: "add-pppoe-plans" },
      { title: "PPPoE / Static Clients", href: "/pppoe/clients", component: "pppoe-clients" },
    ],
  },
  {
    title: "Transactions",
    icon: CreditCard,
    href: "/transactions",
    subItems: [{ title: "View Transactions", href: "/transactions/view", component: "view-transactions" }],
  },
  {
    title: "Notification",
    icon: Bell,
    href: "/notifications",
    badge: "3",
    subItems: [
      { title: "Send SMS", href: "/notifications/send-sms", component: "send-sms" },
      { title: "SMS Templates", href: "/notifications/sms-templates", component: "sms-templates" },
      { title: "Email Templates", href: "/notifications/email-templates", component: "email-templates" },
      { title: "Send Email", href: "/notifications/send-email", component: "send-email" },
    ],
  },
  {
    title: "Reports & Analytics",
    icon: BarChart3,
    href: "/reports",
    subItems: [{ title: "View Reports", href: "/reports/view", component: "view-reports" }],
  },
  {
    title: "Billing & Invoices",
    icon: FileText,
    href: "/billing",
    subItems: [{ title: "My Invoices", href: "/billing/invoices", component: "my-invoices" }],
  },
  {
    title: "Setup",
    icon: Settings,
    href: "/setup",
    subItems: [
      { title: "General Setup", href: "/setup/general", component: "general-setup" },
      { title: "Payment Setup", href: "/setup/payment", component: "payment-setup" },
      { title: "SMS Configuration", href: "/setup/sms", component: "sms-configuration" },
      { title: "WhatsApp Configuration", href: "/setup/whatsapp", component: "whatsapp-configuration" },
      { title: "Email Configuration", href: "/setup/email", component: "email-configuration" },
    ],
  },
  {
    title: "Support",
    icon: HelpCircle,
    href: "/support",
    subItems: [
      { title: "Submit Ticket", href: "/support/ticket", component: "submit-ticket" },
      { title: "Knowledge Base", href: "/support/knowledge", component: "knowledge-base" },
      { title: "Contact Us", href: "/support/contact", component: "contact-us" },
    ],
  },
  {
    title: "Access Control",
    icon: Shield,
    href: "/access",
    subItems: [
      { title: "Users", href: "/access/users", component: "users" },
      { title: "Activity Log", href: "/access/activity", component: "activity-log" },
    ],
  },
]

function AppSidebar({ currentPage, setCurrentPage }: { currentPage: string; setCurrentPage: (page: string) => void }) {
  const [openItems, setOpenItems] = React.useState<string[]>([])
  const [userData, setUserData] = React.useState<any>(null)

  React.useEffect(() => {
    // Get user data from localStorage
    const userDataString = localStorage.getItem("user_data")
    if (userDataString) {
      setUserData(JSON.parse(userDataString))
    }
  }, [])

  const toggleItem = (title: string) => {
    setOpenItems((prev) => (prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]))
  }

  const handleNavigation = (component: string, title: string) => {
    setCurrentPage(component)
  }

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem("auth_token")
    localStorage.removeItem("user_data")
    // Redirect to login
    window.location.href = "/auth/login"
  }

  return (
    <Sidebar className="border-r-0 bg-gradient-to-b from-white to-gray-50/50 backdrop-blur-xl">
      <SidebarHeader className="border-b border-gray-200/50 px-6 py-6 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white font-bold text-lg shadow-xl">
            <Wifi className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              ORANET{" "}
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                PORTAL
              </span>
            </h1>
            <p className="text-xs text-gray-500 font-medium">Management Dashboard</p>
          </div>
        </div>
        {userData && (
          <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
            <p className="text-sm font-semibold text-green-800">Welcome back!</p>
            <p className="text-xs text-green-600 font-medium">{userData.name}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-700">Online</span>
            </div>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent className="px-4 py-6 bg-gradient-to-b from-transparent to-gray-50/30">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.subItems ? (
                    <Collapsible open={openItems.includes(item.title)} onOpenChange={() => toggleItem(item.title)}>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:shadow-lg w-full justify-between ${
                            currentPage === "dashboard" && item.title === "Home"
                              ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 shadow-lg border border-green-100"
                              : ""
                          }`}
                        >
                          <div className="flex items-center gap-4 px-4 py-3">
                            <div
                              className={`p-2 rounded-xl transition-all duration-300 ${
                                currentPage === "dashboard" && item.title === "Home"
                                  ? "bg-green-500 text-white shadow-lg"
                                  : "bg-gray-100 text-gray-600 group-hover:bg-green-500 group-hover:text-white"
                              }`}
                            >
                              <item.icon className="h-4 w-4" />
                            </div>
                            <span className="font-semibold">{item.title}</span>
                            {item.badge && (
                              <Badge className="ml-auto bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-2 py-1 shadow-lg">
                                {item.badge}
                              </Badge>
                            )}
                          </div>
                          <ChevronDown
                            className={`h-4 w-4 mr-4 transition-all duration-300 ${
                              openItems.includes(item.title) ? "rotate-180" : ""
                            } ${currentPage === "dashboard" && item.title === "Home" ? "text-green-600" : "text-gray-400"}`}
                          />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-1 mt-2">
                        {item.subItems.map((subItem) => (
                          <SidebarMenuButton
                            key={subItem.title}
                            className={`ml-8 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300 text-sm ${
                              currentPage === subItem.component
                                ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 shadow-md"
                                : ""
                            }`}
                            onClick={() => handleNavigation(subItem.component, subItem.title)}
                          >
                            <div className="flex items-center gap-3 px-3 py-2">
                              <div
                                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                                  currentPage === subItem.component ? "bg-green-500 shadow-lg" : "bg-gray-400"
                                }`}
                              ></div>
                              <span className="font-medium text-gray-700">{subItem.title}</span>
                            </div>
                          </SidebarMenuButton>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton
                      className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:shadow-lg ${
                        currentPage === "dashboard"
                          ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 shadow-lg border border-green-100"
                          : ""
                      }`}
                      onClick={() => handleNavigation("dashboard", item.title)}
                    >
                      <div className="flex items-center gap-4 px-4 py-3">
                        <div
                          className={`p-2 rounded-xl transition-all duration-300 ${
                            currentPage === "dashboard"
                              ? "bg-green-500 text-white shadow-lg"
                              : "bg-gray-100 text-gray-600 group-hover:bg-green-500 group-hover:text-white"
                          }`}
                        >
                          <item.icon className="h-4 w-4" />
                        </div>
                        <span className="font-semibold">{item.title}</span>
                        {item.badge && (
                          <Badge className="ml-auto bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-2 py-1 shadow-lg">
                            {item.badge}
                          </Badge>
                        )}
                        <ChevronRight
                          className={`ml-auto h-4 w-4 transition-all duration-300 group-hover:translate-x-1 ${
                            currentPage === "dashboard" ? "text-green-600" : "text-gray-400"
                          }`}
                        />
                      </div>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-gray-200/50 p-4 bg-white/80 backdrop-blur-sm">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
            Account Options
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              <SidebarMenuItem>
                <SidebarMenuButton className="rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="p-2 rounded-lg bg-gray-100 text-gray-600">
                      <User className="h-4 w-4" />
                    </div>
                    <span className="font-medium">Profile</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="p-2 rounded-lg bg-gray-100 text-gray-600">
                      <Settings className="h-4 w-4" />
                    </div>
                    <span className="font-medium">Settings</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  className="rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 hover:text-red-600 transition-all duration-300 hover:shadow-md"
                  onClick={handleLogout}
                >
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="p-2 rounded-lg bg-red-100 text-red-600">
                      <LogOut className="h-4 w-4" />
                    </div>
                    <span className="font-medium">Log out</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  )
}

function DashboardContent() {
  return (
    <main className="flex-1 p-6 space-y-6">
      {/* Welcome Banner */}
      <div className="relative bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 rounded-2xl p-8 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
              Welcome to ORANET Portal!
            </h1>
            <p className="text-green-100 text-lg font-medium">
              Manage your ISP operations efficiently with our comprehensive dashboard.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">All Systems Online</span>
              </div>
              <div className="text-sm text-green-200">Last updated: {new Date().toLocaleTimeString()}</div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="h-20 w-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl">
              <Wifi className="h-10 w-10 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="group relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-green-500 via-green-600 to-green-700 text-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
            <CardTitle className="text-sm font-medium opacity-90">Daily Revenue</CardTitle>
            <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <DollarSign className="h-6 w-6" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-4xl font-bold mb-2">KSh 12,450</div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-green-400/30 rounded-full px-2 py-1">
                <TrendingUp className="h-3 w-3" />
                <span className="text-xs font-medium">+12.5%</span>
              </div>
              <span className="text-xs opacity-80">from yesterday</span>
            </div>
          </CardContent>
          <div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></div>
        </Card>

        <Card className="group relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
            <CardTitle className="text-sm font-medium opacity-90">Monthly Revenue</CardTitle>
            <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <BarChart3 className="h-6 w-6" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-4xl font-bold mb-2">KSh 245,680</div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-blue-400/30 rounded-full px-2 py-1">
                <TrendingUp className="h-3 w-3" />
                <span className="text-xs font-medium">+8.2%</span>
              </div>
              <span className="text-xs opacity-80">from last month</span>
            </div>
          </CardContent>
          <div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></div>
        </Card>

        <Card className="group relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 text-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
            <CardTitle className="text-sm font-medium opacity-90">Wifi Stations</CardTitle>
            <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Wifi className="h-6 w-6" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-4xl font-bold mb-2">24</div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-purple-400/30 rounded-full px-2 py-1">
                <Activity className="h-3 w-3" />
                <span className="text-xs font-medium">100%</span>
              </div>
              <span className="text-xs opacity-80">stations online</span>
            </div>
          </CardContent>
          <div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></div>
        </Card>

        <Card className="group relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
            <CardTitle className="text-sm font-medium opacity-90">Daily Subscribers</CardTitle>
            <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Users className="h-6 w-6" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-4xl font-bold mb-2">1,247</div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-orange-400/30 rounded-full px-2 py-1">
                <TrendingUp className="h-3 w-3" />
                <span className="text-xs font-medium">+15</span>
              </div>
              <span className="text-xs opacity-80">new today</span>
            </div>
          </CardContent>
          <div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></div>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Annual Sales</CardTitle>
                <p className="text-gray-600">Revenue performance over the year</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge
                  variant="secondary"
                  className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200 px-3 py-1"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Sales Trend
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                sales: {
                  label: "Sales (KSh '000)",
                  color: "#22c55e",
                },
              }}
              className="h-[380px]"
            >
              <BarChart data={salesData}>
                <defs>
                  <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity={0.9} />
                    <stop offset="50%" stopColor="#16a34a" stopOpacity={0.7} />
                    <stop offset="100%" stopColor="#15803d" stopOpacity={0.4} />
                  </linearGradient>
                  <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#22c55e" floodOpacity="0.3" />
                  </filter>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.6} />
                <XAxis
                  dataKey="month"
                  stroke="#6b7280"
                  fontSize={12}
                  fontWeight={500}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis stroke="#6b7280" fontSize={12} fontWeight={500} axisLine={false} tickLine={false} />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "none",
                    borderRadius: "16px",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    backdropFilter: "blur(10px)",
                  }}
                />
                <Bar dataKey="sales" fill="url(#salesGradient)" radius={[8, 8, 0, 0]} filter="url(#shadow)" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Annual Subscription</CardTitle>
                <p className="text-gray-600">Subscription trends throughout the year</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge
                  variant="secondary"
                  className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border-blue-200 px-3 py-1"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                  Growth Rate
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                value: {
                  label: "Subscriptions (K)",
                  color: "#3b82f6",
                },
              }}
              className="h-[380px]"
            >
              <AreaChart data={subscriptionData}>
                <defs>
                  <linearGradient id="subscriptionGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
                    <stop offset="50%" stopColor="#2563eb" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="#1d4ed8" stopOpacity={0.05} />
                  </linearGradient>
                  <filter id="glowBlue" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#3b82f6" floodOpacity="0.4" />
                  </filter>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.6} />
                <XAxis
                  dataKey="month"
                  stroke="#6b7280"
                  fontSize={12}
                  fontWeight={500}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis stroke="#6b7280" fontSize={12} fontWeight={500} axisLine={false} tickLine={false} />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "none",
                    borderRadius: "16px",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    backdropFilter: "blur(10px)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  strokeWidth={4}
                  fill="url(#subscriptionGradient)"
                  filter="url(#glowBlue)"
                  dot={{ fill: "#3b82f6", strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, stroke: "#3b82f6", strokeWidth: 2, fill: "#ffffff" }}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Plan Charts Row */}
      <div className="grid gap-8 lg:grid-cols-3">
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-1">Hotspot Plans</CardTitle>
                <p className="text-gray-600 text-sm">Distribution of hotspot subscriptions</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-6">
              {hotspotPlanData.map((item, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                  {item.name}
                </Badge>
              ))}
            </div>
            <div className="h-[280px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <defs>
                    <filter id="pieGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.3" />
                    </filter>
                  </defs>
                  <Pie
                    data={hotspotPlanData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    innerRadius={50}
                    dataKey="value"
                    stroke="white"
                    strokeWidth={3}
                    filter="url(#pieGlow)"
                  >
                    {hotspotPlanData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "none",
                      borderRadius: "12px",
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                      backdropFilter: "blur(10px)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">156</div>
                  <div className="text-sm text-gray-600">Total Plans</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-1">PPPoE Plans</CardTitle>
                <p className="text-gray-600 text-sm">PPPoE subscription breakdown</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-6">
              {pppoePlanData.map((item, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                  {item.name}
                </Badge>
              ))}
            </div>
            <div className="h-[280px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pppoePlanData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    innerRadius={50}
                    dataKey="value"
                    stroke="white"
                    strokeWidth={3}
                    filter="url(#pieGlow)"
                  >
                    {pppoePlanData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "none",
                      borderRadius: "12px",
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                      backdropFilter: "blur(10px)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">91</div>
                  <div className="text-sm text-gray-600">Active Plans</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-1">Static Plans</CardTitle>
                <p className="text-gray-600 text-sm">Static IP plan distribution</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-6">
              {staticPlanData.map((item, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                  {item.name}
                </Badge>
              ))}
            </div>
            <div className="h-[280px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={staticPlanData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    innerRadius={50}
                    dataKey="value"
                    stroke="white"
                    strokeWidth={3}
                    filter="url(#pieGlow)"
                  >
                    {staticPlanData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "none",
                      borderRadius: "12px",
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                      backdropFilter: "blur(10px)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">23</div>
                  <div className="text-sm text-gray-600">Static IPs</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

function Dashboard() {
  const [currentPage, setCurrentPage] = React.useState("dashboard")

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardContent />
      case "list-stations":
        return <ListStations />
      case "add-station":
        return <AddStation />
      case "station-vpn":
        return <StationVPN />
      case "add-client":
        return <AddClient />
      case "view-clients":
        return <ViewClients />
      case "hotspot-plans":
        return <HotspotPlans />
      case "add-hotspot-plans":
        return <AddHotspotPlans />
      case "hotspot-accounts":
        return <HotspotAccounts />
      case "hotspot-clients":
        return <HotspotClients />
      case "generate-access-code":
        return <GenerateAccessCode />
      case "bandwidth-profile":
        return <BandwidthProfile />
      case "pppoe-pool":
        return <PPPoEPool />
      case "pppoe-plans":
        return <PPPoEPlans />
      case "add-pppoe-plans":
        return <AddPPPoEPlans />
      case "pppoe-clients":
        return <PPPoEClients />
      case "view-transactions":
        return <ViewTransactions />
      case "send-sms":
        return <SendSMS />
      case "sms-templates":
        return <SMSTemplates />
      case "email-templates":
        return <EmailTemplates />
      case "send-email":
        return <SendEmail />
      case "view-reports":
        return <ViewReports />
      case "my-invoices":
        return <MyInvoices />
      case "general-setup":
        return <GeneralSetup />
      case "payment-setup":
        return <PaymentSetup />
      case "sms-configuration":
        return <SMSConfiguration />
      case "whatsapp-configuration":
        return <WhatsAppConfiguration />
      case "email-configuration":
        return <EmailConfiguration />
      case "submit-ticket":
        return <SubmitTicket />
      case "knowledge-base":
        return <KnowledgeBase />
      case "contact-us":
        return <ContactUs />
      case "users":
        return <UsersManagement />
      case "activity-log":
        return <ActivityLog />
      default:
        return <DashboardContent />
    }
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-50">
        <AppSidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <SidebarInset className="flex-1">
          <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6 sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover:bg-gray-100 rounded-lg transition-colors" />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {currentPage === "dashboard"
                    ? "Dashboard Overview"
                    : currentPage
                        .split("-")
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(" ")}
                </h2>
                <p className="text-sm text-gray-500">
                  {currentPage === "dashboard"
                    ? "Welcome back! Here's what's happening today."
                    : `Manage your ${currentPage.split("-").join(" ")} settings`}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                <Sun className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                <Grid3X3 className="h-5 w-5" />
              </Button>
              <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-semibold">
                A
              </div>
            </div>
          </header>

          {renderCurrentPage()}
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

export default function DashboardPage() {
  return (
    <AuthGuard>
      <Dashboard />
    </AuthGuard>
  )
}
