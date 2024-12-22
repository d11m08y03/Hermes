import React from "react"
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar"
import AppSidebar from "./app-sidebar";

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default Layout;
