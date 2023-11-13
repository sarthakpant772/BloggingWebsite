import { Box, Typography } from '@mui/material'
import React from 'react'

interface CardsDetails {
  readonly id?: string
  username: string
  title: string
  subContent: string
}

const Card = (props: CardsDetails) => {
  //   const navigate = useNavigate()
  
  // TODO add navigation to new page
  const handleClick = () => {
    console.log('err')
  }

  return (
    <Box
      sx={{
        marginTop: '0.5em',
        marginBottom: '0.5em',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button
        onClick={handleClick}
        style={{
          width: '100%',
          minHeight: '4em',
          minWidth: '7em',
          background: 'none',
          borderRadius: '10px',
          borderWidth: '1px 4px 4px 1px',
          boxShadow:
            'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: '90%', minHeight: '2em', display: 'flex' }}>
          <Typography variant="subtitle1">{props.username}</Typography>
        </Box>
        <Box sx={{ width: '90%', minHeight: '4em', display: 'flex' }}>
          <Typography variant="h4">{props.title}</Typography>
        </Box>
        <Box sx={{ width: '90%', minHeight: '6em', display: 'flex' }}>
          <Typography variant="subtitle2">{props.subContent}</Typography>
        </Box>
      </button>
    </Box>
  )
}

export default Card
