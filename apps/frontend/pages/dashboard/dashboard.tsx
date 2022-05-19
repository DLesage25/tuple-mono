import Auth from '../../components/common/Auth';
import AppShell from '../../views/common/AppShell';

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
