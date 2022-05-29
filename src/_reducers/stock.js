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
  dividend: 0.22,
  EPS: 7.8,
  incomeYearList: ['2018','2019','2020','2021','2022(E)'],
  revenueList: [20,40,60,100,150],
  operatingincomeList: [-50,-30,-20,60,100],
  netProfitList: [-50,-40,-10,50,80],

  // financial estimates
  estimatesPeriodList: ['2021','2022','2023','2024'],
  estimatesEpsList: [5.61,6.16,6.56,0],
  estimatesPerHigh: 35,
  estimatesPerLow: 15,
  estimatesSpsList: [21.69,23.46,24.77,0],
  estimatesPsrHigh: 7.8,
  estimatesPsrLow: 3.5,

  // expert opinion
  opinionList: ['강력 매수','매수','중립','매도','강력 매도'],
  opinionNumberList: [10,10,10,10,10],
  targetPriceHigh: 225,
  targetPriceAvg: 193.5,
  targetPriceLow: 160,

  // CEO
  leaderName: '팀 쿡 (Timothy Donald Cook)',
  leaderContentsList: ['2011년 스티브 잡스가 세상을 떠나면서 팀쿡이 애플의 CEO를 맡게되었어요.',
                    '애플 이전에는 IBM과 컴팩이라는 회사에서 근무했고 모두 생상 관리를 하는 직책을 맡았어요.',
                    'Operations Management (OM) 분야에서 굉장한 능력을 보유하고 있는 사람이에요.',
                    '효율적인 경영과 에어팟 같은 신제품을 통해 매출과 이익을 늘렸고 10년동안 주가는 무려 7배나 상승했어요!'],
  
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
  
  // news
  newsLinkList: ['https://www.hankookilbo.com/News/Read/A2022052909160003125',
                 'http://it.chosun.com/site/data/html_dir/2022/05/27/2022052701662.html'],
  newsImageList: ['https://newsimg-hams.hankookilbo.com/2022/05/29/129025b4-2f98-41e0-9c6c-2f50c1cb3294.jpg',
                  'http://itimg.chosun.com/sitedata/image/202205/27/2022052701656_0.png'],
  newsTitleList: ['애플 iOS16·MR헤드셋 공개하나...WWDC 앞두고 숨죽인 IT시장',
                  '애플 올해 아이폰 생산량 작년 수준 "2.2억대" 그칠 듯'],
  newsSummaryList: ['글로벌 정보기술(IT) 기업 애플의 최대 연례행사 "세계 개발자 회의(WWDC)"가 임박하면서 새로운 운...',
                    '애플의 올해 아이폰 생산량이 2021년 수준에 그칠 것이란 전망이 나왔다. 중국 봉쇄 악재와 공급망 불안 등에 따른 모바일 시장 부진으로 애플이 생산 감축에 돌입했기 때문이라는 분석이 나온다.'],
  newsJournalList: ['한국일보','조선일보'],
  newsDateList: ['2022.05.29','2022.05.27']

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
      result = "완료"
      return {
        type: SEARCHSUCCESS,
        response: request,
        status: result,
        ticker: tickerInput
    }    
    } else {
      result = "실패"
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