"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account")

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="space-y-4 max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
            <p className="text-gray-600 mb-4">Manage your account details and preferences.</p>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="john.doe@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" defaultValue="Acme Inc." />
            </div>
            <Button>Save Changes</Button>
          </div>
        </TabsContent>
        <TabsContent value="appearance">
          <h2 className="text-2xl font-semibold mb-4">Appearance Settings</h2>
          <div className="space-y-4 max-w-md">
            <div className="flex items-center justify-between">
              <Label htmlFor="dark-mode">Dark Mode</Label>
              <Switch id="dark-mode" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="font-size">Font Size</Label>
              <select id="font-size" className="w-full p-2 border rounded">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="color-scheme">Color Scheme</Label>
              <select id="color-scheme" className="w-full p-2 border rounded">
                <option>Default</option>
                <option>Blue</option>
                <option>Green</option>
                <option>Purple</option>
              </select>
            </div>
            <Button>Apply Changes</Button>
          </div>
        </TabsContent>
        <TabsContent value="notifications">
          <h2 className="text-2xl font-semibold mb-4">Notification Preferences</h2>
          <div className="space-y-4 max-w-md">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <Switch id="email-notifications" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="push-notifications">Push Notifications</Label>
              <Switch id="push-notifications" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notification-frequency">Notification Frequency</Label>
              <select id="notification-frequency" className="w-full p-2 border rounded">
                <option>Immediately</option>
                <option>Daily Digest</option>
                <option>Weekly Summary</option>
              </select>
            </div>
            <Button>Save Preferences</Button>
          </div>
        </TabsContent>
        <TabsContent value="security">
          <h2 className="text-2xl font-semibold mb-4">Security Settings</h2>
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="two-factor-auth">Enable Two-Factor Authentication</Label>
              <Switch id="two-factor-auth" />
            </div>
            <Button>Update Security Settings</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

