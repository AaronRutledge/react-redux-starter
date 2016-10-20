
import Types from './Types'

const requestQuote = (symbol, exchange="NYS") =>
  ({
    type: Types.MKT_QUOTE_REQUEST,
    endPoint: 'Quote/json',
    params: {symbol, exchange},
    symbol: symbol,
    ajaxType: "GET",
    onSuccess: receiveQuote
  })

const receiveQuote = (quote) =>
  ({ type: Types.MKT_QUOTE_RECEIVE,
    quote
  })

const receiveMarkitApiFailure= () =>
  ({ type: Types.MKT_API_FAILURE })

export {
  requestQuote,
  receiveQuote,
  receiveMarkitApiFailure
}
