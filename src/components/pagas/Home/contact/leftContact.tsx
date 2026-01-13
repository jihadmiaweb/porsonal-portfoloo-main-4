import { TbMessageForward } from "react-icons/tb"

function LeftContact() {
    return <>
        <div className="lg:w-[50%] mb-5 lg:mb-0">
            <form className="bg-[#0D1224] rounded-2xl p-8 border border-gray-600 text-white">

                <p className="text-[#DDD6FE] hidden sm:block text-[14px] mb-3">If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</p>
                <h5 className="text-[18px] mb-1.5">Your Name:</h5>
                <input
                    className="bg-[#10172D] w-full p-3 rounded-[5px]
             border border-gray-600
             focus:border-[#16F2B3] focus:ring-0.5 focus:ring-[#16F2B3]
             outline-none" type="text"
                />

                <h5 className="text-[18px] mb-1.5 mt-3">Your Email:</h5>
                <input
                    className="bg-[#10172D] w-full p-3 rounded-[5px]
             border border-gray-600
             focus:border-[#16F2B3] focus:ring-0.5 focus:ring-[#16F2B3]
             outline-none" type="email"
                />

                <h5 className="text-[18px] mb-1.5 mt-3">Your Message:</h5>
                <textarea
                    className="bg-[#10172D] w-full p-3 h-[130px] rounded-[5px]
             border border-gray-600
             focus:border-[#16F2B3] focus:ring-0.5 focus:ring-[#16F2B3]
             outline-none"
                />

                <div className="flex justify-center items-center">
                    <button className="flex gap-1.5 items-center mt-3 cursor-pointer uppercase px-4 py-2 sm:px-6 sm:py-3 md:px-6 md:py-3 lg:px-6 lg:py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#863BE6] to-[#E8489C]
                     hover:from-[#E8489C] hover:to-[#863BE6] hover-gap-3 
                     transition-all duration-300 transform hover:scale-x-105 origin-left">
                        Send Message <TbMessageForward className="text-[18px]" />
                    </button>
                </div>

            </form>
        </div>
    </>
}

export default LeftContact