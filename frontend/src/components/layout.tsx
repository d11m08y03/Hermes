import React from "react"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "./ui/sidebar"
import AppSidebar from "./app-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";
import { Separator } from "./ui/separator";
import ThemeSwitcher from "./theme-switcher";

interface LayoutProps {
  children: React.ReactNode
}

const Header: React.FC = () => {
  return (
    <header className="flex h-10 shrink-0 items-center gap-2 border-b px-4 w-full">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">
              Building Your Application
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Data Fetching</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="ml-auto">
        <ThemeSwitcher />
      </div>
    </header>
  )
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <main>
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
