import { ApolloProvider } from '@apollo/client'
import client from 'config/apollo-client'
import Routes from './routes'

import { GlobalStyle } from './style-guide/GlobalStyle'

const App = () => (
  <>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Routes />
    </ApolloProvider>
  </>
)

export default App
