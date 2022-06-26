import React from "react";
import MainLayout from "./main";

type Props = {
  children: React.ReactNode;
  variant: "main" | "app";
};

export default function Layout({ children, variant = "main" }: Props) {
  return <MainLayout>{children}</MainLayout>;
}
