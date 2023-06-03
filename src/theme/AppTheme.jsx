import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#505050'
        }
    }
})

const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            { children }
        </ThemeProvider>
    )
}

export default AppTheme;