import axios from "axios";
import * as dataProcessing from "../components/fnclib/DataProcessing";

export const SEARCHSUCCESS = "STOCK/SEARCHSUCCESS";
export const SEARCHFAIL = "STOCK/SEARCHFAIL";
export const TYPING = "STOCK/TYPING";
export const SEARCHSTATUS = "STOCK/SEARCHSTATUS";

const initialState = {
  input: "AAPL",

  // basic information
  name: "종목이름",
  ticker: "",
  status: "",
  capability: "2.1T",
  currency: "$",

  // price and volume
  close: "",
  open: "",
  high: "",
  low: "",
  date: "",
  plotPeriod: "5년",
  currentPrice: 140.2,
  lastOpen: 140,
  lastHigh: 150,
  lastLow: 130,
  lastChange: 2.0,
  lastChangeRate: 1.07,
  lastChangeSign: true,
  lastVolume: 10000,
  yearlyHigh: 180.0,
  yearlyLow: 130.0,
  fallingRatio: -20.5,

  // financial ratio
  forwardPER: 30.0,
  ttmPER: 34.1,
  ttmPSR: 7.1,
  currentGrossMargin: 30.0,
  currentOperatingMargin: 30.0,
  currentNetProfitMargin: 30.0,
  ttmSalesGrowth: 30.0,
  ttmOperatingIncomeGrowth: 30.0,
  ttmNetProfitGrowth: 30.0,
  currentDebtRatio: 30.0,
  currentQuickRatio: 30.0,
  currentCurrentRatio: 30.0,
  ttmAssetTurnover: 30.0,
  ttmInventoryTurnover: 30.0,
  ttmReceivableTurnover: 30.0,

  // financial information
  EPS: 7.8,
  incomeYearList: ['2018','2019','2020','2021','2022(E)'],
  revenueList: [20,40,60,100,150],
  operatingincomeList: [-50,-30,-20,60,100],
  netProfitList: [-50,-40,-10,50,80],

  // Expert opinion
  opinionList: ['강력 매수','매수','중립','매도','강력 매도'],
  opinionNumberList: [10,10,10,10,10],
  targetPriceHigh: 225,
  targetPriceAvg: 193.5,
  targetPriceLow: 160,
  
  // oruum contents
  tagList: ['태그 1','태그 2','태그 3','태그 4'],
  checkListBuy: ['매수 체크리스트1','매수 체크리스트2','매수 체크리스트3'],
  checkListSell: ['매도 체크리스트1','매도 체크리스트2','매도 체크리스트3'],
  productList: ['아이폰', '아이패드'],
  productSalesRatioList: [50.0, 30.0],
  productGrowthList: [20,20],
  productTagLists: [['전자제품','IT'],['전자제품','IT'],],
  productSummaryList: ['아이폰, 애플 매출의 핵심!',''],
  productDetailLists: [['전세계 $450B의 스마트폰 시장에서 애플은 무려 %196B 차지! (43.6%)','2021년 4분기 스마트폰 출하량 22%로 1위!',['점점 더 커지는 프리미엄 스마트폰 시장, 그리고 애플의 프리미엄폰 시장에서의 확고한 위치!']],[]],
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