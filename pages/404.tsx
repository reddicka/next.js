import {FC, useEffect} from "react";
import {useRouter} from "next/router";
import Head from "next/head";
import Heading from "../components/Heading";


const Error: FC = () => {
    const router = useRouter()

    useEffect(() => {
        const timeout = setTimeout(() => {
            router.push('/')
        }, 2000)

        return () => {
            clearInterval(timeout)
        }
    }, [])

    return (
        <>
            <Head>
                <title>404</title>
            </Head>

            <Heading text='Ошибка 404' />
            <p>Такой страницы не существует, другалек</p>
        </>
    )
}

export default Error