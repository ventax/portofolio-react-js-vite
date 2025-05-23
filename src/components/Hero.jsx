/**
 * @copyright 2025 xeynacode
 * @license Apache-2.0
 */

// Components
import { ButtonPrimary, ButtonOutline } from "./Button"



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
                <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch]
                lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                Building Modern Websites and Apps for the Future
                </h2>

                <div className="flex items-center gap-3">
                    <ButtonPrimary 
                    label="Download CV"
                    icon="download"
                    href="https://www.mediafire.com/file/jp43vbs8n9vy24s/CV_MAULANA_KENANG_FIRDAUS.pdf/file"
                    />

                    <ButtonOutline
                    href="#about"
                    label="Scroll down"
                    icon="arrow_downward"
                    
                    
                    /> 
                </div>

            </div>

            <div className=" hidden lg:block">
                <figure className="w-full max-w-[480px] ml-auto
                bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 
                to-65% rounded-[60px] overflow-hidden">
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