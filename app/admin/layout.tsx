import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AdminNavbar from "@/components/admin/admin-navbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <AdminNavbar />
        <main className="flex flex-1 flex-col gap-6 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}