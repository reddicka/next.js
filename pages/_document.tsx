import { Html, Head, Main, NextScript } from 'next/document'
import {FC} from "react";


const Document: FC = () => {
    return (
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
                      rel="stylesheet"/>
                <link rel='stylesheet' href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css"/>
                {/*<title>NEXT</title>*/}
                <meta name='robots' content='noindex' />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document