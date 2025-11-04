import React from "react";

interface NotificationItem {
    id: number;
    name: string;
    message: string;
    time: string;
    initials: string;
}

const notifications: NotificationItem[] = [
    {
        id: 1,
        name: "Sarah Chen",
        message: "Project update ready for review...",
        time: "2 min ago",
        initials: "SC",
    },
    {
        id: 2,
        name: "Marcus Johnson",
        message: "SFX feedback on the new reel...",
        time: "15 min ago",
        initials: "MJ",
    },
    {
        id: 3,
        name: "Emma Rodriguez",
        message: "Meeting scheduled for tomorrow...",
        time: "1 hour ago",
        initials: "ER",
    },
];

const Notification: React.FC = () => {
    return (
        <div className="bg-neutral-950 rounded-2xl p-4 border-1 border-neutral-800 text-white w-full">
            
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-semibold flex items-center gap-2">
                    Notifications
                    <span className="bg-[#00e695] text-black text-xs font-bold rounded-full px-2 py-0.5">
                        {notifications.length}
                    </span>
                </h3>
                <button className="text-[#00e695] text-xs font-semibold hover:underline">
                    MARK ALL READ
                </button>
            </div>
            
            <div className="flex flex-col gap-4">
                {notifications.map((n) => (
                    <div
                        key={n.id}
                        className="flex items-start justify-between rounded-xl p-3 hover:bg-neutral-900 transition"
                    >
                        <div className="flex items-start gap-3">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-xl bg-[#00e695] text-black font-bold flex items-center justify-center">
                                    {n.initials}
                                </div>
                                <span className="absolute top-0 right-0 w-2 h-2 bg-[#00e695] rounded-full border border-black"></span>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-semibold text-xs">{n.name}</p>
                                <p className="text-neutral-400 text-xs">{n.message}</p>
                                <p className="text-neutral-400 text-[11px] mt-1">{n.time}</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-1 text-xs font-normal">
                            <button className="text-[#00e695] hover:underline">VIEW</button>
                            <button className="text-gray-400 hover:text-red-400 transition">
                                REMOVE
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="border-t border-neutral-800 mt-4 pt-3 text-center text-xs text-neutral-400">
                Total Notifications: {notifications.length}
            </div>
        </div>
    );
};

export default Notification;
