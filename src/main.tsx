import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client' 
import App from './App.tsx'
import './index.css'

const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app/",
  cache: new InMemoryCache()
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  </StrictMode>,
)
