import { Box } from '@mui/material'
import { FC } from 'react'
import ShowAllBlog from '../../component/organisms/ShowAllBlog'
import SkillsCard from '../../component/molecules/SkillsCard'

const HomePage: FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'center',
      }}
    >
      {/* left */}
      <Box sx={{ width: '20%' }}></Box>
      {/* middle */}
      <Box
        sx={{
          width: '60%',
          overflowY: 'scroll',
          height: '90vh',
          '&::-webkit-scrollbar': {
            display: 'none', // Hide scrollbar
          },
        }}
      >
        <ShowAllBlog />
      </Box>
      {/* right */}
      <Box
        sx={{
          width: '20%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <SkillsCard />
      </Box>
    </Box>
  )
}

export default HomePage
