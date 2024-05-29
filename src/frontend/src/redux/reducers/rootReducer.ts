import portfolioReducer from "./portfolioReducer";
import themeReducer from "./themeSlice";

const rootReducer: any = {
    theme: themeReducer,
    portfolio: portfolioReducer,
};

export default rootReducer;