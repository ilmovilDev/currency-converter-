import { Grid, InputAdornment, TextField } from '@mui/material'
import { useContext } from 'react'
import { CurrencyContext } from '../context/CurrencyContext'

export const InputAmount = () => {

  const { firstAmount, setFirstAmount } = useContext(CurrencyContext)

  return (
    <Grid
        item
        xs={12}
    >
        <TextField
          fullWidth
          value={ firstAmount }
          onChange={ e => setFirstAmount( e.target.value ) }
          label="Amount"
          placeholder='Enter the amount to convert'
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
    </Grid>
  )
}
