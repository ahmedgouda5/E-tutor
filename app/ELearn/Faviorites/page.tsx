"use client";
import Image from "next/image";
import { ShoppingCart, Trash2 } from "lucide-react";
import { ICourse } from "@/lib/data";
import { useFavioritesStore } from "@/store/FavioritesStore";
const FavioritePage = () => {
  const { faviorites, removeFaviorite } = useFavioritesStore();
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div>
          <div className="lg:col-span-2 space-y-4">
            {faviorites.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <ShoppingCart className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-700 mb-2">
                  Your Faviorites is empty
                </h3>
                <p className="text-slate-500">
                  Add some courses to get started!
                </p>
              </div>
            ) : (
              faviorites.map((item: ICourse) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex gap-6">
                    <div className="shrink-0">
                      <div className="w-40 h-24 bg-linear-to-br from-orange-400 to-purple-500 rounded-lg flex items-center justify-center">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={160}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full mb-2">
                            {item.category}
                          </span>
                          <h3 className="text-lg font-semibold text-slate-800 mb-1 line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-slate-600">
                            by {item.instructorName}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFaviorite(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors p-2"
                          title="Remove from cart"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500">★</span>
                          <span className="font-medium">{item.rating}</span>
                        </div>
                        <span>•</span>
                        <span>{item.students} students</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            {item.discount > 0 && (
                              <span className="text-sm text-slate-400 line-through">
                                {item.price}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavioritePage;
