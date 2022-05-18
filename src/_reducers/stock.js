import axios from "axios";
import * as dataProcessing from "../components/fnclib/DataProcessing";

export const SEARCHSUCCESS = "STOCK/SEARCHSUCCESS";
export const SEARCHFAIL = "STOCK/SEARCHFAIL";
export const TYPING = "STOCK/TYPING";
export const SEARCHSTATUS = "STOCK/SEARCHSTATUS";

const initialState = {
  input: "AAPL",

  name: "종목이름",
  ticker: "",
  status: "",

  close: "",
  open: "",
  high: "",
  low: "",
  date: "",
  plotPeriod: "5년",

  currentPrice: "140.2",
  lastOpen: "140",
  lastHigh: "150",
  lastLow: "130",
  lastChange: "2.0",
  lastChangeRate: "1.07",
  lastChangeSign: true,
  lastVolume: "10000",
  forwardPER: "30.0",
  capability: "2.1T",
  yearlyHigh: "180.0",
  yearlyLow: "130.0",
  fallingRatio: "-20.5",
  EPS: "7.8",
  ttmPER: "34.1",
  ttmPSR: "7.1",
  currency: "$",

  tagList: ['태그 1','태그 2','태그 3','태그 4'],
  
  checkListBuy: ['매수 체크리스트1','매수 체크리스트2','매수 체크리스트3'],
  checkListSell: ['매도 체크리스트1','매도 체크리스트2','매도 체크리스트3'],
  
  financialDataUnit: "백만달러",
  quarterPeriodList: ["2019.12","2020.03","2020.06","2020.09","2020.12","2021.03","2021.06","2021.09","2021.12","2022.03",],
  quarterRevenueList: [10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,],
  quarterGrossProfitList: [5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,],
  quarterOperatingIncomeList: [3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,],
  quarterNetIncomeList: [2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,],

  quarterAssetList: [10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,],
  quarterLiabilitiesList: [3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,],
  quarterEquityList: [7000,7000,7000,7000,7000,7000,7000,7000,7000,7000,],
  quarterCurrentAssetList: [3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,],
  quarterCurrentLiabilitiesList: [1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,],

  quarterOperatingCashFlowList: [2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,],
  quarterInvestingCashFlowList: [1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,],
  quarterFinancingCashFlowList: [-500,-500,-500,-500,-500,-500,-500,-500,-500,-500,],
  quarterNetChangeCashFlowList: [500,500,500,500,500,500,500,500,500,500,],

  quarterDividendList: [0.1925,0.205,0.205,0.205,0.205,0.22,0.22,0.22,0.22,0.23,],
  dividendUnit: "달러",
};

export async function getPrice(tickerInput, startDate, endDate) {
    const body = {
      ticker: tickerInput,
      startDate: startDate,
      endDate: endDate
    }
    const request = await axios.post('/api/stock/price', body)
    .then(response => response.data)

    let result = "none";
    if (request.close.length > 1) {
      result = tickerInput + "의 데이터 수집을 완료했어요.";
      return {
        type: SEARCHSUCCESS,
        response: request,
        status: result,
        ticker: tickerInput
    }    
    } else {
      result = tickerInput + "의 데이터를 수집하는 데 실패했어요.";
      return {
        type: SEARCHFAIL,
        response: request,
        status: result
      }
    }
}

export function setInput(tickerInput) {
    return {
        type: TYPING,
        searchInput: tickerInput
      }
}

export function setStatus(status) {
    return {
        type: SEARCHSTATUS,
        status: status
    }
}

const stock = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHSUCCESS:
      return {
        ...state,
        currentPrice: (dataProcessing.getLastValue(action.response.close)).toFixed(2),
        lastOpen: (dataProcessing.getLastValue(action.response.open)).toFixed(2),
        lastHigh: (dataProcessing.getLastValue(action.response.high)).toFixed(2),
        lastLow: (dataProcessing.getLastValue(action.response.low)).toFixed(2),
        lastChange: (dataProcessing.getLastChange(action.response.close)).toFixed(2),
        lastChangeRate: (dataProcessing.getLastChangeRate(action.response.close)).toFixed(2),
        lastChangeSign: ((dataProcessing.getLastChange(action.response.close)).toFixed(2) >= 0),
        close: action.response.close,
        high: action.response.high,
        low: action.response.low,
        open: action.response.open,
        date: action.response.date,
        status: action.status,
        ticker: action.ticker,
        tagList: ['태그 1','태그 2','태그 3','태그 4'],
      };
    
    case SEARCHFAIL:
      return {
        ...state,
        status: action.status
      }

    
    case TYPING:
      return {
        ...state,
        input: action.searchInput
      };

    case SEARCHSTATUS:
      return {
        ...state,
        status: action.status
      }

    default:
      return state;
  }
};

export default stock;