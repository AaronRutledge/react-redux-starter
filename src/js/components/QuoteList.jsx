import React from 'react'

const QuoteList = (props) =>
  <dl>
    <dt>Market Cap</dt>
    <dd>{props.quote.marketCap}</dd>
    <dt>Last Price</dt>
    <dd>{props.quote.priceLast}</dd>
    <dt>High</dt>
    <dd>{props.quote.priceDayHigh}</dd>
    <dt>Low</dt>
    <dd>{props.quote.priceDayLow}</dd>
  </dl>

export default QuoteList
