import { ListGroup } from "react-bootstrap";
import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem";
//to list users translations to the profilepage
const ProfileTranslationHistory = ({ translations }) => {
  //mapping translations
  const translationList = translations
    .map((translation, index) => <ProfileTranslationHistoryItem key={index + "-" + translation} translation={translation} />)
    .reverse()
    .filter((item, index) => index < 10);

  //if no texts then display empty p else show 10 latest posts
  return (
    <section className="translation-items-section">
      <h4 className="translation-items-section-title">Your translation history</h4>
      {translationList.length === 0 && <p>Your translations seems empty... 🕸</p>}
      <ListGroup>{translationList}</ListGroup>
    </section>
  );
};
export default ProfileTranslationHistory;
