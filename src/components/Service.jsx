import NavBar from "./NavBar";

const Service = () => {
    return (
        <>
        <NavBar />
        <div className="h-screen w-screen flex flex-col items-center sm:mb-10 bg-gradient-to-b from-blue-300 to-violet-300 overflow-auto">
            <div className="mt-8 gap-4 grid grid-cols-1">
                <div className="bg-white rounded-lg shadow-lg p-6 m-6 flex flex-col md:mx-96">
                    <img src="suvaraprashan.png" alt="yoga" className="h-48 md:h-96 md:w-96 mx-auto" />
                    <div className="p-2 items-center justify-center md:m-8 md:text-2xl font-bold">
                        Swarna Prasan is an Ayurvedic Medicine given on Pushya Nakshatra to improve physical, mental and intellectual health of children age 1-16 year it boost up immune system.
                    </div>

                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 m-6 md:mx-96 flex flex-col items-center justify-center">
                    <img src="yoga.png" alt="yoga" className="h-96 w-96 mx-auto" />
                    <div className="p-2 flex flex-col items-center justify-center">
                        <h1 className="text-2xl font-bold text-4xl mb-2">Ayurveda</h1>
                        <span className="text-red-500 font-bold text-xl md:text-3xl">There is a Power</span>
                        <span className="text-xl text-blue-800 font-bold mb-2">That will light your way to</span>
                        <ul className="list-disc pl-5">
                            <li className="mb-2 text-red-600 font-bold">HEALTH</li>
                            <li className="mb-2  text-red-600 font-bold">HAPPINESS</li>
                            <li className="mb-2 text-red-600 font-bold">PEACE &</li>
                            <li className="mb-2 text-red-600 font-bold">SUCCESS</li>
                        </ul>
                        <div className="flex flex-col items-center justify-center">
                        <span className="text-xl text-blue-700 font-bold text-center">But if you will Turn Towards that "Light"</span>
                        </div>
                        
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 m-6 md:mx-96">
                    <img src="arhamGarb.jpeg" alt="yoga" className="h-96 w-96 mx-auto" />
                    <div className="flex flex-col items-center justify-center mb-3">
                        <span className="text-green-500">ARHAM GARBH SADHANA</span>
                        <span className="text-green-500">(Since 1996)</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <span className="bg-green-800 text-white mb-2">Create an incredible being in the womb</span>
                        <span className="text-green-600">Planning | Pregnancy | Delivery</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Service;
