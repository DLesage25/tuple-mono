import Auth from '../components/Auth';
import Landing from './landing';

export default function Index() {
    return (
        <>
            <Auth>
                <Landing />
            </Auth>
        </>
    );
}
