"use client"
import * as React from "react"
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
import ListStations from "./stations/list-stations"
import AddStation from "./stations/add-station"
import StationVPN from "./stations/station-vpn"
import AddClient from "./clients/add-client"
import ViewClients from "./clients/view-clients"
import HotspotPlans from "./hotspot/hotspot-plans"
import AddHotspotPlans from "./hotspot/add-hotspot-plans"
import HotspotAccounts from "./hotspot/hotspot-accounts"
import HotspotClients from "./hotspot/hotspot-clients"
import GenerateAccessCode from "./hotspot/generate-access-code"
import BandwidthProfile from "./hotspot/bandwidth-profile"
import PPPoEPool from "./pppoe/pppoe-pool"
import PPPoEPlans from "./pppoe/pppoe-plans"
import AddPPPoEPlans from "./pppoe/add-pppoe-plans"
import PPPoEClients from "./pppoe/pppoe-clients"
import ViewTransactions from "./transactions/view-transactions"
import SendSMS from "./notifications/send-sms"
import SMSTemplates from "./notifications/sms-templates"
import EmailTemplates from "./notifications/email-templates"
import SendEmail from "./notifications/send-email"
import ViewReports from "./reports/view-reports"
import MyInvoices from "./billing/my-invoices"
import GeneralSetup from "./setup/general-setup"
import PaymentSetup from "./setup/payment-setup"
import SMSConfiguration from "./setup/sms-configuration"
import WhatsAppConfiguration from "./setup/whatsapp-configuration"
import EmailConfiguration from "./setup/email-configuration"
import SubmitTicket from "./support/submit-ticket"
import KnowledgeBase from "./support/knowledge-base"
import ContactUs from "./support/contact-us"
import UsersManagement from "./access/users"
import ActivityLog from "./access/activity-log"

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
    href: "/",
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
    <Sidebar className="border-r-0 bg-white">
      <SidebarHeader className="border-b border-gray-200 px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white font-bold text-lg shadow-lg">
            <Wifi className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              ORANET <span className="text-green-500">PORTAL</span>
            </h1>
            <p className="text-xs text-gray-500 font-medium">Management Dashboard</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4 py-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.subItems ? (
                    <Collapsible open={openItems.includes(item.title)} onOpenChange={() => toggleItem(item.title)}>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          className={`group relative overflow-hidden rounded-xl transition-all duration-200 hover:bg-green-50 hover:shadow-sm w-full justify-between ${
                            currentPage === "dashboard" && item.title === "Home"
                              ? "bg-green-50 text-green-700 shadow-sm"
                              : ""
                          }`}
                        >
                          <div className="flex items-center gap-3 px-4 py-3">
                            <item.icon
                              className={`h-5 w-5 transition-colors ${currentPage === "dashboard" && item.title === "Home" ? "text-green-600" : "text-gray-600"}`}
                            />
                            <span className="font-medium">{item.title}</span>
                            {item.badge && (
                              <Badge className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5">{item.badge}</Badge>
                            )}
                          </div>
                          <ChevronDown
                            className={`h-4 w-4 mr-4 transition-transform duration-200 ${
                              openItems.includes(item.title) ? "rotate-180" : ""
                            } ${currentPage === "dashboard" && item.title === "Home" ? "text-green-600" : "text-gray-400"}`}
                          />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-1 mt-1">
                        {item.subItems.map((subItem) => (
                          <SidebarMenuButton
                            key={subItem.title}
                            className={`ml-6 rounded-lg hover:bg-green-50 transition-colors text-sm ${
                              currentPage === subItem.component ? "bg-green-50 text-green-700" : ""
                            }`}
                            onClick={() => handleNavigation(subItem.component, subItem.title)}
                          >
                            <div className="flex items-center gap-2 px-3 py-2">
                              <div
                                className={`h-1.5 w-1.5 rounded-full ${currentPage === subItem.component ? "bg-green-500" : "bg-gray-400"}`}
                              ></div>
                              <span className="font-medium text-gray-600">{subItem.title}</span>
                            </div>
                          </SidebarMenuButton>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton
                      className={`group relative overflow-hidden rounded-xl transition-all duration-200 hover:bg-green-50 hover:shadow-sm ${
                        currentPage === "dashboard" ? "bg-green-50 text-green-700 shadow-sm" : ""
                      }`}
                      onClick={() => handleNavigation("dashboard", item.title)}
                    >
                      <div className="flex items-center gap-3 px-4 py-3">
                        <item.icon
                          className={`h-5 w-5 transition-colors ${currentPage === "dashboard" ? "text-green-600" : "text-gray-600"}`}
                        />
                        <span className="font-medium">{item.title}</span>
                        {item.badge && (
                          <Badge className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5">{item.badge}</Badge>
                        )}
                        <ChevronRight
                          className={`ml-auto h-4 w-4 transition-all group-hover:translate-x-0.5 ${currentPage === "dashboard" ? "text-green-600" : "text-gray-400"}`}
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

      <SidebarFooter className="border-t border-gray-200 p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Account Options
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              <SidebarMenuItem>
                <SidebarMenuButton className="rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3 px-3 py-2">
                    <User className="h-4 w-4 text-gray-600" />
                    <span className="font-medium">Profile</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3 px-3 py-2">
                    <Settings className="h-4 w-4 text-gray-600" />
                    <span className="font-medium">Settings</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  className="rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors"
                  onClick={handleLogout}
                >
                  <div className="flex items-center gap-3 px-3 py-2">
                    <LogOut className="h-4 w-4" />
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
      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium opacity-90">Daily Revenue</CardTitle>
            <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <DollarSign className="h-5 w-5" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">KSh 12,450</div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="h-4 w-4 text-green-200" />
              <span className="text-sm opacity-90">+12.5% from yesterday</span>
            </div>
          </CardContent>
          <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-white/10"></div>
        </Card>

        <Card className="relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-green-600 to-green-700 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium opacity-90">Monthly Revenue</CardTitle>
            <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <BarChart3 className="h-5 w-5" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">KSh 245,680</div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="h-4 w-4 text-green-200" />
              <span className="text-sm opacity-90">+8.2% from last month</span>
            </div>
          </CardContent>
          <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-white/10"></div>
        </Card>

        <Card className="relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-green-400 to-green-500 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium opacity-90">Wifi Stations</CardTitle>
            <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Wifi className="h-5 w-5" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">24</div>
            <div className="flex items-center gap-1 mt-2">
              <Activity className="h-4 w-4 text-green-200" />
              <span className="text-sm opacity-90">All stations online</span>
            </div>
          </CardContent>
          <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-white/10"></div>
        </Card>

        <Card className="relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-green-700 to-green-800 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium opacity-90">Daily Subscribers</CardTitle>
            <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Users className="h-5 w-5" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,247</div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="h-4 w-4 text-green-200" />
              <span className="text-sm opacity-90">+15 new today</span>
            </div>
          </CardContent>
          <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-white/10"></div>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-0 shadow-lg bg-white">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-semibold text-gray-900">Annual Sales</CardTitle>
                <p className="text-sm text-gray-500 mt-1">Revenue performance over the year</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                  Sales
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                sales: {
                  label: "Sales",
                  color: "#22c55e",
                },
              }}
              className="h-[320px]"
            >
              <BarChart data={salesData}>
                <defs>
                  <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity={0.3} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                  contentStyle={{
                    backgroundColor: "white",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Bar dataKey="sales" fill="url(#salesGradient)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-white">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-semibold text-gray-900">Annual Subscription</CardTitle>
                <p className="text-sm text-gray-500 mt-1">Subscription trends throughout the year</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                  Subscriptions
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                value: {
                  label: "Subscription",
                  color: "#22c55e",
                },
              }}
              className="h-[320px]"
            >
              <AreaChart data={subscriptionData}>
                <defs>
                  <linearGradient id="subscriptionGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                  contentStyle={{
                    backgroundColor: "white",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#22c55e"
                  strokeWidth={3}
                  fill="url(#subscriptionGradient)"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Plan Charts Row */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="border-0 shadow-lg bg-white">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg font-semibold text-gray-900">Hotspot Plans</CardTitle>
                <p className="text-sm text-gray-500">Distribution of hotspot subscriptions</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-6">
              {hotspotPlanData.map((item, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  <div className="w-2 h-2 rounded-full mr-1" style={{ backgroundColor: item.color }}></div>
                  {item.name}
                </Badge>
              ))}
            </div>
            <div className="h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={hotspotPlanData}
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    innerRadius={40}
                    dataKey="value"
                    stroke="white"
                    strokeWidth={2}
                  >
                    {hotspotPlanData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "none",
                      borderRadius: "12px",
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-white">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg font-semibold text-gray-900">PPPoE Plans</CardTitle>
                <p className="text-sm text-gray-500">PPPoE subscription breakdown</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-6">
              {pppoePlanData.map((item, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  <div className="w-2 h-2 rounded-full mr-1" style={{ backgroundColor: item.color }}></div>
                  {item.name}
                </Badge>
              ))}
            </div>
            <div className="h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pppoePlanData}
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    innerRadius={40}
                    dataKey="value"
                    stroke="white"
                    strokeWidth={2}
                  >
                    {pppoePlanData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "none",
                      borderRadius: "12px",
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-white">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg font-semibold text-gray-900">Static Plans</CardTitle>
                <p className="text-sm text-gray-500">Static IP plan distribution</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-6">
              {staticPlanData.map((item, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  <div className="w-2 h-2 rounded-full mr-1" style={{ backgroundColor: item.color }}></div>
                  {item.name}
                </Badge>
              ))}
            </div>
            <div className="h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={staticPlanData}
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    innerRadius={40}
                    dataKey="value"
                    stroke="white"
                    strokeWidth={2}
                  >
                    {staticPlanData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "none",
                      borderRadius: "12px",
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
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

export default function Page() {
  // Redirect to dashboard if this is the root page
  React.useEffect(() => {
    window.location.href = "/dashboard"
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-green-500 border-t-transparent mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting...</p>
      </div>
    </div>
  )
}
