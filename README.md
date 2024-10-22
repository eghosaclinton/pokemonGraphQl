# PokeCards

A uselsss, but fun, project I did w/ Apollo/GraphQl(client) and React.js

First time using apollo, had fun

PokeCards are simply html containers displaying pokemon data gotten from a graphql server in a format similar to normal pokemon cards

Most of the inspiration came from a GraphQl course I took at [scrimba](https://v2.scrimba.com/build-an-app-with-react-and-graphql-c015)

Want what? 100 PokeCards? oh you have a favorite PokeCard? yeah we got you hahaha

The api used was [from the scrimba course](https://graphql-pokemon2.vercel.app/) and here are the queries I used:

```js
  query Query{
      pokemons(first: $num){
        id
        name
        image
        maxHP
        maxCP
        attacks {
          special {
            name
            damage
          }
        }
      }
    }
```
for quering multiple Pokemon Data and:

```js
  query Query{
    pokemon(name: ${name}){
		  id
      name
      image
      maxHP
      maxCP
      attacks {
        special {
          name
          damage
        }
      }
    }
  }
```
for querying just one Pokemon Data


Tech Stack:

- React.js
- React-router
- Typescript
- Apollo/GraphQl

<br>

[Check it out!](https://pokemon-graph-ql.vercel.app/)
