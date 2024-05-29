import { CodingSiteTypes, PersonalDataType } from "./types/dataTypes";

export const personalData:PersonalDataType = {
    age: 25,
    experience: "3 Years, 1 Month",
    degree: "Bachelor of Technology",
    specialization: "Computer Science",
    graduation: "2016-2020",
    city: "Adilabad",
    phone: 8790618161,
    email: "chivtekrishna.4727@gmail.com",
    education: [
        {
            company: "IIIT kalyani",
            designation: "Bachelor of Technology",
            startDate: "19 Aug 2016",
            endDate: "may 2020",
            location: "kalyani, WestBengal, India.",
            timePeriod: "4 years -- 7.5 CGPA",
            type: "school",
            description: "Operating systems and compilers. Machine learning and Artificial Intelligence. Databases and coding languages. Data structures and Algorithms"
        },
        {
            company: "Narayana Institutes",
            designation: "Intermediate Education",
            startDate: "June 2014",
            endDate: "April 2016",
            location: "Hyderabad, Telangana, India.",
            timePeriod: "2 years -- 97.1%",
            type: "school",
            description: "Mathematics. Physics. Chemistry"
        },
        {
            company: "Krishnaveni Residential High School",
            designation: "Primary Education(SSC)",
            startDate: "July 2004",
            endDate: "may 2014",
            location: "Adilabad, Telangana, India.",
            timePeriod: "10 years -- 9.7 GPA",
            type: "school",
            description: "Primary level Education. First Language Telugu. Second Language Hindi"
        }
    ],
    experienceData: [
        {
            company: "Geekyants pvt ltd.",
            designation: "Software engineer III",
            startDate: "01 Dec 2021",
            endDate: "current",
            location: "Bangalore, India.",
            timePeriod: "2 years 6 months",
            type: "industry",
            description: `Enhanced developer productivity by creating custom widgets within Appsmith. Established authorization and authentication to secure data and access control.
            Integrated SignalR and DevExpress for real-time communication and data visualization. Cross-frame communication between iframes and parent/child windows.
            Built an application from scratch and developed strategies to scale it seamlessly.
            Contributed to UI/UX discussions and implemented 12+ reusable components.
            Improved application performance and load times through advanced optimisation techniques like event delegation, code splitting, lazy loading and memoization. Used Figma to refer component design.Used azuredevops as a project management tool`,
        },
        {
            company: "Kreditbee",
            designation: "Software engineer",
            startDate: "03 Mar 2021",
            endDate: "10 Oct 2021",
            timePeriod: "8 months",
            location: "Bangalore, India.",
            type: "industry",
            description: `Implemented UI elements and handled data flow for the front-end application. Created reusable React components for improved code maintainability.
            Implemented unit and integration tests for both backend and front end components, ensuring code quality and maintainability. Wrote test in Cypress, jest and yaml.Used Redux, redux-saga for state management.
            Exposed to golang, Aws Jira.
            Leveraged code splitting (eg, ReactLazy) to optimize bundle sizes and load only necessary components on demand, resulting in faster initial page load`,
        },
        {
            company: "Karmalabs",
            designation: "Developer Intern",
            startDate: "01 Jan 2021",
            endDate: "03 Mar 2021",
            timePeriod: "2 months",
            location: "Bangalore, India.",
            type: "industry",
            description: `Created react components for dashboard.Worked on Image upload, files upload, image/file downloads. Bugs fixes. wrote unit test cases using jest`
        }
    ]
}

export const educationData = [
    {
        company: "IIIT kalyani",
        designation: "Bachelor of Technology",
        startDate: "19 Aug 2016",
        endDate: "may 2020",
        location: "kalyani, WestBengal, India.",
        timePeriod: "4 years -- 7.5 CGPA",
        type: "school",
        description: "Operating systems and compilers. Machine learning and Artificial Intelligence. Databases and coding languages. Data structures and Algorithms"
    },
    {
        company: "Narayana Institutes",
        designation: "Intermediate Education",
        startDate: "June 2014",
        endDate: "April 2016",
        location: "Hyderabad, Telangana, India.",
        timePeriod: "2 years -- 97.1%",
        type: "school",
        description: "Mathematics. Physics. Chemistry"
    },
    {
        company: "Krishnaveni Residential High School",
        designation: "Primary Education(SSC)",
        startDate: "July 2004",
        endDate: "may 2014",
        location: "Adilabad, Telangana, India.",
        timePeriod: "10 years -- 9.7 GPA",
        type: "school",
        description: "Primary level Education. First Language Telugu. Second Language Hindi"
    }
]

export const experienceData = [
    {
        company: "Geekyants pvt ltd.",
        designation: "Software engineer III",
        startDate: "01 Dec 2021",
        endDate: "current",
        location: "Bangalore, India.",
        timePeriod: "2 years 6 months",
        type: "industry",
        description: `Enhanced developer productivity by creating custom widgets within Appsmith. Established authorization and authentication to secure data and access control.
        Integrated SignalR and DevExpress for real-time communication and data visualization. Cross-frame communication between iframes and parent/child windows.
        Built an application from scratch and developed strategies to scale it seamlessly.
        Contributed to UI/UX discussions and implemented 12+ reusable components.
        Improved application performance and load times through advanced optimisation techniques like event delegation, code splitting, lazy loading and memoization. Used Figma to refer component design.Used azuredevops as a project management tool`,
    },
    {
        company: "Kreditbee",
        designation: "Software engineer",
        startDate: "03 Mar 2021",
        endDate: "10 Oct 2021",
        timePeriod: "8 months",
        location: "Bangalore, India.",
        type: "industry",
        description: `Implemented UI elements and handled data flow for the front-end application. Created reusable React components for improved code maintainability.
        Implemented unit and integration tests for both backend and front end components, ensuring code quality and maintainability. Wrote test in Cypress, jest and yaml.Used Redux, redux-saga for state management.
        Exposed to golang, Aws Jira.
        Leveraged code splitting (eg, ReactLazy) to optimize bundle sizes and load only necessary components on demand, resulting in faster initial page load`,
    },
    {
        company: "Karmalabs",
        designation: "Developer Intern",
        startDate: "01 Jan 2021",
        endDate: "03 Mar 2021",
        timePeriod: "2 months",
        location: "Bangalore, India.",
        type: "industry",
        description: `Created react components for dashboard.Worked on Image upload, files upload, image/file downloads. Bugs fixes. wrote unit test cases using jest`
    }
];

export const skillsData = [
    {
        name: "ReactJS",
        logo: "react",
        proficiency: "advanced",
        score: 4.5,
        experience: "3 Years, 3 Months",
    },
    {
        name: "Javascript",
        logo: "javascript",
        proficiency: "advanced",
        score: 4.5,
        experience: "3 Years, 3 Months",
    },
    {
        name: "Typescript",
        logo: "typescript",
        proficiency: "advanced",
        score: 4.5,
        experience: "3 Years",
    },
    {
        name: "Redux",
        logo: "redux",
        proficiency: "advanced",
        score: 4,
        experience: "2 Years",
    },
    {
        name: "Mobx",
        logo: "mobx",
        proficiency: "advanced",
        score: 4.5,
        experience: "2 Years",
    },
    {
        name: "HTML5",
        logo: "html",
        proficiency: "advanced",
        score: 4.5,
        experience: "3 Years, 3 Months",
    },
    {
        name: "CSS",
        logo: "css",
        proficiency: "advanced",
        score: 4.5,
        experience: "3 Years, 3 Months",
    },
    {
        name: "Github",
        logo: "github",
        proficiency: "advanced",
        score: 4,
        experience: "3 Years",
    },
    {
        name: "Docker",
        logo: "docker",
        proficiency: "intermediate",
        score: 3.5,
        experience: "1 year",
    },
    {
        name: "NodeJS",
        logo: "nodejs",
        proficiency: "intermediate",
        score: 3.5,
        experience: "< 1 Year",
    },
    {
        name: "Express",
        logo: "express",
        proficiency: "intermediate",
        score: 3.5,
        experience: "< 1 Year",
    },
    {
        name: "SpringBoot",
        logo: "springboot",
        proficiency: "begineer",
        score: 2.5,
        experience: " < 1 Year",
    },
    {
        name: "TailwindCss",
        logo: "tailwindcss",
        proficiency: "advanced",
        score: 4.5,
        experience: "3 Years",
    },
    {
        name: "Material UI",
        logo: "materialui",
        proficiency: "advanced",
        score: 4,
        experience: "1 Years",
    },
    {
        name: "MongoDB",
        logo: "mongodb",
        proficiency: "intermediate",
        score: 3.5,
        experience: " < 1 Year",
    },
    {
        name: "MySql",
        logo: "mysql",
        proficiency: "intermediate",
        score: 3,
        experience: " < 1 Year",
    },

]

