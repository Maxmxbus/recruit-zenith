
import { Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface DashboardSidebarProps {
  totalApplicants: number;
  openPositions: number;
  onViewChange: (view: "applicants" | "positions") => void;
  currentView: "applicants" | "positions";
}

export function DashboardSidebar({ totalApplicants, openPositions, onViewChange, currentView }: DashboardSidebarProps) {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => onViewChange("applicants")}
                  className={currentView === "applicants" ? "bg-accent/10 text-accent" : ""}
                >
                  <Users className="w-4 h-4" />
                  <span>Total Applicants ({totalApplicants})</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => onViewChange("positions")}
                  className={currentView === "positions" ? "bg-accent/10 text-accent" : ""}
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Open Positions ({openPositions})</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
