import React from 'react'
import NotesList from '../components/NotesList';
import Head from "next/head";


export default class NotesCheckList extends React.Component {
    render() {
        return (
            <>
                <Head>
                    <title>Notei</title>
                    <link
                        rel="stylesheet"
                        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
                    />
                </Head>
                <NotesList/>
            </>
        );
    }
}
