export const DASHBOARD = "PAGE/DASHBOARD";
export const STOCKPAGE = "PAGE/STOCKPAGE";
export const ECONOMYPAGE = "PAGE/ECONOMYPAGE";
export const INDUSTRYPAGE = "PAGE/INDUSTRYPAGE";
export const PORTFOLIOPAGE = "PAGE/PORTFOLIOPAGE";
export const SIMULATIONPAGE = "PAGE/SIMULATIONPAGE";

export const moveToDashboard = (page) => ({ type: DASHBOARD, page });
export const moveToStockPage = (page) => ({ type: STOCKPAGE, page });
export const moveToEconomyPage = (page) => ({ type: ECONOMYPAGE, page });
export const moveToIndustryPage = (page) => ({ type: INDUSTRYPAGE, page });
export const moveToPortfolioPage = (page) => ({ type: PORTFOLIOPAGE, page });
export const moveToSimulationPage = (page) => ({ type: SIMULATIONPAGE, page });

const initialState = {
  page: "대쉬보드 홈"
};

const pager = (state = initialState, action) => {
  switch (action.type) {
    case DASHBOARD:
      
      return {
        ...state,
        page: "대쉬보드 홈"
      };
    case STOCKPAGE:
      return {
        ...state,
        page: "주식 데이터"
      };
    case ECONOMYPAGE:
      return {
        ...state,
        page: "경제 데이터"
      };
    case INDUSTRYPAGE:
      return {
        ...state,
        page: "산업 데이터"
      };
    case PORTFOLIOPAGE:
      return {
        ...state,
        page: "포트폴리오 관리"
      };
      case SIMULATIONPAGE:
        return {
          ...state,
          page: "시뮬레이션"
        };
      
    default:
      return state;
  }
};

export default pager;