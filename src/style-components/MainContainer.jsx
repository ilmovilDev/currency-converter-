import { Grid } from '@mui/material'

export const MainContainer = ({ children }) => {
  return (
    <Grid
        component='main'
        container
        gap={2}
        sx={{
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Color de fondo con transparencia
          borderRadius: 1,
          boxShadow: 5,
          padding: 2,
        }}
    >
        { children }
    </Grid>
  )
}
