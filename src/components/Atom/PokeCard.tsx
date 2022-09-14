import React, { useState, useEffect } from 'react';

type obj = {
  id: number
}
export default function PokeCard(props:obj) {
  let [pokemon, setPokemon] = useState<{sprites:any, name:string, moves:any}>({sprites:0, name:'', moves:''});
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        setLoading(true);
      });
  }, []);
  return (
    <>
    {loading && <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100">
          <img
            className="w-full"
            src={pokemon.sprites.other.dream_world.front_default}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{pokemon.name}</div>
          </div>
          <div className="px-6 pt-4 pb-2">
           {pokemon.moves.slice(0, 5).map((move:any) => <span key={move.move.name} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {move.move.name}
            </span>
           )}
         </div>
        </div>}
    </>
  );
}
