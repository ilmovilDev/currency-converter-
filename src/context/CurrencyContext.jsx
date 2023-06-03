import { createContext, useState } from "react"

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {

    const [fromCurrency, setFromCurrency] = useState({
      code: "USD",
      label: "United States",
      flag: "https://flagcdn.com/w320/us.png"
    });
    const [toCurrency, setToCurrency] = useState({
      code: "BRL",
      label: "Brazil",
      flag: "https://flagcdn.com/w320/br.png"
    });
    const [firstAmount, setFirstAmount] = useState(0);

    const value = {
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency,
        firstAmount,
        setFirstAmount
    }

  return (
    <CurrencyContext.Provider value={ value }>
        { children }
    </CurrencyContext.Provider>
  )
};

export default CurrencyProvider;
