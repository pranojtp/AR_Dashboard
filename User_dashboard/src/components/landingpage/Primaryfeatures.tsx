import { useState, useEffect } from 'react'
import screenshotVoiceOver from '../../assets/ManMicrophone.png'
import { Folder, MessagesSquare, ShieldAlert } from 'lucide-react'

const features = [
    {
        name: 'Advanced Speech Processing.',
        description: 'Elevate the value of "voice" and accelerate your business.',
        icon: MessagesSquare,
    },
    {
        name: 'Project Management.',
        description: 'Streamlined workflows for enhanced productivity.',
        icon: Folder,
    },
    {
        name: 'Compliances.',
        description: 'Private, secure, and compliant with industry standards.',
        icon: ShieldAlert,
    },
]

const Primaryfeatures = () => {
    const [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>('horizontal')

    useEffect(() => {
        const lgMediaQuery = window.matchMedia('(min-width: 1024px)')

        function onMediaQueryChange({ matches }: { matches: boolean }) {
            setTabOrientation(matches ? 'vertical' : 'horizontal')
        }

        onMediaQueryChange(lgMediaQuery)
        lgMediaQuery.addEventListener('change', onMediaQueryChange)

        return () => {
            lgMediaQuery.removeEventListener('change', onMediaQueryChange)
        }
    }, [])

    return (
        <section
            id="features"
            aria-label="Features"
            className="relative overflow-hidden bg-zinc-950 pb-28"
        >
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto sm:text-center">
                        <h2 className="text-base/7 font-semibold text-lime-400">For Creators & Enterprises</h2>
                        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-balance sm:text-5xl">
                            Transform your voice, transform your world.
                        </p>
                        <p className="mt-6 text-lg/8 text-gray-300">
                            Powerful voice conversion tools to grow your audience and make cinema magic.
                        </p>
                    </div>
                </div>

                {/* Hero image */}
                <div className="relative overflow-hidden pt-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <img
                            alt="Voice Conversion"
                            src={screenshotVoiceOver}
                            width={2432}
                            height={1442}
                            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
                        />
                        <div aria-hidden="true" className="relative">
                            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-zinc-950 pt-[7%]" />
                        </div>
                    </div>
                </div>

                {/* Features section */}
                <div
                    className={`mx-auto mt-16 max-w-7xl px-6 pt-8 sm:mt-20 md:mt-24 lg:px-8 flex ${tabOrientation === 'vertical' ? 'flex-row' : 'flex-col'
                        } gap-12`}
                >
                    <dl
                        className={`grid ${tabOrientation === 'vertical'
                            ? 'grid-cols-1 lg:grid-cols-3'
                            : 'grid-cols-1 sm:grid-cols-2'
                            } gap-x-8 gap-y-10 text-base/7 text-gray-300 w-full`}
                    >
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-9">
                                <dt className="inline font-semibold text-white">
                                    <feature.icon
                                        aria-hidden="true"
                                        className="absolute left-1 top-1 size-5 text-lime-500"
                                    />
                                    {feature.name}
                                </dt>{' '}
                                <dd className="inline">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    )
}

export default Primaryfeatures
