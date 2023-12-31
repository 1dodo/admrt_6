import React from 'react'
import img1 from '../images/Playing music at party.svg'
import img2 from '../images/Buying a dog.png'
import img3 from '../images/Online advertising, social media marketing.svg'
import img4 from '../images/Colleagues discussing financial report 1.svg'
import img5 from '../images/Graphics.svg'
import img6 from '../images/Group 1000005650.svg'
import img7 from '../images/Group 35027.png'
import img8 from '../images/Group 35028.png'
import img9 from '../images/Group 35029.png'
import StickyNavbar from './Navbar'
import Footer from './Footer'



const About = () => {
    return (
        <>
        <div>
          <StickyNavbar/>
            <section class="about-container-1 px-2 py-32 bg-white md:px-0">
                <div class="container items-center max-w-6xl mx-auto xl:px-5">
                    <div class="flex flex-wrap items-center sm:-mx-3">
                        <div class="w-full md:w-1/2 md:px-3">
                            <div class="w-full  lg:max-w-lg  lg:space-y-8 xl:space-y-9 lg:pr-0 md:pb-0">
                                <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                    About AdMrt
                                </h1>
                                <p class="mx-auto mt-3 md:mt-0 text-base font-light opacity-70 md:text-lg md:max-w-3xl">Admrt is a platform that streamlines the ad buying and selling process. Admrt will introduce a way for brands, services, and corporations to connect with variety of advertising and marketing spaces. <br></br>AdMrt welcomes you to a new era of advertising simplicity. Easily connect with a variety of advertising spaces on the AdMrt platform, ensuring your message reaches the right audience with precision using the AdMrt platform. AdMrt simplifies the ad setup process, allowing you to quickly find ad spaces that fit your brand's targeted audience. Specializing in making usually inaccessible ad spaces accessible, AdMrt provides your brand with unique opportunities to reach new heights. Benefit from automated features that take care of complexities, making your AdMrt advertising experience seamless. Join AdMrt for a straightforward and successful approach to promoting your brand to a wider, more targeted audience. </p>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2">
                            <div class="w-full h-auto mt-8 md:mt-0 overflow-hidden rounded-md  sm:rounded-xl">
                                <img src={img1} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="about-container-2 w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
                <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl ">

                    <div class="w-full md:w-2/3">
                        <div class="box-border relative w-full    text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0  ">
                            <img src={img2} class="text-center" />
                        </div>
                    </div>

                    <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                        <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                            <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-5xl">
                                <span class="block xl:inline">Why we </span>
                                <span class="block text-indigo-600 xl:inline">Built </span>
                                this Platform
                            </h1>
                            <p class="mx-auto text-sm font-light opacity-70 text-[#12141d]  sm:max-w-md lg:text-lg md:max-w-3xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy.</p>

                        </div>
                    </div>

                </div>

            </section>
    
            <section class="about-container-2 w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
                <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl ">

                    <div class="w-full md:w-2/3">
                        <div class="box-border relative w-full    text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0  ">
                            <img src={img4} class="text-center" />
                        </div>
                    </div>

                    <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                        <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                            <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-5xl">
                                <span class="block xl:inline">The </span>
                                <span class="block text-red-500 xl:inline">Problem </span>
                                <span class="block xl:inline">and the </span>
                                <span class="block text-blue-700 xl:inline">solution </span>
                            </h1>
                            <p class="mx-auto text-sm font-light opacity-70 text-[#12141d]  sm:max-w-md lg:text-lg md:max-w-3xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy.</p>

                        </div>
                    </div>

                </div>

            </section>
            <section class="px-2 py-32 bg-white md:px-0">
                <div class="container items-center max-w-7xl mx-auto">
                    <div class="flex flex-wrap items-center sm:-mx-3">
                        <div class="text-center w-full md:w-1/2 md:px-3">

                            <div class="w-full pb-6 space-y-6  lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                <img className="inline" src={img5} />
                                <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-5xl">
                                    <span class="block xl:inline">Our </span>
                                    <span class="block text-indigo-600 xl:inline">Mission </span>
                                </h1>
                                <p class="mx-auto text-base font-light opacity-70 text-[#12141d] sm:max-w-md lg:text-xl md:max-w-3xl">We are a platform that streamlines the ad placement process. We seek to give companies and marketers a place to connect seamlessly all while redefining the marketing industry with our wide selection of purchasable ad spaces.</p>
                            </div>
                        </div>
                        <div class="text-center w-full md:w-1/2">
                            <div class="w-full pb-6 space-y-6  lg:max-w-xl md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                <img className="inline" src={img6} />
                                <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-5xl">
                                    <span class="block xl:inline">Humble </span>
                                    <span class="block text-indigo-600 xl:inline">Beginning </span>
                                </h1>
                                <p class="mx-auto text-base font-light opacity-70 text-[#12141d] sm:max-w-md lg:text-xl md:max-w-3xl">Before we came to be, options for posting advertisements online were limited at best. There were Google Ads and social media platforms, but no real hub for connecting fellow marketers. We banded together and came up with a solution that works for just about any advertiser.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="footer bg-[#F8FAFC]">
                <div class="container mx-auto py-8 w-full ">

                    <div class="flex flex-col text-center gap-4 mb-8 p-4">

                        <div class="text-purple-600 text-sm font-bold">
                            <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-5xl">
                                <span class="block xl:inline">Our </span>
                                <span class="block text-indigo-600 xl:inline">Team </span>
                            </h1>
                        </div>

                        <div class="mx-auto text-base font-light opacity-70 text-[#12141d] sm:max-w-md lg:text-xl md:max-w-3xl"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus facilisis dignissim iaculis vestibulum, vestibulum, at. Fermentum in tincidunt magna eu tellus.</p></div>

                    </div>

                    <div class="flex items-center justify-center flex-wrap gap-4 p-4">

                        <div class="card flex items-center justify-center flex-col w-full sm:w-72 h-full rounded-2xl">

                            <img src={img7} class="w-24 h-24 rounded-full object-cover transition duration-200 hover:scale-110" />

                            <div class="text-gray-900 text-lg font-medium">Jorge Doe</div>

                            <div class="text-neutral-500 text-base font-light">Creator</div>

                        </div>

                        <div class="card flex items-center justify-center flex-col w-full sm:w-72 h-full rounded-2xl">

                            <img src={img8} class="w-24 h-24 rounded-full object-cover transition duration-200 hover:scale-110" />

                            <div class="text-gray-900 text-lg font-medium ">Floran Jordan</div>

                            <div class="text-neutral-500 text-base font-light">Founder</div>

                        </div>

                        <div class="card flex items-center justify-center flex-col w-full sm:w-72 h-full rounded-2xl">

                            <img src={img7} class="w-24 h-24 rounded-full object-cover transition duration-200 hover:scale-110" />

                            <div class="text-gray-900 text-lg font-medium">Kelaksha</div>

                            <div class="text-neutral-500 text-base font-light">Chief-Technicians</div>

                        </div>

                        <div class="card flex items-center justify-center flex-col w-full sm:w-72 h-full rounded-2xl">

                            <img src={img9} class="w-24 h-24 rounded-full object-cover transition duration-200 hover:scale-110" />

                            <div class="text-gray-900 text-lg font-medium">John David</div>

                            <div class="text-neutral-500 text-base font-light">Engineering Manager</div>

                        </div>


                    </div>

                </div>
            </div>
            <Footer/>
        </div>

        </>
    )
}

export default About