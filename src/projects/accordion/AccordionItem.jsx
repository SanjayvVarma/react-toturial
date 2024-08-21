import { useEffect, useState } from "react";

const AccordionIetm = ({ title, info, id, openAccordionId, setIdOfOpenAccordion }) => {
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow((prev) => !prev);
        setIdOfOpenAccordion(id);
    };

    useEffect(() => {
        if (openAccordionId) {
            setShow(openAccordionId === id);
        }
    }, [id, openAccordionId]);

    return (
        <div key={id} className='accordion'>
            <div className='accordion-title'>
                <h3>{title}</h3>
                <button onClick={toggle} className='accordion-icon'>
                    {show ? "-" : "+"}
                </button>
            </div>
            {show && <p>{info}</p>}
        </div>
    );
};

export default AccordionIetm;