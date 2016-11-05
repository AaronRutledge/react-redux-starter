
import Types from './Types'
// /example/index/{symbol}
// /example/index/{symbol}/chart
// /example/lookup/{search}
// /example/quote/{symbol}

const requestIndex = (symbol) =>
  ({
    type: Types.API_REQUEST_INDEX,
    endPoint: `endex/index/{$symbol}`,
    params: {},
    ajaxType: "GET",
    onSuccess: receiveIndex
  })

const receiveIndex = (index) =>
  ({ type: Types.API_RECEIVE_INDEX,
    index
  })

const receiveApiFailure= () =>
  ({ type: Types.MKT_API_FAILURE })

export {
  requestIndex,
  receiveIndex,
  receiveMarkitApiFailure
}
