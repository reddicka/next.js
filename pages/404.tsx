import Header from "../components/Header";
import {FC, useEffect} from "react";
import {useRouter} from "next/router";
import Head from "next/head";


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

            <Header text='Ошибка 404' />
            <p>Такой страницы не существует, другалек</p>
        </>
    )
}

export default Error