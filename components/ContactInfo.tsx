import Heading from "./Heading";
import {contactType} from "../types";
import {FC} from "react";


type contactInfoProps = {
    contact: contactType
}

const ContactInfo: FC<contactInfoProps> = ({contact}) => {
    const {name, email, address} = contact || {}
    const {street, suite, city, zipcode} = address || {}

    if (!contact) {
        return <Heading tag='h3' text='Контакт пустой' />
    }

    return (
        <>
            <Heading tag='h3' text={name} />

            <div>
                <strong>Email: </strong>
                {email}
            </div>

            <div>
                <strong>Address: </strong>
                {`${street}, ${suite}, ${zipcode}`}
            </div>
        </>
    )
}

export default ContactInfo