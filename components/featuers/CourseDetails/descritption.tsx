import React from 'react'
import { ICourse } from '@/lib/data'

const Descritption = ({ course }: { course: ICourse }) => {
  return (
    <>
    <h2 className="text-2xl font-bold">Description</h2>
              <p className="text-gray-700 leading-relaxed">
                This course is a great way to learn how to use Webflow and dive
                into web designing. We&apos;ll start with the basics, then build
                something fairly standard, that also cover a lot of the key
                areas with a follow up lesson for styling. We&apos;ll go right
                through it building with Webflow.
              </p>
              <p className="text-gray-700 leading-relaxed">
                First, we&apos;ll learn how the basic building blocks (Div
                blocks, Containers) work. This is a nice, simple way of diving
                right in so we can start the foundation for our own sports app
                and getting used to the basics. The other way we&apos;ll go into
                is the working with how to use CSS selectors, styling classes,
                layout and the box model.
              </p>
    </>
  )
}

export default Descritption 