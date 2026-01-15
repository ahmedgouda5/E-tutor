import { reviews } from "@/lib/data";
import { Star } from "lucide-react";

export default function Reviews() {
  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="bg-white dark:bg-neutral-900 shadow-md border border-gray-100 dark:border-neutral-800 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {review.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {review.time}
              </p>
            </div>

            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={
                    i < review.rating
                      ? "text-yellow-500 fill-yellow-500"
                      : "text-gray-300 dark:text-neutral-700"
                  }
                />
              ))}
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
            {review.comment}
          </p>
        </div>
      ))}
    </div>
  );
}
