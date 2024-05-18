"use client";

// import Link from "next/link";

// const Navbar = () => {

//   return (
//     <>
//       <div className="bg-gray-800 px-4 py-2 flex justify-between items-center fixed top-0 z-50 w-full shadow-[0_0px_35px_-15px_rgba(255,255,255,0.3)]">
//         <Link href="/" className="text-gray-200">
//           ORDENA TUS IDEAS
//         </Link>
//         <input type="checkbox" id="menu" className="peer hidden" />
//         <label
//           htmlFor="menu"
//           className="bg-open-menu cursor-pointer w-12 h-10 bg-cover bg-center active:scale-95 peer-checked:bg-close-menu lg:hidden"
//         ></label>

//         <nav className="bg-gray-800 mx-0 fixed z-50 bg-opacity-95 text-gray-200 inset-0 translate-y-14 h-0 overflow-hidden lg:static lg:translate-y-0 lg:bg-transparent peer-checked:h-[100%] transition-height ease-in-out duration-300 lg:h-auto ">
//           <ul className=" flex flex-col cursor-pointer lg:flex-row ">
//             <Link
//               href="/inicio"
//               className="px-2 py-1 border-t-2 border-teal-400 hover:bg-gray-500 text-lg lg:border-none lg:hover:bg-transparent lg:hover:opacity-40"
//             >
//               Inicio
//             </Link>

//             <Link
//               href="/tasks"
//               className="px-2 py-1 border-t-2 border-teal-400 hover:bg-gray-500 text-lg lg:border-none lg:hover:bg-transparent lg:hover:opacity-40"
//             >
//               Tareas
//             </Link>

//             <Link
//               href="/contactanos"
//               className="px-2 py-1 border-t-2 border-b-2 border-teal-400 hover:bg-gray-500 text-lg lg:border-none lg:hover:bg-transparent lg:hover:opacity-40"
//             >
//               Contactanos
//             </Link>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// };

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleLinkClick = () => {
    setIsChecked(false);
  };

  return (
    <>
      <div className="bg-gray-800 px-4 py-2 flex justify-between items-center fixed top-0 z-50 w-full shadow-[0_0px_35px_-15px_rgba(255,255,255,0.3)]">
   
          <Link href="/" className="text-gray-200" onClick={handleLinkClick}>
            ORDENA TUS IDEAS
          </Link>

        <input
          type="checkbox"
          id="menu"
          className="peer hidden"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <label
          htmlFor="menu"
          className="bg-open-menu cursor-pointer w-12 h-10 bg-cover bg-center active:scale-95 peer-checked:bg-close-menu lg:hidden"
        ></label>

        <nav className="bg-gray-800 mx-0 fixed z-50 bg-opacity-95 text-gray-200 inset-0 translate-y-14 h-0 overflow-hidden lg:static lg:translate-y-0 lg:bg-transparent peer-checked:h-[100%] transition-height ease-in-out duration-300 lg:h-auto ">
          <ul className=" flex flex-col cursor-pointer lg:flex-row ">
            <Link
              href="/inicio"
              className="px-2 py-1 border-t-2 border-teal-400 hover:bg-gray-500 text-lg lg:border-none lg:hover:bg-transparent lg:hover:opacity-40"
              onClick={handleLinkClick}
            >
              Inicio
            </Link>

            <Link
              href="/tasks"
              className="px-2 py-1 border-t-2 border-teal-400 hover:bg-gray-500 text-lg lg:border-none lg:hover:bg-transparent lg:hover:opacity-40"
              onClick={handleLinkClick}
            >
              Tareas
            </Link>

            <Link
              href="/contactanos"
              className="px-2 py-1 border-t-2 border-b-2 border-teal-400 hover:bg-gray-500 text-lg lg:border-none lg:hover:bg-transparent lg:hover:opacity-40"
              onClick={handleLinkClick}
            >
              Contactanos
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
