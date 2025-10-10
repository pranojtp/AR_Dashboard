
const Notification = () => {
    return (
        <>
            <div className="bg-black rounded-2xl p-4 text-white h-80">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Notifications</h3>
                    <button
                        className="px-4 py-1 bg-black text-[#00e695] rounded-2xl transition"
                    >
                        MARK ALL READ
                    </button>
                </div>
            </div>
        </>
    )
}

export default Notification
