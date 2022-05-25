export const DASHBOARD = "PAGE/DASHBOARD";
export const STOCKPAGE = "PAGE/STOCKPAGE";
export const ECONOMYPAGE = "PAGE/ECONOMYPAGE";
export const INDUSTRYPAGE = "PAGE/INDUSTRYPAGE";
export const PORTFOLIOPAGE = "PAGE/PORTFOLIOPAGE";
export const SIMULATIONPAGE = "PAGE/SIMULATIONPAGE";

export const moveToDashboard = page => ({ type: DASHBOARD, page });
export const moveToStockPage = page => ({ type: STOCKPAGE, page });
export const moveToEconomyPage = page => ({ type: ECONOMYPAGE, page });
export const moveToIndustryPage = page => ({ type: INDUSTRYPAGE, page });
export const moveToPortfolioPage = page => ({ type: PORTFOLIOPAGE, page });
export const moveToSimulationPage = page => ({ type: SIMULATIONPAGE, page });

const initialState = {
  page: "Dashboard"
};

const pager = (state = initialState, action) => {
  switch (action.type) {
    case DASHBOARD:
      
      return {
        ...state,
        page: "Dashboard"
      };
    case STOCKPAGE:
      return {
        ...state,
        page: "Stock"
      };
    case ECONOMYPAGE:
      return {
        ...state,
        page: "Economy"
      };
    case INDUSTRYPAGE:
      return {
        ...state,
        page: "Industry"
      };
    case PORTFOLIOPAGE:
      return {
        ...state,
        page: "Portfolio"
      };
      case SIMULATIONPAGE:
        return {
          ...state,
          page: "Simulation"
        };
      
    default:
      return state;
  }
};

export default pager;