import { useState } from "react";

export function Steps(props) {
  const message = props.messages;
  const [step, setStep] = useState(1)

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 && 'active'}`}>1</div>
        <div className={`${step >= 2 && 'active'}`}>2</div>
        <div className={`${step >= 3 && 'active'}`}>3</div>
      </div>

      <p className="message">
        Passo {step}: {message[step - 1]}
      </p>

      <div className="buttons">
        <button className="previous" onClick={handlePrevious}>Anterior</button>
        <button className="next" onClick={handleNext}>Próximo</button>
      </div>
    </div>
  );
};