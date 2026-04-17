"use client"

import { useApp } from "@/components/AppContext"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { settings } = useApp()

  return (
    <Sonner
      theme={settings.darkMode ? "dark" : "light"}
      className="toaster group"
      toastOptions={{
        style: {
          borderRadius: "1rem",
          padding: "0.75rem 1rem",
          fontSize: "0.875rem",
        },
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
