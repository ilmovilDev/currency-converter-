import { Typography } from "@mui/material"

export const Text = ({ children }) => {
    return(
        <Typography
            sx={{
                color: '#505050',
                letterSpacing: 0.5,
                fontWeight: 500,
                fontSize: {
                    xs: '18px',
                    md: '20px'
                }
            }}
        >
            { children }
        </Typography>
    )
}
