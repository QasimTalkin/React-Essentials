import React, { useEffect, useState } from "react";
import LoadingSpinner from "../Atom//LoadingSpinner";
import PokeCard from "./PokeCard";
const limit = 7;
const pokemonData = async (limit:any) => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit="+limit);
  const data = await response.json();
  return data.results;
};

export default function PokeGallery(props:any) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([ { name: "", id: "" } ]);
  const [tag, setTag] = useState("all");
  useEffect(() => { 
    setLoading(true);
   pokemonData(props.limit).then((data) => {
      setData(data);
      setLoading(false);
    });
  }, [props.limit]);
  return (
    <>
      {/* sample tailwinds card of pickchu pokemon from pokeApi, */}

      {loading ? (
        <LoadingSpinner/>
      ) : 
      (
        <div className="grid grid-cols-3 gap-5 p-10 bg-emerald-50">
          {data.map((pokemon: any, index: number) => (
            <PokeCard key={index} id={index + 1} setTag={setTag} tag={tag}/>
          ))}
        </div>
      )
      }
    
    </>
  );
}
