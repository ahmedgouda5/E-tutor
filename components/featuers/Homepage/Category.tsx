import Heading from "@/components/shared/heading"
import { categories } from "@/lib/data"
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Category = () => {
    return (
        <main>
            < Heading heading="Browse top category" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {categories.map((cat, i) => {
                    const Icon = cat.icon;

                    return (
                        <div
                            key={i}
                            className="p-5 rounded-xl flex items-center gap-4"
                            style={{ backgroundColor: cat.bgColor }}
                        >
                            <Icon className="w-8 h-8  bg-white p-1 " style={{ color: cat.bgColor }} />

                            <div>
                                <h3 className="font-semibold">{cat.name}</h3>
                                <p className="text-sm text-gray-600">{cat.courses}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <p className="text-center my-7">
                We have more category & subcategory.
                <Link
                    className="text-orange-500 inline-flex items-center gap-1 font-medium"
                    href="#"
                    prefetch
                >
                    Browse All
                    <ArrowRight className="w-4 h-4 translate-y-0.5" />
                </Link>
            </p>
        </main>
    )
}

export default Category