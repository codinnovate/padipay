import Button from "./Button"
import assets from "../assets";


const Hero = () => {
    return (
        <div className="flex w-full flex-col md:flex-row justify-between my-[1.84em]">
            <div className="flex flex-col gap-[1.5em] text-center md:text-start">
                <h1 className="text-6xl  font-bold">Make The Best Financial Decisions</h1>
                <h2 className="text-lg font-medium ">Navigating Prosperity: Your Guide to Strategic Financial Decision-Making for a Secure Future</h2>
                <div className="flex items-center justify-center md:justify-start ">
                    <Button
                        className='bg-black'
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="25" height="8" viewBox="0 0 25 8" fill="none">
                            <path d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z" fill="white"/>
                        </svg>
                        }
                        text='Get Started'
                    />
                    <Button
                        className="hover:border ml-3 hover:border-black  transition-all "
                        reversed
                        text='Watch Video'
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                                <circle cx="14.5" cy="14.5" r="14" stroke="black"/>
                                <path d="M11 19.0809V9.91907C11 9.52282 11.4389 9.28402 11.7716 9.49929L18.8512 14.0802C19.1557 14.2772 19.1557 14.7228 18.8512 14.9198L11.7716 19.5007C11.4389 19.716 11 19.4772 11 19.0809Z" fill="black" stroke="black"/>
                            </svg>}
                    
                    />
                </div>
                <div className="mt-[3em]">
                    <img src={assets.award} width='500' />
                </div>
            </div>


            <div className="flex w-full  p-[3em] ">
                <div className="flex relative w-full">
                    <img
                        className='z-30 absolute'
                        src={assets.iphone1}
                        width='300'
                    />
                    <img
                        className="z-20 absolute m-[4.81em] left-[5.66em]"
                        src={assets.iphone2}
                        width='300'

                    />
                    <img
                        className='absolute hidden md:flex m-[9.73em] left-[9.66em]'
                        src={assets.iphone1}
                        width='300'

                    />
                </div>

            </div>
        </div>
    )
}

export default Hero
