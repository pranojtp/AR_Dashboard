import { User, Settings, Bell, Lock, Handshake } from 'lucide-react'; // import icons

const iconMap = {
    UserRound: User,
    Settings: Settings,
    Bell: Bell,
    Lock: Lock,
    Handshake: Handshake
};

const navigation = [
    { name: 'Account Details', href: '/settings/account', icon: 'UserRound' },
    { name: 'General', href: '/settings/general', icon: 'Settings' },
    { name: 'Notifications', href: '/settings/notification', icon: 'Bell' },
    // { name: 'Terms of Service', href: '/terms', icon: 'Handshake' },
    // { name: 'Privacy & Policy', href: '/privacy', icon: 'Lock' },
];
const Sidebar_settings = () => {
    return (
        <>
            <div className="w-64 flex flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-neutral-900 px-6 dark:border-white/10 dark:bg-neutral-900 p-4">
                <div className="relative flex flex-col h-16 shrink-0 mb-4">
                    <h1 className="text-xl font-bold mb-4 text-white">Settings</h1>
                    <p className="text-m text-white">Manage your account preferences</p>
                </div>

                <hr className="border-white mb-4" />

                <nav className="flex flex-col gap-2 text-sm">
                    {navigation.map((item) => {
                        const IconComponent = iconMap[item.icon]; // get the icon component
                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-[#00FFA3] text-white font-medium"
                            >
                                {IconComponent && <IconComponent className="w-5 h-5" />}
                                {item.name}
                            </a>
                        );
                    })}
                </nav>
            </div>
        </>
    )
}

export default Sidebar_settings
