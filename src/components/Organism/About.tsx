import React from "react";
import PokeGallery from "../Molecule/PokeGallery";
export default function About() {
  return (
    // give section some padding and background color
    <section className="bg-gray-50 px-10">    
          <h1 className="text-3xl font-bold underline text-center">
      Welcome    </h1>
      <PokeGallery />
      {/* <img
        src="https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80"
        style={{ width: "100%" }}
        alt="cover pic"
        id="cover-pic"
      /> */}
    </section>
  );
}
