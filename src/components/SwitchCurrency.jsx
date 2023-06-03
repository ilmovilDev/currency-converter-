import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";
import { Grid, IconButton } from "@mui/material"

import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

export const SwitchCurrency = () => {

  const { fromCurrency, setFromCurrency, toCurrency, setToCurrency } = useContext(CurrencyContext)

  function handleSwitch() {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  return (
    <Grid
      item
      xs={12} md={1.5}
      sx={{
        display: 'flex',
        justifyContent: {
          xs: 'start',
          md: 'center'
        },
        alignItems: 'center',
      }}
    >
      <IconButton
        onClick={handleSwitch}
      >
        <CompareArrowsIcon
          fontSize="large"
          sx={{
            transform: {
              xs: 'rotate(90deg)',
              md: 'none'
            },
            color: '#505050'
          }}
        />
      </IconButton>
    </Grid>
  )
}
