const Notification = () => {
    return (
        <>
            {/* 1. Container: Removed fixed h-80 for flexibility, added a max-w-lg and mx-auto for centering on large screens. */}
            <div className="bg-black rounded-2xl p-4 text-white w-full max-w-lg mx-auto">

                {/* 2. Header: Uses flex-col on small screens (sm:flex-row) to stack title and button if necessary. 
                      Uses items-start on mobile and items-center on small screens and up.
                      Added gap-2 for spacing when wrapped.
                */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">

                    <h3 className="text-lg font-semibold">Notifications</h3>

                    {/* 3. Button: Added w-full sm:w-auto to make the button full width on mobile for easy tapping. */}
                    <button
                        className="px-4 py-1 bg-black text-[#00e695] rounded-2xl transition hover:bg-[#00e695] hover:text-black text-sm w-full sm:w-auto"
                    >
                        MARK ALL READ
                    </button>
                </div>                
            </div>
        </>
    )
}

export default Notification