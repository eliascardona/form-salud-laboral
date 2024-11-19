import React from "react";
import "./Paginacion.css"; // Asegúrate de importar el archivo CSS para estilos

const Pagination = ({ step, setStep, totalSteps }) => {
  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalSteps; i++) {
      pageNumbers.push(
        <li key={i}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setStep(i);
            }}
            aria-current={step === i ? "true" : "false"}
          >
            {i}
          </a>
        </li>,
      );
    }

    return pageNumbers;
  };

  return (
    <nav>
      <ul className="pagination">
        <li>
          <a href="#" onClick={handlePrevious}>
            &lt; Anterior
          </a>
        </li>
        {renderPageNumbers()}
        <li>
          <a href="#" onClick={handleNext}>
            Siguiente &gt;
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
