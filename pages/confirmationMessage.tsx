import { useRouter } from 'next/router';

export default function ConfirmationMessage() {
    const router = useRouter();


    return (
        <div>
            <p>Thanks for buying! {router.query.noteName}</p>
        </div>
    );
}
