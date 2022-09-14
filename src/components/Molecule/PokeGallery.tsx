import React, { useEffect, useState } from "react";
import PokeCard from "../Atom/PokeCard";

const pokemonData = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await response.json();
  return data.results;
};

let loadingAnimation = (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
  </div>
);

export default function PokeGallery() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([ { name: "", id: "" } ]);
  
  useEffect(() => { 
    pokemonData().then((data) => { 
      setData(data);
      console.log(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {/* sample tailwinds card of pickchu pokemon from pokeApi, */}

      {loading ? (
        loadingAnimation
      ) : 
      (
        <div className="grid grid-cols-3 gap-5 p-10 bg-gray-50">
          {data.map((pokemon: any, index: number) => (
            <PokeCard key={index} id={index + 1} />
          ))}
        </div>
      )
      }
    
    </>
  );
}
