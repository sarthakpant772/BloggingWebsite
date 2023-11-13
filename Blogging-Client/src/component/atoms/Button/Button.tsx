import { Box, Typography } from '@mui/material'

interface Props {
  ButtonName: string
  ButtonFunction: () => void
}

const Button = (props: Props) => {
  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <button
        style={{
          // height: '100%',
          // width: '100%',
          minHeight: '4em',
          minWidth: '7em',
          background: 'none',
          borderRadius: '10px',
          borderWidth: '1px 4px 4px 1px',
          boxShadow:
            'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
        }}
        onClick={() => props.ButtonFunction()}
      >
        <Typography variant="subtitle1">{props.ButtonName}</Typography>
      </button>
    </Box>
  )
}

export default Button
