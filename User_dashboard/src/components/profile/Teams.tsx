

const Teams = () => {
    return (
        <>
            <div className="bg-black rounded-2xl p-4 text-white h-80">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Teams</h3>
                    <button
                        className="px-4 py-1 bg-[#00FFA3] text-black rounded-xl hover:bg-[#00e695] transition"
                    >
                        + Add Members
                    </button>
                </div>
            </div>
        </>
    )
}

export default Teams
