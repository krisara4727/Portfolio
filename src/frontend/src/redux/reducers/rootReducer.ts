import portfolioReducer from "./portfolioReducer";
import projectSlice from "./projectSlice";
import skillSlice from "./skillSlice";
import themeReducer from "./themeSlice";

const rootReducer: any = {
  theme: themeReducer,
  portfolio: portfolioReducer,
  skills: skillSlice,
  projects: projectSlice,
};

export default rootReducer;
