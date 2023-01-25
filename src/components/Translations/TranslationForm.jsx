import React from "react";
import { useForm } from "react-hook-form";

//! ------------------------ states
function TranslationForm({handleUserInput}) {
  const { register, handleSubmit} = useForm();

  //! ------------------------- functions
  const onSubmit = ({ translate }) => {handleUserInput(translate)};
  
  return (
    <div className="translation-card container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="What word to translate?" {...register("translate")} />
        <button type="submit">submit</button>
      </form>
    
    </div>
  );
}
export default TranslationForm;
