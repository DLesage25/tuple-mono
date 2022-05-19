import Auth from '../../components/Auth';
import AppShell from '../../components/AppShell';

export default function Dashboard() {
    return (
        <Auth>
            <AppShell>
                <div className="py-4">
                    <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
                </div>
            </AppShell>
        </Auth>
    );
}
