import { ListGroup } from "react-bootstrap"


const ProfileTranslationHistoryItem = ( { translation }) => {
    //return translation item
    return   <ListGroup.Item as="li">{translation}</ListGroup.Item>
}

export default ProfileTranslationHistoryItem