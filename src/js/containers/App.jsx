import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import QuoteList from '../components/QuoteList'
import {requestQuote} from '../actions/MarkitActions'

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      enteredSymbol: props.symbol
    };
    this.onClickQuote = this.onClickQuote.bind(this);
    this.handleSymbolUpdate = this.handleSymbolUpdate.bind(this);
  }

  componentWillMount() {
    this.props.requestQuote(this.props.symbol);
  }

  onClickQuote() {
    this.props.requestQuote(this.state.enteredSymbol);
  }

  handleSymbolUpdate(e) {
    this.setState({enteredSymbol: e.target.value});
  }

  render () {

    const { symbol } = this.props;
    return (
      <div>
        <input type="text" onChange={this.handleSymbolUpdate}/>
        <button onClick={this.onClickQuote}>Make Quote Call</button>
        <h1>{symbol.toUpperCase()}</h1>
        <QuoteList quote={this.props.quote}/>
      </div>
    );
  }
}

App.propTypes = {
  symbol: PropTypes.string.isRequired,
  quote: PropTypes.object.isRequired,
  requestQuote: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    symbol: state.markitData.symbol,
    quote: state.markitData.quote
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestQuote: (symbol) => dispatch(requestQuote(symbol))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

