"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Bell, Lock, User, Palette, Globe } from "lucide-react";
import { PageHeader, PageTitle, PageDescription } from "@/components/shared/page-header";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function StudentSettings() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <PageHeader>
        <div>
          <PageTitle>Settings</PageTitle>
          <PageDescription>
            Manage your account preferences
          </PageDescription>
        </div>
      </PageHeader>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="w-full justify-start flex-wrap sm:w-auto sm:flex-1">
          <TabsTrigger value="profile" className="gap-1">
            <User className="h-3.5 w-3.5" /> Profile
          </TabsTrigger>
          <TabsTrigger value="security" className="gap-1">
            <Lock className="h-3.5 w-3.5" /> Security
          </TabsTrigger>
          <TabsTrigger value="appearance" className="gap-1">
            <Palette className="h-3.5 w-3.5" /> Appearance
          </TabsTrigger>
          <TabsTrigger value="language" className="gap-1">
            <Globe className="h-3.5 w-3.5" /> Language
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-1">
            <Bell className="h-3.5 w-3.5" /> Notifications
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Profile Information</CardTitle>
              <CardDescription className="text-xs">
                Update your personal information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Input id="bio" defaultValue="Passionate about web development" />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Password</CardTitle>
              <CardDescription className="text-xs">
                Update your password
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current">Current Password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="new">New Password</Label>
                  <Input id="new" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm">Confirm Password</Label>
                  <Input id="confirm" type="password" />
                </div>
              </div>
              <Button>Update Password</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Appearance</CardTitle>
              <CardDescription className="text-xs">
                Customize your interface
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <p className="text-sm font-medium">Dark Mode</p>
                  <p className="text-xs text-muted-foreground">Reduce eye strain in low light</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <p className="text-sm font-medium">Reduced Motion</p>
                  <p className="text-xs text-muted-foreground">Minimize animations</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="language" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Language & Region</CardTitle>
              <CardDescription className="text-xs">
                Change your display language
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Language</Label>
                <select className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm sm:w-64">
                  <option>English (US)</option>
                  <option>العربية</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label>Timezone</Label>
                <select className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm sm:w-64">
                  <option>UTC (GMT+0)</option>
                  <option>Eastern (GMT-5)</option>
                  <option>Arabian (GMT+3)</option>
                </select>
              </div>
              <Button>Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Notification Preferences</CardTitle>
              <CardDescription className="text-xs">
                Choose what you want to be notified about
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: "Assignment Deadlines", desc: "Notify me before assignments are due" },
                { label: "Course Updates", desc: "New lessons and course content" },
                { label: "Community Mentions", desc: "When someone mentions me or replies" },
                { label: "Certificates", desc: "When I earn a certificate" },
                { label: "Instructor Messages", desc: "Direct messages from instructors" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border p-4">
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                  <Switch defaultChecked={i < 3} />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.main>
  );
}