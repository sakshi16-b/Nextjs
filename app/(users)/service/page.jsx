import Image from "next/image";
import style from "./service.module.css"
import placeholder from "@/public/placeholder.jpg"

export const metadata={
    title:"Service Page",
    description:"Service Page of my website",
    authors:[{name:'sakshi'},{name:"sakshibisht"}],
    keywords:['nextjs','reactjs','fullstack','frontend']
}

const Services = async () => {
    return (
        <>
            <h1 className={style.common_heading}>Hello Services</h1>
            <section>
                <h1 className='font-bold text-center'>Our Team</h1>
                <div className='grid grid-cols-3 gap-8'>
                    {/* Team Member 1---- */}
                    <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-2 
                     transition-all duration-300'>
                        <div className='w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex justify-center items-center'>
                            <Image src="/placeholder.jpg"
                                alt="placeholder"
                                width={500}
                                height={500}
                                className="w-full h-full rounded-full" />


                        </div>
                        <h3 className='text-lg font-semibold text-center text-gray-800'>Sakshi Bisht</h3>
                        <p className='text-sm text-gray-600 text-center mt-2'>Frontend Developer</p>
                        <p className='text-sm text-gray-500 text-center mt-1'>React & Typescript</p>
                    </div>
                    {/* Team Member 2---- */}

                    <div className='bg-white rounded-lg shadow-md  hover:shadow-lg hover:translate-y-2 
   transition-all duration-300'>
                        <div className='w-full h-full relative bg-blue-200 rounded-full mx-auto mb-4 flex justify-center items-center'>
                            <Image src="/placeholder.jpg"
                                alt="placeholder"
                                placeholder="blur"
                                blurDataURL="placeholder.jpg"
                                fill={true}
                            />

                        </div>
                        <h3 className='text-lg font-semibold text-center text-gray-800'>Sakshi Bisht</h3>
                        <p className='text-sm text-gray-600 text-center mt-2'>Frontend Developer</p>
                        <p className='text-sm text-gray-500 text-center mt-1'>React & Typescript</p>

                    </div>


                    <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-2 
   transition-all duration-300'>
                        <div className='w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex justify-center items-center'>
                            <span className='text-2xl font-bold text-purple-600'>TT</span>
                        </div>
                        <h3 className='text-lg font-semibold text-center text-gray-800'>Sakshi Bisht</h3>
                        <p className='text-sm text-gray-600 text-center mt-2'>Frontend Developer</p>
                        <p className='text-sm text-gray-500 text-center mt-1'>React & Typescript</p>
                    </div>

                    <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-2 
   transition-all duration-300'>
                        <div className='w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex justify-center items-center'>
                            <span className='text-2xl font-bold text-purple-600'>TT</span>
                        </div>
                        <h3 className='text-lg font-semibold text-center text-gray-800'>Sakshi Bisht</h3>
                        <p className='text-sm text-gray-600 text-center mt-2'>Frontend Developer</p>
                        <p className='text-sm text-gray-500 text-center mt-1'>React & Typescript</p>
                    </div>


                    <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-2 
   transition-all duration-300'>
                        <div className='w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex justify-center items-center'>
                            <span className='text-2xl font-bold text-purple-600'>TT</span>
                        </div>
                        <h3 className='text-lg font-semibold text-center text-gray-800'>Sakshi Bisht</h3>
                        <p className='text-sm text-gray-600 text-center mt-2'>Frontend Developer</p>
                        <p className='text-sm text-gray-500 text-center mt-1'>React & Typescript</p>
                    </div>


                    <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-2 
   transition-all duration-300'>
                        <div className='w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex justify-center items-center'>
                            <span className='text-2xl font-bold text-purple-600'>TT</span>
                        </div>
                        <h3 className='text-lg font-semibold text-center text-gray-800'>Sakshi Bisht</h3>
                        <p className='text-sm text-gray-600 text-center mt-2'>Frontend Developer</p>
                        <p className='text-sm text-gray-500 text-center mt-1'>React & Typescript</p>


                    </div>

                </div>
            </section>
        </>
    )
}

export default Services;