import React from 'react'

const Hero = () => {
    return (
        <section className="h-full w-full md:pt-44 relative flex items-center justify-center flex-col ">

            <div className="pt-11">
                <div className="relative mx-auto flex max-w-2xl flex-col items-center">
                    <div className="mb-8 flex">
                        <a
                            href="https://github.com/ibelick/background-snippets"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex"
                        >
                            <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
                                <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-slate-950 px-3 py-1 text-xs font-medium leading-5 text-white backdrop-blur-xl dark:bg-black dark:text-slate-200">
                                    New snippets ⚡️
                                    <span className="inline-flex items-center pl-2 text-white dark:text-black">
                                        Read more{' '}
                                        {/* <ArrowRight
                                                className="pl-0.5 text-black dark:text-white"
                                                size={16}
                                            /> */}
                                    </span>
                                </div>
                            </span>
                        </a>
                    </div>
                    <h2 className="text-center text-3xl font-medium text-zinc-500 dark:text-gray-50 sm:text-6xl">
                        Collection of modern,{' '}
                        <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                            background snippets
                        </span>
                    </h2>
                    <p className="mt-6 text-center text-lg leading-6 text-sky-400 dark:text-gray-200">
                        Ready-to-use, simply copy and paste into your next project. All
                        snippets crafted with Tailwind CSS and{' '}
                        <span className="cursor-wait opacity-70">Vanilla CSS</span> for
                        easy integration.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Hero