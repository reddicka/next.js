import '../styles/globals.scss'
import Layout from "../components/Layout";
import {AppProps} from "next/app";
import {FC} from "react";


const MyApp: FC<AppProps> = ({Component, pageProps}) => {
    return (
        <Layout>
            <main>
                <Component {...pageProps} />
            </main>
        </Layout>
    )
}

export default MyApp
