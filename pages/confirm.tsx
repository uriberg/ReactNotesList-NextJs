import React from 'react'
import Head from "next/head";
import ConfirmationMessage from "../components/confirmationMessage";
import {useRouter} from 'next/router';

const Confirm = () => {

    const router = useRouter();

    return (
        <>
            <Head>
                <title>Notei</title>
                <link
                    rel="stylesheet"
                    href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
                />
            </Head>
            <ConfirmationMessage purchasedProduct={router.query.noteName}/>
        </>
    );
};

export default Confirm;

