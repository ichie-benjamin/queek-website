
function DetailsHero() {
    return (
        <div>
            <div className="h-[40vh] sm:h-[50vh] md:h-[60vh] bg-cover relative -z-10 rider-bg">

                <div
                    className="absolute h-full w-full text-xl sm:text-2xl md:text-3xl
                    font-bold text-white justify-center
                    flex items-end bg-gray-800 opacity-80">
                    <div className=" mb-6 sm:mb-14 md:mb-20">

                        <div className=" text-center">
                            <h2 className="text-center mt-24">Join Queek as a Dispatch rider
                            </h2>
                        </div>
                        <div className="py-4 space-y-2 sm:space-y-0 grid sm:flex items-center mx-auto justify-center space-x-4 px-1">

                            <button
                                className="border group border-gray-200 rounded-3xl text-xs py-1 px-4 hover:bg-[#1E3050] ">Full
                                Time / Part time
                            </button>

                            <h6 className="text-sm font-bold ">
                                Delivery persons, dispatch riders (Port Harcourt)</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsHero
