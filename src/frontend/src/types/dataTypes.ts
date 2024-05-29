import { ExperienceDataType } from "./commonTypes";

export interface PersonalDataType {
    age: number;
    experience: string;
    degree: string;
    specialization: string;
    graduation: string;
    city: string;
    phone: number;
    email: string;
    experienceData: ExperienceDataType[];
    education: ExperienceDataType[];
}

export interface SkillDataType {
    name: string;
    proficiency: string;
    score: number;
    experience: string;
    logo: string;
}

export interface CodingSiteTypes {
    name: string;
    url: string;
    logo: string;
    title: string;
    description: string;
}

export interface ProjectDataType {
    name: string;
    image: string;
    description: string;
    git: string;
    hosted: string
}