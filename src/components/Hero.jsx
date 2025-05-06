/**
 * @copyright 2025 xeynacode
 * @license Apache-2.0
 */


import React from 'react'

const Hero = () => {
  return (
    <section
    id='home'
    className='pt-28 lg:pt-36'
    >
        <div className="container items-center lg:grid
         lg:grid-cols-2 lg:gap-20">

            <div>

                <div className="flex items-center gap-3">
                    <figure className="img-box w-9 rounded-lg">
                        <img
                         src="/images/maulana-avatar.png"
                         width={40}
                         height={40}
                         alt="Maulana Potrait"
                         className="img-cover" 
                         />
                    </figure>

                        <div className="flex items-center gap-1.5 text-zinc-400 
                        text-sm tracking-wide">
                            <span className="relative w-2 h-2 
                            rounded-full bg-emerald-400">
                                <span className="absolute inset-0 w-2 h-2 
                            rounded-full bg-emerald-400 animate-ping"></span>
                            </span>

                            Available for work

                        </div>

                </div>
                <h2 className="">
                Building Scalable Modern Websites for the Future
                </h2>

                <div className="">
                    ButtonPrimary

                    ButtonOutline
                </div>

            </div>

            <div className="">
                <figure className="">
                    <img
                     src="/images/maulana-foto-ori.png" 
                     width={656}
                     height={800}
                     alt="Maulana Potrait" 
                     className="w-full"
                     />
                </figure>
            </div>

        </div>
    </section>
)
}

export default Hero