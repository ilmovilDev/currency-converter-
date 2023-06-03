import { Grid } from "@mui/material"

export const InputContainer = ({ children }) => {
    return (
        <Grid
            item
            xs={12} md={6}
            sx={{ 
                display:'flex', 
                justifyContent:{
                    xs: 'start',
                    md: 'center'
                }, 
                alignItems:'center', 
                gap: 1.5 
            }}
        >
            { children }
        </Grid>
    )
}
