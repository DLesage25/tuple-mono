/* eslint-disable @next/next/no-html-link-for-pages */

import Image from 'next/image';
import {
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    UsersIcon,
} from '@heroicons/react/outline';
import { classNames } from '../../utils/classNames';
import useGetUser from '../../hooks/useGetUser';
import { useAppContext } from '../../context/appContext';
import Router from 'next/router';

interface NavigationOption {
    name: string;
    href: string;
    icon: any;
}

const navigation: NavigationOption[] = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Team', href: '/team', icon: UsersIcon },
    { name: 'Projects', href: '#', icon: FolderIcon },
    { name: 'Calendar', href: '#', icon: CalendarIcon },
    { name: 'Documents', href: '#', icon: InboxIcon },
    { name: 'Reports', href: '#', icon: ChartBarIcon },
];

export default function DesktopSidebar() {
    const { appData, setAppData } = useAppContext();
    const userData = useGetUser();
    const { name, picture } = userData || {};

    const onSidebarClick = (item: NavigationOption) => {
        setAppData({ selectedPage: item.name });
        Router.push(item.href);
    };

    return (
        <div className="flex-1 flex flex-col min-h-0 bg-gray-800">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                    <Image
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                        alt="Workflow"
                        height="50%"
                        width="100%"
                        objectFit="contain"
                    />
                </div>
                <nav className="mt-5 flex-1 px-2 space-y-1">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            onClick={() => onSidebarClick(item)}
                            className={classNames(
                                item.name === appData.selectedPage
                                    ? 'bg-gray-900 text-white'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                            )}
                        >
                            <item.icon
                                className={classNames(
                                    item.name === appData.selectedPage
                                        ? 'text-gray-300'
                                        : 'text-gray-400 group-hover:text-gray-300',
                                    'mr-3 flex-shrink-0 h-6 w-6'
                                )}
                                aria-hidden="true"
                            />
                            {item.name}
                        </a>
                    ))}
                </nav>
            </div>
            <div className="flex-shrink-0 flex bg-gray-700 p-4">
                <div className="flex-shrink-0 w-full group block">
                    <div className="flex items-center">
                        <div>
                            {picture && (
                                <Image
                                    className="inline-block h-9 w-9 rounded-full"
                                    src={picture}
                                    alt=""
                                    height="40%"
                                    width="40%"
                                    objectFit="contain"
                                />
                            )}
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-white">
                                {name || 'Loading'}
                            </p>
                            <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">
                                View profile
                            </p>
                        </div>
                        <div className="ml-14">
                            <a
                                href="/api/auth/logout"
                                className="text-xs font-medium text-gray-300 hover:text-white"
                            >
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
