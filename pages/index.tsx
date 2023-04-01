import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Heading from "../components/Heading";
import Socials from "../components/Socials";
import {GetStaticProps} from "next";
import {FC} from "react";
import {socialType} from "../types";


type homeProps = {
    socials: socialType[]
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch(`${process.env.API_HOST}/socials`)
    const data = await response.json()

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            socials: data
        }
    }
}


const Home: FC<homeProps> = ({socials}) => {
    return (
        <div className={styles.wrapper}>
            <Head>
                <title>ПРИЛОЖЕНЬКА НА NEXT</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Heading text='Домашняе' />

            <Socials socials={socials} />
        </div>
    )
}

export default Home
