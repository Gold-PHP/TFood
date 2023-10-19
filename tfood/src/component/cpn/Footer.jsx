// eslint-disable-next-line no-unused-vars
import React from 'react'

function Footer() {
    return (
        <div>
            {/* component */}
            <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
                <div className="max-w-screen-xl  px-4 py-16 mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-5 gap-8 lg:grid-cols-5">
                        <div>
                            {/* <svg width="193" height="52" viewBox="0 0 193 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.176 5.568H17.792V51H12.392V5.568H0.00800003V0.599997H30.176V5.568ZM27.2043 27.96H41.3883V32.928H27.2043V27.96ZM74.6838 5.568H62.2998V51H56.8998V5.568H44.5158V0.599997H74.6838V5.568ZM73.8418 15H77.5138L78.4498 18.816H78.6658C79.3378 17.424 80.2018 16.344 81.2578 15.576C82.3618 14.76 83.6818 14.352 85.2178 14.352C86.3218 14.352 87.5698 14.568 88.9618 15L87.9538 20.256C86.7058 19.824 85.6018 19.608 84.6418 19.608C83.1058 19.608 81.8578 20.064 80.8978 20.976C79.9378 21.84 79.3138 23.016 79.0258 24.504V51H73.8418V15ZM93.2396 17.16C94.6316 16.296 96.3116 15.624 98.2796 15.144C100.296 14.664 102.408 14.424 104.616 14.424C106.632 14.424 108.24 14.736 109.44 15.36C110.688 15.936 111.648 16.752 112.32 17.808C113.04 18.816 113.496 19.992 113.688 21.336C113.928 22.632 114.048 24 114.048 25.44C114.048 28.32 113.976 31.128 113.832 33.864C113.736 36.6 113.688 39.192 113.688 41.64C113.688 43.464 113.736 45.168 113.832 46.752C113.976 48.288 114.216 49.752 114.552 51.144H110.592L109.368 46.896H109.08C108.36 48.144 107.304 49.224 105.912 50.136C104.52 51.048 102.648 51.504 100.296 51.504C97.7036 51.504 95.5676 50.616 93.8876 48.84C92.2556 47.016 91.4396 44.52 91.4396 41.352C91.4396 39.288 91.7756 37.56 92.4476 36.168C93.1676 34.776 94.1516 33.648 95.3996 32.784C96.6956 31.92 98.2076 31.32 99.9356 30.984C101.712 30.6 103.68 30.408 105.84 30.408C106.32 30.408 106.8 30.408 107.28 30.408C107.76 30.408 108.264 30.432 108.792 30.48C108.936 28.992 109.008 27.672 109.008 26.52C109.008 23.784 108.6 21.864 107.784 20.76C106.968 19.656 105.48 19.104 103.32 19.104C101.976 19.104 100.512 19.32 98.9276 19.752C97.3436 20.136 96.0236 20.64 94.9676 21.264L93.2396 17.16ZM108.864 34.584C108.384 34.536 107.904 34.512 107.424 34.512C106.944 34.464 106.464 34.44 105.984 34.44C104.832 34.44 103.704 34.536 102.6 34.728C101.496 34.92 100.512 35.256 99.6476 35.736C98.7836 36.216 98.0876 36.864 97.5596 37.68C97.0796 38.496 96.8396 39.528 96.8396 40.776C96.8396 42.696 97.2956 44.184 98.2076 45.24C99.1676 46.296 100.392 46.824 101.88 46.824C103.896 46.824 105.456 46.344 106.56 45.384C107.664 44.424 108.432 43.368 108.864 42.216V34.584ZM131.14 36.096L132.58 43.224H132.724L134.02 35.952L140.356 15H145.828L133.516 51.792H130.996L118.468 15H124.372L131.14 36.096ZM171.87 48.552C170.718 49.608 169.254 50.424 167.478 51C165.702 51.576 163.83 51.864 161.862 51.864C159.606 51.864 157.638 51.432 155.958 50.568C154.326 49.656 152.958 48.384 151.854 46.752C150.798 45.072 150.006 43.08 149.478 40.776C148.998 38.472 148.758 35.88 148.758 33C148.758 26.856 149.886 22.176 152.142 18.96C154.398 15.744 157.59 14.136 161.718 14.136C163.062 14.136 164.382 14.304 165.678 14.64C167.022 14.976 168.222 15.648 169.278 16.656C170.334 17.664 171.174 19.08 171.798 20.904C172.47 22.728 172.806 25.104 172.806 28.032C172.806 28.848 172.758 29.736 172.662 30.696C172.614 31.608 172.542 32.568 172.446 33.576H154.158C154.158 35.64 154.326 37.512 154.662 39.192C154.998 40.872 155.526 42.312 156.246 43.512C156.966 44.664 157.878 45.576 158.982 46.248C160.134 46.872 161.55 47.184 163.23 47.184C164.526 47.184 165.798 46.944 167.046 46.464C168.342 45.984 169.326 45.408 169.998 44.736L171.87 48.552ZM167.838 29.256C167.934 25.656 167.43 23.016 166.326 21.336C165.222 19.656 163.71 18.816 161.79 18.816C159.582 18.816 157.83 19.656 156.534 21.336C155.238 23.016 154.47 25.656 154.23 29.256H167.838ZM185.628 42.432C185.628 44.112 185.844 45.312 186.276 46.032C186.756 46.752 187.404 47.112 188.22 47.112C189.228 47.112 190.404 46.848 191.748 46.32L192.252 50.496C191.628 50.88 190.74 51.192 189.588 51.432C188.484 51.672 187.476 51.792 186.564 51.792C184.74 51.792 183.252 51.24 182.1 50.136C180.996 48.984 180.444 46.992 180.444 44.16V0.599997H185.628V42.432Z" fill="#398495" />
                            </svg> */}

                            <p className="max-w-xs mt-4 text-sm text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.
                            </p>
                            <div className="flex mt-8 space-x-6 text-gray-600">
                                <a className="hover:opacity-75" href target="_blank" rel="noreferrer">
                                    <span className="sr-only"> Facebook </span>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a className="hover:opacity-75" href target="_blank" rel="noreferrer">
                                    <span className="sr-only"> Instagram </span>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a className="hover:opacity-75" href target="_blank" rel="noreferrer">
                                    <span className="sr-only"> Twitter </span>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                                <a className="hover:opacity-75" href target="_blank" rel="noreferrer">
                                    <span className="sr-only"> GitHub </span>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a className="hover:opacity-75" href target="_blank" rel="noreferrer">
                                    <span className="sr-only"> Dribbble </span>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <p className="font-medium">
                                Company
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                <a className="hover:opacity-75" href> About </a>
                                <a className="hover:opacity-75" href> Meet the Team </a>
                                <a className="hover:opacity-75" href> History </a>
                                <a className="hover:opacity-75" href> Careers </a>
                            </nav>
                        </div>
                        <div>
                            <p className="font-medium">
                                Services
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                <a className="hover:opacity-75" href> 1on1 Coaching </a>
                                <a className="hover:opacity-75" href> Company Review </a>
                                <a className="hover:opacity-75" href> Accounts Review </a>
                                <a className="hover:opacity-75" href> HR Consulting </a>
                                <a className="hover:opacity-75" href> SEO Optimisation </a>
                            </nav>
                        </div>
                        <div>
                            <p className="font-medium">
                                Helpful Links
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                <a className="hover:opacity-75" href> Contact </a>
                                <a className="hover:opacity-75" href> FAQs </a>
                                <a className="hover:opacity-75" href> Live Chat </a>
                            </nav>
                        </div>
                        <div>
                            <p className="font-medium">
                                Legal
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                <a className="hover:opacity-75" href> Privacy Policy </a>
                                <a className="hover:opacity-75" href> Terms &amp; Conditions </a>
                                <a className="hover:opacity-75" href> Returns Policy </a>
                                <a className="hover:opacity-75" href> Accessibility </a>
                            </nav>
                        </div>

                        {/* <div className="grid grid-cols-4 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                           
                        </div> */}
                    </div>
                    <p className="mt-8 text-xs text-gray-800">
                        © 2022 Comany Name
                    </p>
                </div>
            </footer>





        </div>
    )
}

export default Footer