
import { useState } from "react";
import DropDown from './../components/DropDown';

import './../styles/HoverMenu.css'

const Profiles = () => {

    const [isDropdownVisible, setDropdownVisible] = useState(false)

    const handleMouseEnter = () => {
      setDropdownVisible(true)
    }
  
    const handleMouseLeave = () => {
      setDropdownVisible(false)
    }

    return (
      <div>
          <div
            className="menu"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button>Dropdown Menu</button>
            {isDropdownVisible && <DropDown />}

          </div>
      </div>
  )
}

export default Profiles