import { useState, useEffect } from "react"
import PokeCard from "./PokeCard"
import { DotSpinner } from '@uiball/loaders'



export default function PokemonList({busqueda, setPokemonData, pokemonData, loading, infoPokemon, setUrl, nextUrl, prevUrl}) {
    
    
    return(
        <>
        <div className="card-list-pokemon container">

            {loading ? <><h2>Loading...</h2><DotSpinner/></> : pokemonData.map((pk, i)=>{
                return <button 
                className="card-pokemon" 
                key={pk.id} 
                onClick={()=>infoPokemon(pk)}>
                     <PokeCard
                key={pk.id}
                name={pk.name}
                id={pk.id}
                img={pk.sprites.front_default}
                />
                </button>
            })}
        </div>
        {!busqueda && <div className="btn-group">
                { prevUrl && <button onClick={()=>{
                    setPokemonData([])
                    setUrl(prevUrl)}}>Previous</button>}
                <button onClick={()=>{
                    setPokemonData([])
                    setUrl(nextUrl)}}>Next</button>
            </div>}
        </>
    )
}




<DotSpinner 
className="container-loader"
 size={40}
 speed={0.9} 
 color="black" 
/>






