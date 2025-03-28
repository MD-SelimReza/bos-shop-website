import DashboardLayoutWrapper from "@/components/DashboardLayoutWrapper";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const session = await getServerSession(authOptions);

    if (!session) {
      redirect("/signin");
    }
    return (
      <main className="w-full bg-white">
        <DashboardLayoutWrapper>{children}</DashboardLayoutWrapper>
      </main>
    );
  }