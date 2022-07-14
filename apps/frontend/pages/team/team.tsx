import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import AppShell from '../../views/common/AppShell';

function Team() {
    return (
        <AppShell>
            <div className="py-4">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div>
        </AppShell>
    );
}

export default withPageAuthRequired(Team);
