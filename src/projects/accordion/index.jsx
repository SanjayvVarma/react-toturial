import AccordionIetm from "./AccordionItem";
import questions from "./data";
import { useState } from "react";
import './accordion.css'

const Accordion = ()=>{
  const [multiple, setMultiple] = useState(false);
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const setIdOfOpenAccordion = (id) => {
    setOpenAccordionId(multiple ? null : id);
  };

  const onMultipleChange = () => {
    if (multiple) {
      setOpenAccordionId(-1);
    }
    setMultiple(!multiple);
  };

  return (
    <div className='container'>
      <h4>
        <label htmlFor="max-open">Is multiple open accordion allowed?</label>
        <input
          type="checkbox"
          id="max-open"
          checked={multiple}
          onChange={onMultipleChange}
        />
      </h4>
      <div>
        {questions.map((question) => (
          <AccordionIetm
            key={question.id}
            multiple={multiple}
            openAccordionId={openAccordionId}
            setIdOfOpenAccordion={setIdOfOpenAccordion}
            {...question}
          />
        ))}
      </div>
    </div>
  );
}

export default Accordion