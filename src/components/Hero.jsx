/**
 * @copyright 2025 xeynacode
 * @license Apache-2.0
 */


import React from 'react'

const Hero = () => {
  return (
    <section
    id='home'
    className=''
    >
        <div className="">

            <div>

                <div className="">
                    <figure className="">
                        <img
                         src="/image/avatar-1.jpg"
                         width={40}
                         height={40}
                         alt="Maulana Potrait"
                         className="img-cover" 
                         />
                    </figure>

                        <div className="">
                            <span className="">
                                <span className=""></span>
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
                     src="/images/hero-banner.png" 
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