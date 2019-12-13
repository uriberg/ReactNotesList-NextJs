import React from 'react';
import App from 'next/app';
import { Provider } from 'mobx-react';

import {NotesStore} from "../stores/notesStore";


class CustomApp extends App {
    // static async getInitialProps(appContext) {
    //     const mobxStore = new UIStore();
    //     appContext.ctx.mobxStore = mobxStore;
    //     const appProps = await App.getInitialProps(appContext);
    //     return {
    //         ...appProps,
    //         initialMobxState: mobxStore,
    //     };
    // }


    private notesStore: NotesStore = new NotesStore();

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Provider notesStore={this.notesStore}>
                    <Component {...pageProps} />
            </Provider>
        );
    }
}

export default CustomApp;
