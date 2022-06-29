import React from "react";
import DashboardLayout from "./dashboard";
import MainLayout from "./main";

type Props = {
  children: React.ReactNode;
  variant: "main" | "dashboard";
};

export default function Layout({ children, variant = "dashboard" }: Props) {
  if (variant === "main") {
    return <MainLayout>{children}</MainLayout>;
  }

  return <DashboardLayout>{children}</DashboardLayout>;
}
