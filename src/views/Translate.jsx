import { useState } from "react";
import { addTranslation } from "../api/translation";
import TranslationForm from "../components/Translations/TranslationForm";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { TRANSLATION } from "../const/translationData";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import { storageSave } from "../utils/storage";

const Translate = () => {
  //this handles the values

  const { user, setUser } = useUser();
  const [images, setImage] = useState(null);
  //states
  const [translationText, setTranslationText] = useState(null);

  //check if contains numbers

  //translationtext is string user gave
  //then update states and also creatArr that shapes the data to our bidding
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
  const CreateImages = () => images.map((img, index) => <img key={index} src={`/resources/LostInTranslation_Resources/individial_signs/${img}`} alt={img} height="50" />);
  return (
    <div className="translation-form">
      <TranslationForm handleUserInput={handleUserInput} />
      <div className="translation-form-text">{translationText && <h4 className="trasnlation-form-result-title">result: {translationText}</h4>}</div>

      <div className="translation-form-images">{images && <CreateImages />}</div>
    </div>
  );
};

export default withAuth(Translate);
