

const Notificationsettings = () => {
    return (
        <>
            <div className="flex-1 p-10 h-fit bg-neutral-900">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-xl text-white font-semibold">Notification Preferences</h1>
                    <button
                        // onClick={handleSave}
                        className="px-4 py-1 bg-[#00FFA3] text-black font-medium rounded-lg hover:bg-[#00e695] transition"
                    >
                        Save Changes
                    </button>
                </div><br />
                <div className="flex flex-col gap-6">
                    <div className="bg-neutral-800 outline -outline-offset-1 outline-white/10 sm:rounded-lg border border-neutral-500">
                        <div className="px-2 py-1 sm:p-6">
                            <h3 className="text-m font-semibold text-white">Email Notifications</h3>
                            <div className="mt-2 sm:flex sm:items-start sm:justify-between">
                                <div className="max-w-xl text-m text-neutral-400">
                                    <p id="renew-subscription-description">
                                        Receive updates via email
                                    </p>
                                </div>
                                <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex sm:shrink-0 sm:items-center">
                                    <div className="group relative inline-flex w-11 shrink-0 rounded-full bg-white/5 p-0.5 inset-ring inset-ring-white/10 outline-offset-2 outline-indigo-500 transition-colors duration-200 ease-in-out has-checked:bg-[#00e695] has-focus-visible:outline-2">
                                        <span className="size-5 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-5" />
                                        <input
                                            name="renew-subscription"
                                            type="checkbox"
                                            aria-label="Renew subscription automatically"
                                            aria-describedby="renew-subscription-description"
                                            className="absolute inset-0 appearance-none focus:outline-hidden"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-neutral-800 outline -outline-offset-1 outline-white/10 sm:rounded-lg border border-neutral-500">
                        <div className="px-2 py-1 sm:p-6">
                            <h3 className="text-m font-semibold text-white">Push Notifications</h3>
                            <div className="mt-2 sm:flex sm:items-start sm:justify-between">
                                <div className="max-w-xl text-m text-neutral-400">
                                    <p id="renew-subscription-description">
                                        Get instant notification on your device
                                    </p>
                                </div>
                                <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex sm:shrink-0 sm:items-center">
                                    <div className="group relative inline-flex w-11 shrink-0 rounded-full bg-white/5 p-0.5 inset-ring inset-ring-white/10 outline-offset-2 outline-indigo-500 transition-colors duration-200 ease-in-out has-checked:bg-[#00e695] has-focus-visible:outline-2">
                                        <span className="size-5 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-5" />
                                        <input
                                            name="renew-subscription"
                                            type="checkbox"
                                            aria-label="Renew subscription automatically"
                                            aria-describedby="renew-subscription-description"
                                            className="absolute inset-0 appearance-none focus:outline-hidden"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-neutral-800 outline -outline-offset-1 outline-white/10 sm:rounded-lg border border-neutral-500">
                        <div className="px-2 py-1 sm:p-6">
                            <h3 className="text-m font-semibold text-white">Marketing Emails</h3>
                            <div className="mt-2 sm:flex sm:items-start sm:justify-between">
                                <div className="max-w-xl text-m text-neutral-400">
                                    <p id="renew-subscription-description">
                                        Receive promotional content and updates
                                    </p>
                                </div>
                                <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex sm:shrink-0 sm:items-center">
                                    <div className="group relative inline-flex w-11 shrink-0 rounded-full bg-white/5 p-0.5 inset-ring inset-ring-white/10 outline-offset-2 outline-indigo-500 transition-colors duration-200 ease-in-out has-checked:bg-[#00e695] has-focus-visible:outline-2">
                                        <span className="size-5 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-5" />
                                        <input
                                            name="renew-subscription"
                                            type="checkbox"
                                            aria-label="Renew subscription automatically"
                                            aria-describedby="renew-subscription-description"
                                            className="absolute inset-0 appearance-none focus:outline-hidden"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notificationsettings
