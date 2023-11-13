import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { images } from '../../../Constants/Image'

interface SkillProps {
  name: string
}

const SkillButton: FC<SkillProps> = (props) => {
  return (
    <Box
      sx={{
        width: '7em',
        height: '3em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <button
        style={{
          height: '90%',
          display: 'flex',
          background: 'none',
          borderRadius: '4px',
          borderWidth: '1px 4px 4px 1px',
          boxShadow:
            'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src={images[props.name]}
          sx={{ height: 'inherit' }}
        />
        <Typography variant="subtitle1">{props.name}</Typography>
      </button>
    </Box>
  )
}

export default SkillButton
