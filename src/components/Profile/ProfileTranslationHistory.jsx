import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory =( {translations}) => {

    const translationList = translations.map(
        (translation, index) => <ProfileTranslationHistoryItem key = {index + '-' +translation} translation = { translation }/>
    )

    return (
        <section>
            <h4>Your translation history</h4>
            <ul>
                { translationList }
            </ul>
        </section>
    )
}

export default ProfileTranslationHistory