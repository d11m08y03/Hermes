import { Bot, Calculator, CodeXml, LucideIcon, Waves } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"

interface Links {
  title: string,
  url: string,
  icon: LucideIcon
}

interface SidebarSectionProps {
  sectionName: string,
  links: Links[]
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ sectionName, links }) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{sectionName}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {links.map((link) => (
            <SidebarMenuItem key={link.title}>
              <SidebarMenuButton asChild>
                <a href={link.url}>
                  <link.icon />
                  <span>{link.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default function AppSidebar() {
  const utilities: Links[] = [
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
  ];

  const events: Links[] = [
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
  ];

  return (
    <Sidebar variant="sidebar">
      <SidebarContent>
        <SidebarSection sectionName="Events" links={events} />
        <SidebarSeparator />
        <SidebarSection sectionName="Utilities" links={utilities} />
      </SidebarContent>
    </Sidebar>
  );
}
