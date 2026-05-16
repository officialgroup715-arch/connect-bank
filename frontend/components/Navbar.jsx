import { Link } from "react-router-dom"
import plaid from "../src/public/Plaid.svg"


export const Navbar = () => {
  return (
    <div className="p-5  flex justify-between">
      <Link to="/search" className="text-4xl font-bold ">←</Link>
      <div className="  ">
      
      <img src={plaid} width={60} height={60} alt="plaid" className="md:w-18 " />
      </div>
      <Link to="/" className="text-4xl font-semibold ">×</Link>
    </div>
  )
}
