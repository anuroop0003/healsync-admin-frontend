import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  CalendarClock,
  LayoutDashboard,
  UserCircle,
  UsersRound,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const data = [
  { title: "Dashboard", url: "/institution/dashboard", icon: LayoutDashboard },
  { title: "My Schedule", url: "/institution/schedule", icon: CalendarClock },
  { title: "Patient Records", url: "/institution/patients", icon: UsersRound },
  { title: "Profile", url: "/institution/profile", icon: UserCircle },
];

const AppSidebar = (props: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="px-6 py-4.5 font-bold text-lg">
        MedCore
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {data.map((item) => (
            <SidebarMenuItem key={item.title} className="px-3 py-1.5">
              <SidebarMenuButton asChild>
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-2 rounded-md px-3 py-2 transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted",
                    )
                  }
                >
                  <item.icon className="size-5" />
                  <span>{item.title}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
