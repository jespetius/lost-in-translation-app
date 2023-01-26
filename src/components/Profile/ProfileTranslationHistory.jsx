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
    <section>
      <h4>Your translation history</h4>
      {translationList.length === 0 && <p>Your translations seems empty... 🕸</p>}
      <ul>{translationList}</ul>
    </section>
  );
};

export default ProfileTranslationHistory;
