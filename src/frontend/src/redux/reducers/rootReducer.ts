import portfolioReducer from "./portfolioReducer";
import skillSlice from "./skillSlice";
import themeReducer from "./themeSlice";

const rootReducer: any = {
    theme: themeReducer,
    portfolio: portfolioReducer,
    skills: skillSlice
};

export default rootReducer;