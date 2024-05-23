import Image from 'next/image'

const navigation = {
    connect: [
        { name: 'Book Meeting', href: '' },
        {
            name: 'Twitter',
            href: 'https://twitter.com/dew_yashtwt',
        },
        {
            name: 'Github',
            href: 'https://github.com/yashdev9274/one1Letter.',
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com',
        },
    ],
    company: [
        { name: 'Blogs', href: '/' },
        { name: 'Pricing', href: '/' },
        { name: 'Affiliate Partner', href: '/' },
        { name: 'AI For Enterprise', href: '/' },
    ],
}

const Footer = () => {
    return (
        <footer
            aria-labelledby="footer-heading"
            className="font-inter w-full max-w-7xl pt-11"
        >
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-2">
                <div className="flex flex-col justify-between lg:flex-row">
                    <div className="space-y-8">
                        <Image
                            priority={true}
                            unoptimized={true}
                            width={100}
                            height={40}
                            src="@/public/vercel.svg"
                            alt="logo"
                            className="h-7 w-auto"
                        />
                        <p className="text-md max-w-xs leading-6 text-gray-700">
                            Only tool you wll need for marketing as a developer.
                        </p>
                        <div className="flex space-x-6 text-sm text-gray-700">
                            <div>Made with ❤️ by Yash.</div>
                        </div>
                    </div>
                    {/* Navigations */}
                    <div className="mt-16 grid grid-cols-2 gap-14 md:grid-cols-2 lg:mt-0 xl:col-span-2">
                        <div className="md:mt-0">
                            <h3 className="text-sm font-semibold leading-6 text-gray-900">
                                Connect
                            </h3>
                            <div className="mt-6 space-y-4">
                                {navigation.connect.map((item) => (
                                    <div key={item.name}>
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sm leading-6 text-gray-700 hover:text-gray-900"
                                        >
                                            {item.name}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                                    Company
                                </h3>
                                <div className="mt-6 space-y-4">
                                    {navigation.company.map((item) => (
                                        <div key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-sm leading-6 text-gray-700 hover:text-gray-900"
                                            >
                                                {item.name}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-700">
                        &copy; 2024 One1Letter. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer