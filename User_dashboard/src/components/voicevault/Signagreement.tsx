

const Signagreement = () => {
    return (
        <>
            <div className="bg-black h-1/3 rounded-2xl flex flex-col gap-8 p-5 justify-center items-center ">
                <p className="text-l font-semibold text-white">Sign the agreement to upload the Voices</p>
                <a href="/userdashboard/agreementsign">
                <button className="px-2 py-1 bg-[#00FFA3] text-sm text-black rounded-xl hover:bg-[#00e695] transition">
                    SIGN THE AGREEMENT
                </button>
                </a>
            </div>
        </>
    )
}

export default Signagreement
