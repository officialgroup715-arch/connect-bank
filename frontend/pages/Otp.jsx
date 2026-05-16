import { Navbar } from "../components/Navbar"


export const Otp = () => {
  return (
    <div>
        <Navbar/>
         <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-3xl p-1 border border-green-300 shadow shadow-green-500   bg-gray-200 rounded-full">
          🙍‍♀️
        </h1>
        <div className="mt-4 space-y-2">
            <h1 className="text-center font-bold text-xl">Verify your phone number</h1>
            <p className="text-center font-semibold text-gray-400">Enter the code sent to your device.</p>
        </div>
        </div>


        <div>
           <div className="mx-4">
            <input type="text" placeholder="Code" className="border w-full px-4  mt-4 p-3
            font-bold text-gray-400 rounded-lg" />
            
           </div>
           <div className="mx-4 mt-4">
            <button className="border w-full bg-gray-800 text-gray-200 p-3 rounded-lg hover:bg-gray-900 cursor-pointer">Continue</button>
           </div>

        </div>



    </div>
  )
}
