import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import paypal from "../src/assets/logos/paypal-logo.svg";
import citizens from "../src/assets/logos/citizens.svg";
import citibank from "../src/assets/logos/citibank.svg";
import wells from "../src/assets/logos/wellsfargo.svg";
import union from "../src/assets/logos/union.svg";
import pnc from "../src/assets/logos/pnc.svg";
import hsbc from "../src/assets/logos/hsbc.svg";
import bbva from "../src/assets/logos/bbva.svg";
import boa from "../src/assets/logos/bankamerica.svg";
import amex from "../src/assets/logos/americaexpress.svg";
import chime from "../src/assets/logos/chime-1.svg";
import region from "../src/assets/logos/reg.svg";

import chase from "../src/assets/logos/chase.svg";
import { useState } from "react";




const datas = [
  {
    id: 1,
    name: "paypal",
    logo: paypal,
  },
  {
    id: 2,
    name: "chime",
    logo: chime,
  },
  {
    id: 3,
    name: "region",
    logo: region,
  },
  
  {
    id: 4,
    name: "chase",
    logo: chase,
  },
  {
    id: 5,
    name: "boa",
    logo: boa,
  },
  {
    id: 6,
    name: "bbva",
    logo: bbva,
  },
  {
    id: 7,
    name: "wells fargo",
    logo: wells,
  },
  {
    id: 8,
    name: "hsbc",
    logo: hsbc,
  },
  {
    id: 9,
    name: "citizens",
    logo: citizens,
  },
  {
    id: 10,
    name: "citibank",
    logo: citibank,
  },
  {
    id: 11,
    name: "pnc",
    logo: pnc,
  },
  {
    id: 12,
    name: "america express",
    logo: amex,
  },
  {
    id: 13,
    name: "union bank",
    logo: union,
  },
  {
     id: 14,
    name: "chase",
    logo: chase,
  },
];

export const Search = () => {
  const [search, setSearch] = useState()


  const filteredBanks = datas.filter((data) => data.name.toLowerCase().includes(search?.toLowerCase() || "")
  )
  return (
    <div className="bg-gray-100">
      <div>
        <Navbar />
      </div>
      <div className="px-4 md:px-8">
        <h1 className="text-lg font-semibold md:text-2xl">Select your institution</h1>

        <div className="mt-4 relative">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded-lg px-10 text-xl  md:outline-amber-400 "
          />
          <p className="absolute top-2  left-2 text-xl ">🔎</p>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2 ">
          
          {filteredBanks.map((data, id) => (
            <Link
              key={id}
              to="/register"
              state={data}
              className="border border-gray-300 text-center flex items-center justify-center p-2  rounded-xl text-lg cursor-pointer uppercase hover:px-4 hover:py-3  hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <img src={data.logo} width={80} height={80} alt={data.name} className="md:w-40" /> 
            </Link>
          ))}
        </div>
      
      </div>
    </div>
  );
};
