"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Eye, EyeOff } from "lucide-react";

export default function ProfileSettings() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="py-8 space-y-8">
      <Card className="shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold">
            Profile Settings
          </CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">
          <div className="flex flex-col items-center lg:items-start gap-4">
            <Avatar className="w-28 h-28 sm:w-32 sm:h-32">
              <AvatarImage src="/avatar.jpg" />
              <AvatarFallback>LG</AvatarFallback>
            </Avatar>

            <div className="">
              <Label
                htmlFor="avatar-upload"
                className="cursor-pointer inline-flex"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <span>Upload Photo</span>
                </Button>
              </Label>

              <Input
                id="avatar-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;

                  console.log(file); // هنا ترفع الصورة أو تعمل preview
                }}
              />
            </div>

            <p className="text-xs text-muted-foreground text-center lg:text-left max-w-[220px]">
              Image size under 1MB. Ratio must be 1:1
            </p>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label>First name</Label>
                <Input placeholder="First name" />
              </div>

              <div className="space-y-1">
                <Label>Last name</Label>
                <Input placeholder="Last name" />
              </div>
            </div>

            <div className="space-y-1">
              <Label>Username</Label>
              <Input placeholder="Enter your username" />
            </div>

            <div className="space-y-1">
              <Label>Email</Label>
              <Input type="email" placeholder="Email address" />
            </div>

            <div className="space-y-1">
              <Label>Title</Label>
              <Input placeholder="Your title or short bio" />
              <p className="text-xs text-muted-foreground text-right">0 / 50</p>
            </div>

            <div className="pt-2">
              <Button className="bg-orange-500 hover:bg-orange-600 w-full sm:w-auto">
                Save Changes
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold">
            Change Password
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-5 max-w-lg">
          <div className="space-y-1">
            <Label>Current Password</Label>
            <div className="relative">
              <Input type={showPassword ? "text" : "password"} />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <Label>New Password</Label>
            <Input type="password" />
          </div>

          <div className="space-y-1">
            <Label>Confirm New Password</Label>
            <Input type="password" />
          </div>

          <Separator />

          <Button className="bg-orange-500 hover:bg-orange-600 w-full sm:w-auto">
            Change Password
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
