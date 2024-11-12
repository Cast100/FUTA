import React,{useState} from 'react'
import './Tooltip.css'

const Tooltip = ({text,children}) => {

 const [ visible, setVisible] = useState(false)

 const handleMouseEnter = () => setVisible(true);

  const handleMouseLeave = () => setVisible(false);

  return (
    <div>
      <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children} {/* This renders the target element (e.g., a button or icon) */}
      {visible && <div className="tooltip">{text}</div>}
    </div>
    </div>
  )
}

export default Tooltip
