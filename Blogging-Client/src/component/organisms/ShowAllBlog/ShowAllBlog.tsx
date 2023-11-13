import { Box } from '@mui/material'
import React from 'react'
import Card from '../../molecules/Card'

const dataset = [
  {
    username: 'string',
    title: 'string',
    subContent: 'string',
  },
  {
    username: 'string',
    title: 'string',
    subContent: 'string',
  },
  {
    username: 'string',
    title: 'string',
    subContent: 'string',
  },
]
const ShowAllBlog = () => {
  return (
    <Box
      sx={{
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {dataset.map((data) => (
        <Card {...data} />
      ))}
    </Box>
  )
}

export default ShowAllBlog
