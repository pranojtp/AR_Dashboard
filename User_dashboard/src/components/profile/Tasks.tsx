// interface TaskItem {
//     id: number;
//     name: string;
//     message: string;
//     details: string;
//     initials: string;
// }

// const tasks: TaskItem[] = [
//     {
//         id: 1,
//         name: "Sarah Chen",
//         message: "Project update ready for review",
//         details: "Pizza ipsum dolor meat lovers buffalo. Marinara mushrooms tossed anchovies personal party lovers. Onions beef broccoli ham personal white ham mouth. Red ipsum pork beef Philly mushrooms sautéed and broccoli",
//         initials: "SC",
//     },
// {
//     id: 2,
//     name: "Marcus Johnson",
//     message: "SFX feedback on the new reel",
//     details: "Pizza ipsum dolor meat lovers buffalo. Marinara mushrooms tossed anchovies personal party lovers. Onions beef broccoli ham personal white ham mouth. Red ipsum pork beef Philly mushrooms sautéed and broccoli",
//     initials: "MJ",
// },
// {
//     id: 3,
//     name: "Emma Rodriguez",
//     message: "Meeting scheduled for tomorrow",
//     details: "Pizza ipsum dolor meat lovers buffalo. Marinara mushrooms tossed anchovies personal party lovers. Onions beef broccoli ham personal white ham mouth. Red ipsum pork beef Philly mushrooms sautéed and broccoli",
//     initials: "ER",
// },
// {
//     id: 4,
//     name: "Emma Rodriguez",
//     message: "Reel 4 is ready for production",
//     details: "Pizza ipsum dolor meat lovers buffalo. Marinara mushrooms tossed anchovies personal party lovers. Onions beef broccoli ham personal white ham mouth. Red ipsum pork beef Philly mushrooms sautéed and broccoli",
//     initials: "ER",
// },
// {
//     id: 5,
//     name: "Babychen Paul",
//     message: "Contract of [project name] is ready",
//     details: "Pizza ipsum dolor meat lovers buffalo. Marinara mushrooms tossed anchovies personal party lovers. Onions beef broccoli ham personal white ham mouth. Red ipsum pork beef Philly mushrooms sautéed and broccoli",
//     initials: "BP",
// },
// ];

// const Tasks: React.FC = () => {
//     return (
//         <>
//             <div className="bg-neutral-950 rounded-2xl p-4 border-1 border-neutral-800 text-white w-full">

//                 <div className="flex justify-between items-center mb-4">
//                     <h3 className="text-base font-semibold flex items-center gap-4">
//                         Tasks
//                         <span>
//                             <input
//                                 type="text"
//                                 // value={}
//                                 // onChange={}
//                                 placeholder="Search..."
//                                 className="p-2 sm:p-1.5 border rounded-lg border-neutral-700 bg-neutral-900 text-white w-full sm:w-auto text-sm sm:text-xs max-w-full sm:max-w-xs focus:outline-none"
//                             />
//                         </span>
//                     </h3>
//                     <div className="flex flex-row gap-4">
//                         <button className="text-[#00e695] text-xs font-semibold hover:underline">
//                             Pending
//                         </button>
//                         <button className="text-neutral-400 text-xs font-semibold hover:underline">
//                             Completed
//                         </button>
//                     </div>
//                 </div>

//                 <div className="flex flex-col gap-1">
//                     {tasks.map((n) => (
//                         <div
//                             key={n.id}
//                             className="flex items-start justify-between rounded-xl p-2 border-b border-neutral-800 hover:bg-neutral-900 transition"
//                         >
//                             <div className="flex items-start gap-3 ">
//                                 <div className="relative">
//                                     <div className="w-10 h-10 rounded-full bg-[#00e695] text-black font-bold flex items-center justify-center">
//                                         {n.initials}
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-col">
//                                     <p className="font-semibold text-xs">{n.message}</p>
//                                     <p className="font-normal text-xs">{n.name}</p>
//                                 </div>
//                             </div>
//                             <div className="flex flex-row items-end gap-4 text-xs font-normal">
//                                 <button className="text-[#00e695] hover:underline">JOIN NOW</button>
//                                 <button className="text-[#00e695] hover:text-red-400 transition">
//                                     CLOSE
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Tasks

import React, { useState } from "react";
import { useEffect } from "react";
import taskService from "../../services/taskService";
import { motion, AnimatePresence } from "framer-motion";

interface TaskItem {
    id: string;
    createdBy: {
        displayName: string;
    };
    title: string;
    description: string;
    status: "PENDING" | "COMPLETED";
    label: string;
    targetUrl: string;
    expiresAt: string;
    createdAt: string;
}

