
import ThreeWavesScene from '../landingpage/Threeparticles';
const Hero = () => {
    return (
        <>

            <div className="pb-16 pt-20 text-center lg:pt-23 bg-black">
                <div className="absolute inset-0 z-0">
                    <ThreeWavesScene />
                </div>
                <div className="relative z-10">
                    <h1 className="mx-auto max-w-4xl font-display text-4xl font-medium tracking-tight text-white lg:text-7xl sm:text-5xl">
                        Production-quality{' '}
                        <span className="relative whitespace-nowrap text-lime-400">
                            <span className="relative">speech technology</span>
                        </span>{' '}
                        for the modern cinema.
                    </h1>

                    <div className="mx-auto bg-black/50 bg-opacity-80 p-6 rounded-lg">
                        <h2 className="mx-auto mt-12 font-display font-medium max-w-2xl text-3xl tracking-tight text-white">
                            Hello, we are Audio Realities.
                        </h2>
                        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-zinc-400 font-body">
                            We strive to embrace science and technology to re<span className="text-lime-400">[de]</span>fine your sonic artistry,
                            so you can enjoy all the time and effort you put into creating magic with sounds.
                            We are committed to get inspired by the same magic to push boundaries in audio technology.
                        </p>
                        {/* <div className="mt-10 flex justify-center gap-x-6">
                            <button className='text-white'>Explore Features</button>
                        </div> */}
                    </div>

                    {/* Three.js Waves Background */}

                </div>
            </div>
        </>
    )
}

export default Hero
