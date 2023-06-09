import { Typography } from "@mui/material"

export const Title = ({ children }) => {
    return(
        <Typography
            sx={{
                color: '#505050',
                letterSpacing: 2,
                fontWeight: 500,
                fontSize: {
                    xs: '18px',
                    md: '22px',
                    lg: '26px'
                }
            }}
        >
            { children }
        </Typography>
    )
}
