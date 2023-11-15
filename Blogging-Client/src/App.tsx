import { Box } from '@mui/material'
import NavBar from './component/organisms/NavBar'
import HomePage from './Pages/HomePage/HomePage'
import { FC } from 'react'

const App: FC = () => {
  return (
    <Box>
      <NavBar />
      <HomePage />
    </Box>
  )
}

export default App
