"use client";

import * as React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Camera, Loader2, ShieldCheck, UserCircle } from "lucide-react";

type Tab = "profile" | "security" | "notifications" | "payout";

export default function AccountSettings() {
  const [activeTab, setActiveTab] = React.useState<Tab>("profile");
  const [saving, setSaving] = React.useState(false);
  const [saved, setSaved] = React.useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 900);
  };

  const tabs: { value: Tab; label: string; icon: React.ReactNode }[] = [
    { value: "profile", label: "Profile", icon: <UserCircle className="h-4 w-4" /> },
    { value: "security", label: "Security", icon: <ShieldCheck className="h-4 w-4" /> },
    { value: "notifications", label: "Notifications", icon: null },
    { value: "payout", label: "Payout", icon: null },
  ];

  return (
    <div className="space-y-6">
      <Card className="border-0 bg-gradient-to-br from-brand/5 to-transparent">
        <CardContent className="p-6">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="flex h-20 w-20 overflow-hidden rounded-2xl">
                  <Image
                    src="/instructors/instructorfive.png"
                    alt="Profile"
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>
                <button
                  className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border bg-background text-brand shadow-sm transition-colors hover:bg-brand hover:text-brand-foreground"
                  aria-label="Upload photo"
                >
                  <Camera className="h-3.5 w-3.5" />
                </button>
              </div>
              <div>
                <h2 className="text-base font-semibold">Ahmed Gouda</h2>
                <p className="text-sm text-muted-foreground">Senior Web Development Instructor</p>
                <p className="text-xs text-muted-foreground">
                  Member since March 2024 - 1.2k followers
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">View Public Profile</Button>
              <Button size="sm" onClick={handleSave} disabled={saving}>
                {saving ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : saved ? (
                  "Saved!"
                ) : (
                  "Save Changes"
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as Tab)}>
        <TabsList className="mb-6 grid w-full max-w-xl grid-cols-2">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.icon && <span className="mr-1.5">{tab.icon}</span>}
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Profile */}
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">About You</CardTitle>
              <CardDescription>
                Tell students more about your background and expertise.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" defaultValue="Ahmed" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" defaultValue="Gouda" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="headline">Professional title</Label>
                <Input id="headline" placeholder="e.g. Senior Frontend Engineer" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="biography">Biography</Label>
                <div className="relative">
                  <textarea
                    id="biography"
                    rows={4}
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
                    placeholder="Share your journey, experience, and what students can expect from your courses..."
                  />
                  <p className="mt-1 text-right text-xs text-muted-foreground">
                    0/400
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Contact & Social</CardTitle>
              <CardDescription>
                Add links to your website and social profiles.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" placeholder="https://your-site.com" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Phone number</Label>
                  <div className="flex gap-2">
                    <Input className="w-20" value="+1" disabled />
                    <Input id="phone" placeholder="555 000 0000" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {["Facebook", "Instagram", "LinkedIn", "Twitter", "WhatsApp", "YouTube"].map((social) => (
                  <div key={social} className="space-y-1.5">
                    <Label htmlFor={social.toLowerCase()}>{social}</Label>
                    <Input id={social.toLowerCase()} placeholder={`${social.toLowerCase()} username`} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Change Password</CardTitle>
              <CardDescription>
                Use a strong password with at least 8 characters.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="current-password">Current password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="new-password">New password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="confirm-password">Confirm new password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
              <Button onClick={handleSave} disabled={saving}>
                Update Password
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Security</CardTitle>
              <CardDescription>
                Manage authentication and privacy options.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-1">
              {[
                { title: "Two-factor authentication", desc: "Add an extra layer of security to your account." },
                { title: "Login notifications", desc: "Get notified when a new device logs in." },
                { title: "Public profile", desc: "Allow other users to view your instructor profile." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between gap-4 py-3"
                >
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                  <Switch aria-label={item.title} />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-destructive/30">
            <CardHeader>
              <CardTitle className="text-base text-destructive">Danger Zone</CardTitle>
              <CardDescription>
                These actions are permanent and cannot be undone.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline">Deactivate Account</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Email Preferences</CardTitle>
              <CardDescription>
                Choose what you want to be notified about.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: "Course purchases", desc: "When a student purchases one of your courses." },
                { title: "Reviews", desc: "When a student writes a review on your course." },
                { title: "Comments", desc: "When someone comments on your lectures." },
                { title: "Student messages", desc: "When a student sends you a direct message." },
                { title: "Daily summary", desc: "A daily digest of profile visits and engagement." },
                { title: "Payouts", desc: "When a payout is processed to your account." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between gap-4 border-b pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                  <Switch aria-label={item.title} defaultChecked />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payout */}
        <TabsContent value="payout" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Payout Method</CardTitle>
              <CardDescription>
                Set up how you receive your earnings. Payouts are processed weekly.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="account-name">Account holder name</Label>
                  <Input id="account-name" placeholder="Full name" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="bank">Bank name</Label>
                  <Input id="bank" placeholder="Bank" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="account-number">Account number</Label>
                  <Input id="account-number" placeholder="•••• •••• ••••" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="routing">Routing number</Label>
                  <Input id="routing" placeholder="•••••••" />
                </div>
              </div>
            </CardContent>
            <div className="px-6 pb-6">
              <Separator className="mb-4" />
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  Your next payout will be calculated on <strong>Monday</strong>.
                </p>
                <Button onClick={handleSave} disabled={saving}>Save Payout Method</Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}