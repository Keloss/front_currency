import { useState } from "react"
import { Currency, currencies } from "./currency.data"

const API_URL = 'https://open.er-api.com/v6/latest/'

const useConvert = () => {
    const [exchangeRates, setExchangeRates] = useState<ExchangeRate[] | null>(null)

    const getTickers = (baseCurrency: Currency) =>
        currencies.filter(currency => currency != baseCurrency)



}