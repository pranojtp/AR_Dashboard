
const Team = () => {
    return (
        <>
            <section
                id="team"
                aria-label="TeamMemberss for simplifying everyday business tasks"
                className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
            >
                <div>
                    <div className="mx-auto max-w-4xl md:text-center">
                        <h2 className="font-display text-2xl tracking-tight text-white sm:text-4xl">
                            Who we are
                        </h2>
                        <p className="mt-4 text-m tracking-tight text-zinc-400 font-body">
                            We are on a mission to simplify voice conversion for the film industry.
                            For project enquires, write to us at
                            <a href="mailto:info@audiorealities.com" className="text-white"><br /> info@audiorealities.com </a>or
                            <a href="https://de.linkedin.com/company/audiorealities" target="_blank" rel="noreferrer noopener" className="text-white"> join us on this mission.</a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team
