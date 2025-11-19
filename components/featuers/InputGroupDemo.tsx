import {  Search } from "lucide-react"


import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import React from "react"


 function InputGroupDemo() {
  return (
    <div >
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export default React.memo(InputGroupDemo)
