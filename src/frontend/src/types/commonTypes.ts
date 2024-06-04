export interface SeperatorProps {
    direction?: "horizontal" | "vertical";
    width: string;
    height: string;
    color?: string;
    classNames?: string;
}

export interface SecondaryHeaderTypes {
    name: string;
}

export interface ExperienceDataType {
    company: string;
    designation: string;
    startDate: string;
    endDate: string;
    timePeriod: string;
    description: string;
    location: string;
    // type: "school" | "industry"
    type?: string;
}

export interface ErrorPageType {
    type: ErrorTypes;
  }

export type ErrorTypes = 400 | 500 | 404;