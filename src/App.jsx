import { useCallback, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CurrencyContext } from './context/CurrencyContext';
import { Container, Grid, Skeleton, Typography } from '@mui/material';
import { Header, InputAmount, SelectCountry, SwitchCurrency } from './components';
import { Text, MainContainer, InputContainer } from './style-components';

const containerStyles = {
  minHeight: '100vh',
  display: 'flex',
  placeItems: 'center',
  position: 'relative'
};

const App = () => {

  const {
    fromCurrency, fromCurrency: { code: codeFromCurrency, label: labelFromCurrency, flag: flagFromCurrency },
    toCurrency, toCurrency: { code: codeToCurrency, label: labelToCurrency, flag: flagToCurrency },
    setFromCurrency,setToCurrency, firstAmount
  } = useContext(CurrencyContext);

  const [isLoading, setIsLoading] = useState(false);
  const [resultCurrency, setResultCurrency] = useState(0);
  const [hasError, setHasError] = useState(null);

  const fetchCurrencyConversion = useCallback(async (codeFrom, codeTo) => {
    try {
      setIsLoading(true);
      const response = await axios.get("https://api.freecurrencyapi.com/v1/latest", {
        params: {
          apikey: import.meta.env.VITE_API_KEY,
          base_currency: codeFrom,
          currencies: codeTo
        }
      });
      setResultCurrency(response.data.data[codeTo]);
      setHasError(null);
      setIsLoading(false);
    } catch (error) {
      setHasError('No result for this pair');
    }
  }, []);

  useEffect(() => {
    if (firstAmount) {
      fetchCurrencyConversion(codeFromCurrency, codeToCurrency);
    }
  }, [firstAmount, codeFromCurrency, codeToCurrency]);

  const renderCurrencyConversion = () => {

    // Si firstAmount es === '' retornar null
    if (!firstAmount) {
      return null;
    }

    // Caso algun error en la peticion, montar algun mensage en pantalla
    if (hasError) {
      return (
        <Typography 
          variant='h7' 
          sx={{ 
            letterSpacing: 1.5,
            color: "#d90429"
          }}
        >
          {hasError}
        </Typography>
      );
    }

    if (fromCurrency && toCurrency) {
      const convertedAmount = (resultCurrency * firstAmount).toFixed(2);
      return (
        <Grid 
          container
          gap={{
            xs: 1.5,
            md: 0
          }}
        >
          {
            !isLoading ?
            
              <InputContainer>
                <Text>From:</Text>
                <Text>{firstAmount}</Text>
                <img 
                  src={flagFromCurrency} 
                  alt={`country flag ${ labelFromCurrency }`} 
                  style={{ width: 26, height: 20 }} 
                />
                <Text>{`${codeFromCurrency} - ${labelFromCurrency}`}</Text>
              </InputContainer> : 

              // Loading animation
              <InputContainer>
                <Skeleton variant="rectangular" width='90%' height={35} />
              </InputContainer>

          }

          {
            !isLoading ?

              <InputContainer>
                <Text>To:</Text>
                <Text>{convertedAmount}</Text>
                <img 
                  src={flagToCurrency} 
                  alt={`country flag ${ labelToCurrency }`} 
                  style={{ width: 26, height: 20 }} 
                />
                <Text>{`${codeToCurrency} - ${labelToCurrency}`}</Text>
              </InputContainer> : 

              // Loading animation
              <InputContainer>
                <Skeleton variant="rectangular" width='90%' height={35} />
              </InputContainer>

          }

        </Grid>
      );
    }

    return (
      <Text>
        Enter some currency
      </Text>
    );

  };

  return (
    <Container 
      maxWidth='md' 
      sx={containerStyles}
    >

      <MainContainer>

        <Header/>

        <InputAmount />

        <SelectCountry value={fromCurrency} setValue={setFromCurrency} label='From' />
        
        <SwitchCurrency />

        <SelectCountry value={toCurrency} setValue={setToCurrency} label='To' />

        <Grid item xs={12}>
          {renderCurrencyConversion()}
        </Grid>

      </MainContainer>

    </Container>
  );
};

export default App;