const Tasks: React.FC = () => {
    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: { x: 0, opacity: 1 },
        exit: (direction: number) => ({
            x: direction > 0 ? -100 : 100,
            opacity: 0,
        }),
    };

    const handleTabChange = (tab: "pending" | "completed") => {
        if (tab === activeTab) return;
        setDirection(tab === "completed" ? 1 : -1);
        setActiveTab(tab);
    };
    
    const [tasks, setTasks] = useState<TaskItem[]>([]);
    const [selectedTask, setSelectedTask] = useState<TaskItem | null>(null);
    const [activeTab, setActiveTab] = useState<"pending" | "completed">("pending");
    const [direction, setDirection] = useState<1 | -1>(1);

    const pendingTasks = tasks.filter(t => t.status === "PENDING");
    const completedTasks = tasks.filter(t => t.status === "COMPLETED");

    const displayedTasks =
        activeTab === "pending" ? pendingTasks : completedTasks;


    useEffect(() => {
        taskService.getTasks().then((res) => {
            setTasks(res.data);
        });
    }, []);

    const getInitials = (name: string) =>
        name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase();

    return (
        <div className="bg-neutral-950 rounded-2xl p-4 border border-neutral-800 text-white w-full h-fit overflow-hidden">


            <div className="flex justify-between items-center mb-4 w-full">

                <div className="flex items-center gap-4">
                    <h3 className="text-base font-semibold">Tasks</h3>

                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 border rounded-lg border-neutral-700 bg-neutral-900 
                        text-white w-[150px] sm:w-60 text-xs focus:outline-none"
                    />
                </div>

                {/* Right: Tabs */}
                <div className="flex gap-4 shrink-0">
                    <button
                        className={`text-xs font-semibold ${activeTab === "pending"
                            ? "text-[#00e695]"
                            : "text-neutral-400 hover:text-white"
                            }`}
                        onClick={() => handleTabChange("pending")}
                    >
                        Pending
                    </button>

                    <button
                        className={`text-xs font-semibold ${activeTab === "completed"
                            ? "text-[#00e695]"
                            : "text-neutral-400 hover:text-white"
                            }`}
                        onClick={() => handleTabChange("completed")}
                    >
                        Completed
                    </button>
                </div>
            </div>

            {/* Task List */}
            <div className="relative min-h-[300px] overflow-hidden">
                <AnimatePresence mode="popLayout" custom={direction}>
                    <motion.div
                        key={activeTab}
                        custom={direction}
                        variants={slideVariants}
                        initial=""
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute w-full"
                    >
                        {displayedTasks.map((n) => (
                            <div
                                key={n.id}
                                onClick={() => setSelectedTask(n)}
                                className="cursor-pointer flex items-start justify-between rounded-xl p-2 border-b border-neutral-800 hover:bg-neutral-900 transition"
                            >

                                <div className="flex items-start gap-3">
                                    <div className="relative">
                                        <div className="w-10 h-10 rounded-full bg-[#00e695] text-black font-bold flex items-center justify-center">
                                            {getInitials(n.createdBy.displayName)}
                                        </div>
                                        {n.status === "PENDING" && (
                                            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#00e695] rounded-full border border-neutral-950" />
                                        )}
                                    </div>

                                    <div className="flex flex-col">
                                        <p className="font-semibold text-xs">{n.title}</p>
                                        <p className="font-normal text-xs">{n.createdBy.displayName}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedTask(n)}
                                    className="text-[#00e695] hover:underline text-sm"
                                >
                                    {n.label || "VIEW"}
                                </button>
                            </div>
                        ))}

                        {displayedTasks.length === 0 && (
                            <p className="text-neutral-500 text-xs text-center py-4">
                                No {activeTab} tasks found.
                            </p>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedTask && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/70 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        <motion.div
                            className="fixed inset-0 flex items-center justify-center sm:justify-end sm:pr-10 z-50"
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 200, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="bg-neutral-950 rounded-2xl w-[95%] sm:w-[450px] max-h-[90vh] overflow-y-auto p-5 border border-neutral-700 shadow-xl text-white relative">
                                <button
                                    className="absolute top-3 right-4 text-neutral-400 hover:text-white"
                                    onClick={() => setSelectedTask(null)}
                                >
                                    ✕
                                </button>

                                <h4 className="text-m text-white mb-3">Task</h4>

                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex flex-row gap-2">
                                        <div className="w-10 h-10 rounded-full bg-[#00e695] text-black font-bold flex items-center justify-center">
                                            {getInitials(selectedTask.createdBy.displayName)}
                                        </div>
                                        <div>
                                            <p className="text-white font-normal text-xs">
                                                {selectedTask.createdBy.displayName}
                                            </p>
                                            <p className="text-white font-semibold text-sm">
                                                {selectedTask.title}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-neutral-500">Expires on {new Date(selectedTask.expiresAt).toLocaleDateString("en-GB")}</p>
                                </div>

                                <p className="text-xs text-neutral-300 leading-relaxed mb-3">
                                    {selectedTask.createdBy.displayName} invited you to join the team.
                                </p>
                                <div className="flex justify-end gap-6 text-xs font-semibold">
                                    <button
                                        onClick={() =>
                                            selectedTask.targetUrl &&
                                            (window.location.href = selectedTask.targetUrl)
                                        }
                                        className="text-[#00e695] hover:underline"
                                    >
                                        {selectedTask.label || "DONE"}
                                    </button>
                                    <button
                                        onClick={() => setSelectedTask(null)}
                                        className="text-neutral-400 hover:text-red-400 transition"
                                    >
                                        CLOSE
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};
export default Tasks;
