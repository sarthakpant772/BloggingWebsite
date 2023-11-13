import { Box, Typography } from '@mui/material'
import React from 'react'

interface NavProps {
  name: string
}

const NavButton = (props: NavProps) => {
  return (
    <Box sx={{ height: '2em', minWidth: '6em' }}>
      <button
        style={{
          background: 'none',
          borderRadius: '4px',
          borderWidth: '1px 4px 4px 1px',
          boxShadow:
            'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
        }}
      >
        <Typography variant="subtitle1">{props.name}</Typography>
      </button>
    </Box>
  )
}

export default NavButton
