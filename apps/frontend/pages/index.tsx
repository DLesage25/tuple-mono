import Auth from '../components/common/Auth';
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