export const searchOptions = ["all",'images','videos','shopping','news',':More'];
export const searchedResults = ['login','answers','sign up','practice problems','certification','contest','compiler'];
export const codingSiteData: CodingSiteTypes[] =[
    {
        name: "codechef",
        url:"https://www.codechef.com/users/krisara4727",
        logo:"codechef",
        title: "CodeChef - Learn and Practice Coding with Problems",
        description: 'Over 2M Learners · These are the best problems for beginners. · This module is excellent for both learning and practicing, as it provides a clear and in-depth ...',
    },
    {
        name: "hackerRank",
        url:"https://www.hackerrank.com/profile/chivtekrishna_41",
        logo:"hackerrank",
        title: "HackerRank - Online Coding Tests and Technical Interviews",
        description: "HackerRank is the market-leading coding test and interview solution for hiring developers. Start hiring at the pace of innovation!",
    }, 
    {
        name: "leetcode",
        url:"https://leetcode.com/lucifer4727/",
        logo:"leetcode",
        title:"LeetCode - The World's Leading Online Programming ...",
        description: "Level up your coding skills and quickly land a job. This is the best place to expand your knowledge and get prepared for your next interview."
    },
    {
        name: "github",
        url:"https://github.com/krisara4727",
        logo:"github",
        title:"GitHub: Let's build from here · GitHub",
        description: "GitHub is where over 100 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, ..."
    },
    {
        name: "linkedIn",
        url:"https://linkedin.com/in/krishna-chivte-2708b816a",
        logo:"linkedin",
        title:"LinkedIn India: Log In or Sign Up",
        description: "1 billion members | Manage your professional identity. Build and engage with your professional network. Access knowledge, insights and opportunities."
    },
]

export const projectsData = [
    {
        name: "Path Finding algorithms.",
        image: "pathfinding",
        description: `The project find distance between two points using dikstra(shortest path) and depth-first search algorithms.`,
        git: 'https://github.com/krisara4727/pathfinding-dijkstra-and-dfs-',
        hosted: "https://krisara4727.github.io/pathfinding-dijkstra-and-dfs-/"
    },
    {
        name: "Chain Reaction Game.",
        image: "chainreaction",
        description: "A multiplayer game where Each cell contain atmost 3 items, if it exceeds more than 3 it spilts in 4 directions. when all the cells gets filled with a particular player color, the player win and game ends",
        git:"https://github.com/krisara4727/Game-chain_reaction-",
        hosted: ""
    },
    {
        name: "Tic Tac Toe Game.",
        image: "tictactoe",
        description: "A multiplayer Game just like tic tac toe but You can select any size board.",
        git: "https://github.com/krisara4727/React/tree/main/gamexox",
        hosted: ""
    },
    {
        name: "Password Generator.",
        image: "password",
        description: "A project where you can generate password, based on what different type of characters you want to include in your password and copy the generated password.",
        git:"https://github.com/krisara4727/React/tree/main/passwordGenerator",
        hosted: "https://codesandbox.io/p/sandbox/password-generator-fhwngd?file=%2Fsrc%2Fhooks%2FgeneratePassword.js"
    },
    {
        name: "Old Resume site.",
        image: "resume",
        description: "Old portfolio project.",
        git:"https://github.com/krisara4727/resume-site-",
        hosted: "https://resume-site-e1465.web.app/"
    }
]