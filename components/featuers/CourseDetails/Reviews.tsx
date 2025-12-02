import { Star } from "lucide-react";

export default function Reviews() {
  return (
    <div className="space-y-6">

      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        Student Reviews
      </h2>

      {/* Review Card */}
      <div className="bg-white dark:bg-neutral-900 shadow-md border border-gray-100 dark:border-neutral-800 rounded-2xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Ahmed Hassan
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              2 days ago
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
            <Star className="text-gray-300 dark:text-neutral-700" />
          </div>
        </div>

        {/* Content */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
          الكورس ممتاز جدًا، الشرح واضح وسهل، والإنستركتور بيبسط المفاهيم
          بطريقة احترافية. استفدت جدًا خصوصًا من الجزء الخاص بالـ real projects.
        </p>
      </div>

      {/* Second Review */}
      <div className="bg-white dark:bg-neutral-900 shadow-md border border-gray-100 dark:border-neutral-800 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Mariam Adel
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              1 week ago
            </p>
          </div>

          <div className="flex items-center gap-1">
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
          المحتوى مرتب، وفيه أمثلة كتير. حسيت فعلًا إني بقيت فاهمة React بطريقة
          عملية. Highly recommended 👍
        </p>
      </div>

    </div>
  );
}
