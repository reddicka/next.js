import Header from "../../components/Header";
import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";
import {GetStaticProps} from "next";
import {contactType} from "../../types";
import {FC} from "react";


type contactsTypeProps = {
    contacts: contactType[]
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            contacts: data
        }
    }
}


const Contacts: FC<contactsTypeProps> = ({contacts}) => {
    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>

            <Heading text='Список контактов:'/>

            <ul>
                {contacts &&
                    contacts.map(({id, name, email}) => (
                        <li key={id}>
                            <Link href={`/contacts/${id}`}>{name}</Link>
                            <br/>
                            {email}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Contacts