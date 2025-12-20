import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Star, X } from "lucide-react";

export function Dialog() {
  return (
    <AlertDialog>
      {/* Trigger */}
      <AlertDialogTrigger asChild>
        <Button className="bg-orange-500 text-white hover:bg-orange-600 capitalize">
          write a review
        </Button>
      </AlertDialogTrigger>

      {/* Content */}
      <AlertDialogContent>
        <AlertDialogHeader>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-2">
            <AlertDialogTitle className="capitalize">
              write a review
            </AlertDialogTitle>

            <AlertDialogCancel className="border-0 p-0">
              <X className="h-5 w-5" />
            </AlertDialogCancel>
          </div>

          {/* Body */}
          <AlertDialogDescription>
            <div className="flex flex-col items-center gap-4">
              <div className="text-center">
                <h1 className="text-2xl font-bold">5 (Good / Amazing)</h1>

                <div className="flex justify-center gap-1 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 fill-orange-500 text-orange-500"
                    />
                  ))}
                </div>
              </div>

              <textarea
                placeholder="Write your review..."
                className="w-full h-24 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>

        {/* Footer */}
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <AlertDialogAction asChild>
            <Button className="bg-orange-500 text-white hover:bg-orange-600 capitalize">
              Submit
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
