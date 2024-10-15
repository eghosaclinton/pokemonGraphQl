type PokemonType = {
    pokemon: {
        id: string,
        name: string
        image: string,
        maxHP: number,
        maxCP: number,
        attacks: {
          special: {
            name: string,
            damage: number
          }[]
        }
    }
}

export default function Pokemon({pokemon}: PokemonType){
    return (
        <div className="pokemon">
            <div className="pokemon--name">
                <h3 className="bruh">{pokemon.name}</h3>
            </div>
            <div className="pokemon--meta">
                <span>{pokemon.maxHP}</span>
                <span>{pokemon.maxCP}</span>
            </div>
            <div className="pokemon--img">
                <img src={pokemon.image} alt={`Image of the ${pokemon.name} Pokemon`} />
            </div>
            <div className="pokemon--attacks">
                {pokemon.attacks.special.slice(0, 3).map(attack=>{
                    return <span key={`${attack.name}--${attack.damage}`}>{attack.name}</span>
                })}
            </div>
        </div>
    );
}