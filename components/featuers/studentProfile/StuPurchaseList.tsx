import { AccordionDemo } from "./StuUi/PurschaseAcoording"

const StuPurchaseList = ({title}: {title: string}) => {
  return (
    <div>
        <h1 className="font-semibold text-xl text-gray-900">{title}</h1>
        <div className="py-2">
          <AccordionDemo/>
        </div>
    </div>
  )
}

export default StuPurchaseList