import { createTheme } from '@mui/material'
import { Font } from './Fonts'

export const theme = createTheme({
  typography: {
    fontFamily: Font.REGULAR,
    subtitle1: {
      fontWeight: '700',
    },
    subtitle2: {
      fontWeight: '400',
    },
    h4: {
      fontFamily: Font.TITLE,
    },
  },
  palette: {
    primary: {
      main: '#000000',
      light: '#fffff',
    },
  },
})
