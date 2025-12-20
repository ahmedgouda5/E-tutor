"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Send, X } from "lucide-react";
import { SelectInstructor } from "./SelectInstructor";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";

export function AlertDialogMessage() {
  const [open, setOpen] = useState(false);
  
  const handeleSend = useCallback(() => {
    toast.loading("Sending...");
    setTimeout(() => {
      toast.dismiss();
      toast.success("Message sent successfully");
      setOpen(false); // Close the dialog after sending
    }, 2000);
  }, []);
  
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button className="m-2 text-orange-600 bg-[#FFEEE8] hover:bg-orange-600 hover:text-white px-3 py-1 rounded text-sm">
          Message
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-md p-0 overflow-hidden">
        <AlertDialogHeader className="border-b px-4 py-3 flex flex-row items-center justify-between">
          <AlertDialogTitle className="text-base font-semibold">
            Chat with Instructor
          </AlertDialogTitle>
          <AlertDialogCancel asChild>
            <Button variant="ghost" size="icon">
              <X size={18} />
            </Button>
          </AlertDialogCancel>
        </AlertDialogHeader>

        <div className="px-4 py-3 flex flex-col gap-2">
          <SelectInstructor />
          <div>
            <textarea placeholder="Type your message..." className="w-[80%] h-[100px] border border-gray-300 rounded p-2 resize-none" />
          </div>
        </div>

        <div className="border-t px-3 py-2 flex justify-end items-center gap-2">
        <Button onClick={handeleSend} size="icon" className="bg-orange-500 hover:bg-orange-600">
            <Send size={16} />
      </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
