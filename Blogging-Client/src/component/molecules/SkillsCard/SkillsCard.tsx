import { Box, Typography } from '@mui/material'
import { imageName } from '../../../Constants/Image'
import SkillButton from '../../atoms/SkillButton'

const SkillsCard = () => {
  return (
    <Box
      sx={{
        marginTop: '0.5em',
        // minHeight: '15em',
        width: '99%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          borderRadius: '10px',
          borderTopWidth: '2px', // Different border widths for each side
          borderRightWidth: '8px',
          borderBottomWidth: '6px',
          borderLeftWidth: '2px',
          borderColor: 'black', // Border color
          borderStyle: 'solid',
          boxShadow:
            'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: '95%' }}>
          <Typography variant="subtitle1">
            Things that i talk about.........
          </Typography>
        </Box>
        <Box
          sx={{
            minHeight: '15em',
            minWidth: '95%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
          }}
        >
          {imageName.map((imgName) => (
            <SkillButton name={imgName} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default SkillsCard
