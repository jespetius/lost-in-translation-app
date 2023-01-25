import { useState } from "react";
import { addTranslation } from "../api/translation";
import TranslationForm from "../components/Translations/TranslationForm";


import { STORAGE_KEY_USER } from "../const/storageKey";
import { TRANSLATION } from "../const/translations";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import { storageSave } from "../utils/storage";
const Translate = () => {
  //this handles the values

  const { user, setUser } = useUser();
  const [images, setImage] = useState(null);
  //states
  const [translationText, setTranslationText] = useState(null);

  //translationtext is string user gave
  const handleUserInput = async translationText => {
    setTranslationText(translationText);
    const createArr = translationText.toLowerCase().replace(/\s/g, "").split("");
    setImage(createArr.map(letter => TRANSLATION.find(l => l.letter === letter).image));
    const transtext = translationText.trim();
    const [error, updatedUser] = await addTranslation(user, transtext);

    if (error !== null) {
      return;
    }

    storageSave(STORAGE_KEY_USER, updatedUser);
    setUser(updatedUser);
    //we should update the state
    console.log("err ", error);
    console.log("result ", updatedUser);
  };
  const CreateImages = () => images.map((img, index) => <img key={index} src={`/individial_signs/${img}`} alt={img} height="50" />);
  return (
    <div className="translation-form">
      <TranslationForm handleUserInput={handleUserInput} />
      <h4>result:</h4>
      {translationText && <p>word is {translationText}</p>}
      {images && <CreateImages />}
    </div>
  );
};

export default withAuth(Translate);
