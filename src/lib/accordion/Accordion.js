import { useState } from "react";
const Accordion = ({heading, content}) =>{
    const [isOpen , setIsOpen] = useState(true);

    const accordionClickHandler = () => {
        setIsOpen((prevState) =>
         prevState = !prevState
        )
    }

    return (
    <>
    <div>
     <div>
    <h3>{heading}</h3>
    <button onClick={accordionClickHandler} >{isOpen ? 'close' : 'expand'}</button>
    </div>
    { isOpen && <div>
        {content}
    </div>
    }
    </div>
    </>
    )
}

export default Accordion;