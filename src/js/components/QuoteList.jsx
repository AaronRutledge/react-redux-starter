import React from 'react'

const QuoteList = (props) =>
  <dl>
    <dt>Name</dt>
    <dd>{props.quote.Name}</dd>
    <dt>Last Price</dt>
    <dd>{props.quote.LastPrice}</dd>
    <dt>High</dt>
    <dd>{props.quote.High}</dd>
    <dt>Low</dt>
    <dd>{props.quote.Low}</dd>
  </dl>

export default QuoteList
