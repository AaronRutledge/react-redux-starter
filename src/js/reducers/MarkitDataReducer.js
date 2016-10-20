import Types from '../actions/Types'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = {
  symbol: 'TSLA',
  quote: {},
  fetching: null,
  error: null
}

const requestQuote = (state, action) =>
  Object.assign({}, state, {
    fetching: true,
    name: action.name,
    quote: {},
    symbol: action.symbol
  })

const receiveQuote = (state, action) =>
  Object.assign({}, state, {
    fetching: false,
    error: null,
    quote: action.quote
  })


const failure = (state, action) =>
  Object.assign({}, state, {
    fetching: false,
    error: true,
    quote: null
  })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.MKT_QUOTE_REQUEST]: requestQuote,
  [Types.MKT_QUOTE_RECEIVE]: receiveQuote,
  [Types.MKT_QUOTE_RECEIVE_FAILURE]: failure
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
