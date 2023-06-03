import { Grid, InputAdornment, TextField } from '@mui/material'
import { useContext } from 'react'
import { CurrencyContext } from '../context/CurrencyContext'

export const InputAmount = () => {

  const { firstAmount, setFirstAmount } = useContext(CurrencyContext)

  function handleInput(e) {
    if (!isNaN(e.target.value)) {
      setFirstAmount(e.target.value)
    }
  }

  return (
    <Grid
        item
        xs={12}
    >
        <TextField
          fullWidth
          value={ firstAmount }
          onChange={ handleInput }
          label="Amount"
          placeholder='Enter the amount to convert'
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
    </Grid>
  )
}
