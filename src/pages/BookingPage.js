import BookingFormStep0 from "../components/reservations/BookingFormStep0";
import BookingFormStep1 from "../components/reservations/BookingFormStep1";
import BookingFormStep2 from "../components/reservations/BookingFormStep2";
import { useState, useReducer, useEffect } from "react";
import { initializeTimes, updateTimes } from "../api";

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    seating: "1",
    date: null,
    time: "",
    diners: "",
    occasion: "",
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });

  useEffect(() => {
    if (formData.time.length !== 0 && !availableTimes.includes(formData.time)) {
      setFormData({ ...formData, time: "" });
    }
    // eslint-disable-next-line
  }, [availableTimes, formData.date]);

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <main>
      {step === 0 && (
        <BookingFormStep0
          step={step}
          nextStep={nextStep}
          updateFormData={setFormData}
          availableTimes={availableTimes}
          dispatch={dispatch}
          values={formData}
        />
      )}
      {step === 1 && (
        <BookingFormStep1
          step={step}
          prevStep={prevStep}
          nextStep={nextStep}
          updateFormData={setFormData}
          values={formData}
        />
      )}
      {step === 2 && <BookingFormStep2 step={step} values={formData} />}
    </main>
  );
}

export default BookingPage;
