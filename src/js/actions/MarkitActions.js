
import Types from './Types'

const requestQuote = (symbol, timeframe="oneDay") =>
  ({
    type: Types.MKT_QUOTE_REQUEST,
    endPoint: '/index/205778',
    params: {timeframe},
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
