import { Box } from '@mui/material'
import { FC } from 'react'
import SkillsCard from '../../component/molecules/SkillsCard'
import SocialCard from '../../component/molecules/SocialCard'
import ShowSingleBlog from '../../component/organisms/ShowSingleBlog/ShowSingleBlog'

const HomePage: FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-evenly'
        // alignItems: 'center',
      }}
    >
      {/* left */}
      <Box sx={{width: '15%',
          height: '100%',
          display: {xs:'none' ,lg:'flex'},
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',}}>
        <SocialCard/>
      </Box>
      {/* middle */}
      <Box
        sx={{
          overflow:'hidden',
          width: { xs:'100%', lg:'60%' , },
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          overflowY: 'scroll',
          height: '90vh',
          '&::-webkit-scrollbar': {
            display: 'none', // Hide scrollbar
          },
        }}
      >
        <ShowSingleBlog/>
      </Box>
      {/* right */}
      <Box
        sx={{
          width: '15%',
          height: '100%',
          display: {xs:'none' ,lg:'flex'},
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
