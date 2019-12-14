import React from 'react';
import {Message} from "semantic-ui-react";

const ConfirmationMessage = (props) => {

    return (
        <Message positive style={{marginTop: '30%', textAlign: 'center'}}>
            <Message.Header>Confirmation Message</Message.Header>
            <p>
                Thanks for buying our {props.purchasedProduct}!
            </p>
        </Message>
    );
};

export default ConfirmationMessage;