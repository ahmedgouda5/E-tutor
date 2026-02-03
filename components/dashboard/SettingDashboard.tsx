"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function AccountSettings() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4">
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="First name" />
              <Input placeholder="Last name" />
            </div>
            <Input placeholder="Username" />
            <div className="flex gap-2">
              <Input className="max-w-[80px]" value="+880" disabled />
              <Input placeholder="Your phone number..." />
            </div>

            <Input placeholder="Your title, profession or small biography" />

            <div className="space-y-1">
              <textarea
                className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="Biography"
              />
              <p className="text-xs text-muted-foreground text-right">
                0/50
              </p>
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600">
              Save Changes
            </Button>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/instructors/instructorfive.png"
              alt="Profile"
              width={140}
              height={140}
              className="rounded-md object-cover"
            />
            <Button variant="outline" size="sm">
              Upload Photo
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Image size should be under 1MB and image ratio needs to be 1:1
            </p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Social Profile</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Input placeholder="Personal website or portfolio url..." />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Input placeholder="Facebook username" />
            <Input placeholder="Instagram username" />
            <Input placeholder="LinkedIn username" />
            <Input placeholder="Twitter username" />
            <Input placeholder="Whatsapp phone number" />
            <Input placeholder="Youtube username" />
          </div>

          <Button className="bg-orange-500 hover:bg-orange-600">
            Save Changes
          </Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              "I want to know who buy my course.",
              "I want to know who write a review on my course.",
              "I want to know who commented on my lecture.",
              "I want to know who download my lecture notes.",
              "I want to know who replied on my comment.",
              "I want to know daily how many people visited my profile.",
              "I want to know when someone reply lecture attach file.",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <Checkbox id={`n-${i}`} />
                <Label
                  htmlFor={`n-${i}`}
                  className="text-sm text-muted-foreground"
                >
                  {item}
                </Label>
              </div>
            ))}

            <Button className="bg-orange-500 hover:bg-orange-600 mt-4">
              Save Changes
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input type="password" placeholder="Current Password" />
            <Input type="password" placeholder="New Password" />
            <Input type="password" placeholder="Confirm New Password" />

            <Button className="bg-orange-500 hover:bg-orange-600">
              Save Changes
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
