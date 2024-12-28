import { Bot, Calculator, CodeXml, Waves } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const events = [
  {
    title: "Outings",
    url: "#",
    icon: Waves,
  },
  {
    title: "App Cup",
    url: "#",
    icon: CodeXml,
  },
]

const utilities = [
  {
    title: "CPA Calculator",
    url: "#",
    icon: Calculator,
  },
  {
    title: "AI Detector",
    url: "#",
    icon: Bot,
  }
]

export default function AppSidebar() {
  return (
    <Sidebar variant="sidebar">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Events</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {events.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Utilities</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {utilities.map((utility) => (
                <SidebarMenuItem key={utility.title}>
                  <SidebarMenuButton asChild>
                    <a href={utility.url}>
                      <utility.icon />
                      <span>{utility.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
