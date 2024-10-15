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
          }
        }
    }
}

export default function Pokemon({pokemon}: PokemonType){
    return (
        <div>
            {pokemon.name}
        </div>
    );
}