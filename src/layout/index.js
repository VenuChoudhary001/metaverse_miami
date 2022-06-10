import React from 'react'
import Footer from '../components/Footer';
import { motion } from "framer-motion";
export const GLOBAL_CONTEXT=React.createContext();

const Layout = ({children}) => {
     const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
     const [mouseVariant, setMouseVariant] = React.useState("hover");

     const textEnter = () => {
       setMouseVariant("textEnter");
     };
     const textLeave = () => {
       setMouseVariant("hover");
     };

     const variant = {
       hover: {
         x: mousePosition.x - 16,
         y: mousePosition.y - 16,
         backgroundColor: "rgba(0 0 0 / 0.25)",
         border: "1px solid #EEB54E",
       },
       textEnter: {
         height: 150,
         width: 150,
         x: mousePosition.x - 75,
         y: mousePosition.y - 75,
         backgroundColor: "#EEB54E",
         mixBlendMode: "difference",
       },
     };

     React.useEffect(() => {
       window.addEventListener("mousemove", (e) => {
         setMousePosition({
           x: e.clientX,
           y: e.clientY,
         });
       });
       return () => {
         window.removeEventListener("mousemove", () => {});
       };
     }, []);
  return (
    <>
      <motion.div
        variants={variant}
        animate={mouseVariant}
        className="cursor"
      />
      <GLOBAL_CONTEXT.Provider value={{ magic: textEnter, noMagic: textLeave }}>
        <section className="grid text-white font-urban bg-black grid-rows auto-rows-auto gap-12">
          {children}
          <Footer />
        </section>
      </GLOBAL_CONTEXT.Provider>
    </>
  );
}

export default Layout