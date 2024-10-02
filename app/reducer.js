const initialState = {
  pageInsights: [],
  adsInsightsAdAccounts: [],
  adsInsightsAccount: [],
  adsInsightsCampaigns: [],
  marketingMessageInsights: [],
  error: {
    pageInsights: null,
    configFile: null,
    adsInsightsAdAccounts: null,
    adsInsightsAccount: null,
    adsInsightsCampaigns: null,
    marketingMessageInsights: null,
  },
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'pageInsights':
      return {
        ...state,
        pageInsights: [...state.pageInsights, ...action.payload],
      };
    case 'adsInsightsAdAccounts':
      return { ...state, adsInsightsAdAccounts: action.payload };
    case 'adsInsightsAccount':
      return { ...state, adsInsightsAccount: action.payload };
    case 'adsInsightsCampaigns':
      return { ...state, adsInsightsCampaigns: action.payload };
    case 'marketingMessageInsights':
      return {
        ...state,
        marketingMessageInsights: [
          ...state.marketingMessageInsights,
          ...action.payload,
        ],
      };
    case 'error':
      return { ...state, error: { ...state.error, ...action.payload } };
    default:
      return state;
  }
}
