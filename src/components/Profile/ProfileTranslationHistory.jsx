import { ListGroup } from "react-bootstrap";
import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem";
//to list users translations to the profilepage
const ProfileTranslationHistory = ({ translations }) => {
  //mapping translations
  const translationList = translations.map((translation, index) => <ProfileTranslationHistoryItem key={index + "-" + translation} translation={translation} />);

  return (
    <section class="translation-list">
      <h4>Your translation history</h4>
      {translationList.length === 0 && <p>Your translations seems empty... 🕸</p>}
      <ListGroup>{translationList}</ListGroup>
    </section>
  );
};

export default ProfileTranslationHistory;
