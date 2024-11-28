import { useState, useEffect } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import { useFormStore, useRequestBodyStore } from "./(zustand)/formStore";
import { fillRequestBody } from '../../lib/dataHandling/serverRequestGPT'
import "./styles/forms.css";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default function ParteMedia({
  surveyTemplate = [],
  sectionTitle,
  sectionId,
  sectionKey,
  step,
  setStep,
}) {
  const inputValue = useFormStore((state) => state.inputValue);
  const setInputValue = useFormStore((state) => state.setInputValue);
  const requestBody = useRequestBodyStore((state) => state.requestBody);
  const setRequestBody = useRequestBodyStore((state) => state.setRequestBody);

  useEffect(() => {
    console.log('props sectionId', sectionId)
    console.log('props sectionKey', sectionKey)
  }, [sectionId, sectionKey])

  const handleUpdate = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const newInputValues = Object.fromEntries(formData);

    // const totalScore = handleFormResponse(newInputValues);
    fillRequestBody(sectionId, sectionKey, setRequestBody, requestBody, newInputValues);


    setInputValue({ ...inputValue, ...newInputValues });
  }

  useEffect(() => {
    // console.log(inputValue)
    console.log(requestBody)
  }, [inputValue, requestBody])

  return (
    <div className="form-container">
      <h3>{sectionTitle}</h3>
      <form
        id="form2"
        className="formStyle"
        onSubmit={(e) => {
          handleUpdate(e, sectionTitle, sectionKey);
          setStep(step + 1);
        }}
      >
        <div className="selects-grid" id={`opcion-multiple-parte${step}`}>
          {surveyTemplate
            .reduce((rows, pregunta, index) => {
              if (index % 3 === 0) rows.push([]);
              rows[rows.length - 1].push(pregunta);
              return rows;
            }, [])
            .map((row, rowIndex) => (
              <Accordion
                key={rowIndex}
                title={`${sectionTitle}, seccion ${rowIndex + 1}`}
              >
                <div className="grid-two-columns">
                  {row.map((pregunta, i) => (
                    <CustomSelect
                      key={i}
                      pregunta={pregunta.pregunta}
                      preguntaInputName={pregunta.preguntaInputName}
                      opcionesArray={pregunta.opciones}
                      tipo={pregunta.tipo}
                    />
                  ))}
                </div>
              </Accordion>
            ))}
        </div>
        <div className="button-container">
          <button
            type="button"
            className="button"
            onClick={(e) => {
              setStep(step - 1);
            }}
          >
            {"atras"}
          </button>
          <button type="submit" className="button">
            {"siguiente"}
          </button>
        </div>
      </form>
    </div>
  );
}
