import Heading from "../../components/Heading";
import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";
import {GetServerSideProps} from "next";
import {contactType} from "../../types";
import {FC} from "react";


type contactTypeProps = {
    contact: contactType
}

export const getServerSideProps:GetServerSideProps = async (context) => {
    console.log(context)

    const {id} = context.params
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.json()

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            contact: data
        }
    }
}


const Contact: FC<contactTypeProps> = ({contact}) => {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>

            <Heading text='Контакт' />

            <ContactInfo contact={contact} />
        </>
    )
}

export default Contact