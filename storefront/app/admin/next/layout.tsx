import type { Metadata } from "next";
import AdminHeader from "./(adminDashboard)/containers/Header";
import React from "react";

export const metadata: Metadata = {
  title: ".Sales Shopping | Admin Page",
  description: ".Sales Shopping | Admin Page - only admin can access this page",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AdminHeader />
      <div className="my-8" />
      {children}
    </>
  );
}
