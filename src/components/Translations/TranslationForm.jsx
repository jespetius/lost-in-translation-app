import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
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
      }, 2000);

      return;
    }
    handleUserInput(translate);
    reset();
  };

  //ternary for error
  return (
    <div className="translation-input-form container">
      <Form className="translation-card-form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Translate</Form.Label>
          <Form.Control type="text" autoFocus placeholder="What word to translate?" {...register("translate")} />
        </Form.Group>
        {!textError ? <Button type="submit" className="translation-card-button" variant="warning" size="md" active>Submit</Button> : 
        <Alert className="translation-card-text" variant="danger">Your text must only contain letters ☢</Alert>}
      </Form>
    </div>
  );
}
export default TranslationForm;
