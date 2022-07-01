import { useState } from 'react'
import Login from './components/Login'
import { Box } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box bg={'#011627'} w='100%' height='100vh' display='flex' alignItems='center' justifyContent='center' >
      <Login />
    </Box>
  )
}

export default App
