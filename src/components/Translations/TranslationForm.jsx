import React, { useState } from "react";
import { useForm } from "react-hook-form";

//! ------------------------ states
function TranslationForm({ handleUserInput }) {
  const { register, handleSubmit, reset } = useForm();
  const [textError, setTextError] = useState(false);
  //! ------------------------- function
  //create regex to check special characters and numbers we also replace empty spaces for this check
  function textContainsCharsNums(translationText) {
    return /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~\d]/.test(translationText);
  }
  //if text conta
  const onSubmit = ({ translate }) => {
    if (!translate || textContainsCharsNums(translate.replace(/\s/g, ""))) {
      setTextError(true);
      setTimeout(() => {
        setTextError(false);
      }, 3000);

      return;
    }
    handleUserInput(translate);
    reset();
  };

  //ternary for error
  return (
    <div className="translation-card container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="What word to translate?" {...register("translate")} />
        <button  type="submit">
          submit
        </button>

        {textError && <p>Your text must only contain letters ☢ </p>}
      </form>
    </div>
  );
}
export default TranslationForm;
