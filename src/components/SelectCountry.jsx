import { Autocomplete, Box, Grid, TextField } from '@mui/material'
import countries from '../data-base/countries.json'

export const SelectCountry = ({ value, setValue, label }) => {

  const dataCountries = countries.sort((a, b) => {
    if (a.label < b.label) {
      return -1;
    }
    if (a.label > b.label) {
      return 1;
    }
    return 0;
  });

  return (
    <Grid
        item
        xs={12} md={5}
    >
      <Autocomplete
        id={label}
        options={dataCountries}
        value={value}
        isOptionEqualToValue={(option, value) => option.code === value.code}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        disableClearable
        renderOption={(props, option) => (
          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            <img
              loading="lazy"
              width="20"
              src={option.flag}
              srcSet={option.flag}
              alt={`Icon country ${option.label}`}
            />
            {`${option.code} - ${option.label}`} 
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
          />
        )}
      />
    </Grid>
  )
}
