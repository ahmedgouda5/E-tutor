"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Globe, ShieldCheck, Loader2 } from "lucide-react";

export default function AdminSettings() {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <Tabs defaultValue="general">
        <TabsList className="grid w-full max-w-xl grid-cols-3">
          <TabsTrigger value="general">
            <Globe className="mr-1.5 h-4 w-4" /> General
          </TabsTrigger>
          <TabsTrigger value="security">
            <ShieldCheck className="mr-1.5 h-4 w-4" /> Security
          </TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Platform Settings</CardTitle>
              <CardDescription>
                Configure global platform defaults.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSave} className="space-y-4 px-6 pb-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="platform-name">Platform name</Label>
                  <Input id="platform-name" defaultValue="E-Tutor" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="platform-email">Support email</Label>
                  <Input id="platform-email" defaultValue="support@etutor.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="currency">Default currency</Label>
                  <Input id="currency" defaultValue="USD ($)" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="commission">Platform commission (%)</Label>
                  <Input id="commission" type="number" defaultValue="20" />
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { title: "Allow new instructor registrations", desc: "Auto-approve or review new instructors." },
                  { title: "Show community forum", desc: "Enable the community discussion feature platform-wide." },
                  { title: "Require course moderation", desc: "All new courses must be reviewed before publish." },
                ].map((item) => (
                  <div key={item.title} className="flex items-center justify-between gap-4 py-2">
                    <div>
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                    <Switch aria-label={item.title} defaultChecked />
                  </div>
                ))}
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  Changes take effect immediately across the platform.
                </p>
                <Button type="submit" disabled={saving}>
                  {saving ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...
                    </>
                  ) : saved ? (
                    "Saved!"
                  ) : (
                    "Save Settings"
                  )}
                </Button>
              </div>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Access Control</CardTitle>
              <CardDescription>
                Manage admin access and security policies.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: "Two-factor authentication required", desc: "All admins must enable 2FA." },
                { title: "IP whitelist for admin access", desc: "Only allow admin login from approved IPs." },
                { title: "Auto-suspend suspicious accounts", desc: "Lock accounts with unusual login activity." },
              ].map((item) => (
                <div key={item.title} className="flex items-center justify-between gap-4 py-2">
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

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Platform Notifications</CardTitle>
              <CardDescription>
                Choose which system alerts you receive by email.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: "New instructor verification requests", desc: "When an instructor submits verification." },
                { title: "Course moderation queue", desc: "When a course is submitted for review." },
                { title: "Reported content", desc: "When a user or course is reported." },
                { title: "Daily platform digest", desc: "A summary of platform activity each morning." },
              ].map((item) => (
                <div key={item.title} className="flex items-center justify-between gap-4 border-b pb-4 last:border-0 last:pb-0">
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
      </Tabs>
    </motion.div>
  );
}