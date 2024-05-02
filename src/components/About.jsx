import NavBar from "./NavBar";



const About = () => {
    return (
        <>
            <NavBar />
            <div className="h-screen w-screen bg-gradient-to-b from-red-300 to-blue-300 overflow-auto">
                <div className="py-4">
                    <div className="flex flex-col justify-center items-center my-2">
                        <span className="text-4xl">Dr. Pooja Surana</span>
                        <span className="text-2xl">BAMS(Ayurveda)</span>
                        <span className="text-center text-2xl">Self-Care by Ayurveda Through Self Realization</span>
                        <span className="text-xl text-center">Routine Work | Activity | Diet Plan | Meditation</span>
                        <span className="text-3xl text-center text-green-800">Arham Garbh Sadhana</span>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center text-bold">
                    
                </div>
                <div className="flex items-center justify-center mt-4">
                    <img src="/yoga.png" alt="yoga" className="w-full h-auto lg:w-[500px] lg:h-[500px]"></img>
                </div>
                <div className="flex items-center justify-center mt-4 text-4xl flex flex-col">
                    <span>ARIHANT CLINIC</span>
                </div>
                <div className="flex items-center justify-center text-4xl flex flex-col mb-3">
                    <span className="m-4 text-center">Lalganga Business Park 315</span>
                </div>

                
            </div>

        </>
        
    );
}

export default About;