import { Profile, Project, Skill } from './types';

export const profile: Profile = {
  name: "Surendra Rayapati",
  title: "Senior Software Engineer",
  bio: "Innovative Senior Software Engineer with 14+ years of experience driving cutting-edge solutions across diverse industries. Passionate about leveraging modern technologies to solve complex business challenges and deliver high-impact results.",
  location: "Raleigh, North Carolina, USA",
  email: "srayapati28@gmail.com",
  github: "https://github.com/SurendraR",
  linkedin: "https://linkedin.com/in/surendra-rayapati"
};

export const skills: Skill[] = [
  { name: "Angular", rating: 4, yearsOfExperience: 6 },
  { name: "C#", rating: 4, yearsOfExperience: 13 },
  { name: ".Net 8/.Net Core", rating: 4, yearsOfExperience: 5 },
  { name: ".Net Framework", rating: 4, yearsOfExperience: 7 },
  { name: "Azure Cloud", rating: 2.5, yearsOfExperience: 3 },
  { name: "SQL Server", rating: 3.5, yearsOfExperience: 8 },
  { name: "Docker", rating: 2, yearsOfExperience: 1 },
  { name: "Kubernetes", rating: 2, yearsOfExperience: 1 },
  { name: "DevOps & CI/CD", rating: 3.5, yearsOfExperience: 2 }
];

export const projects: Project[] = [
  {
    "title": "NCDOT Modernization",
    "companyName": "NC DOT",
    "description": "NCDOT modernizations applications",
    "location": "Raleigh, North Carolina, USA",
    "role": "Senior Software Engineer",
    "startDate": "2024-03",
    "endDate": "Present",
    "technologies": [
      ".Net 8",
      "JSON schemas",
      "Azure Cloud",
      "SQL Server",
      "HTML5",
      "CSS3",
      "TypeScript",
      "Angular",
      "JSON",
      "Bootstrap",
      "NGRX",
      "Jasmine"
    ],
    "achievements": [
      "Accelerated project velocity by translating complex NCDOT requirements into actionable user stories, resulting in a well-defined product backlog.",
      "Enhanced team collaboration and project flow through active participation in Agile sprint ceremonies.",
      "Improved API performance and scalability by leveraging .NET 8 to engineer robust APIs incorporating best practices.",
      "Reduced technical debt by implementing code quality and maintainability strategies.",
      "Delivered intuitive and responsive user interfaces using a modern tech stack (HTML5, CSS3, TypeScript, Angular, JSON, Bootstrap), enhancing user satisfaction.",
      "Improved application predictability and debugging through effective state management using NGRX in Angular applications."
    ]
  },
  {
    "title": "File360",
    "companyName": "OpenText",
    "description": "File360 enables organizations to regain control over critical information, improve the quality of business decisions and increase operational and process efficiency.",
    "location": "Hyderabad, Telangana, India",
    "role": "Lead Software Engineer",
    "startDate": "2023-05",
    "endDate": "2024-03",
    "technologies": [
      ".Net Core 3.1",
      "SQL Server",
      "Azure Cloud",
      "HTML5",      
      "Docker",      
      "Angular"
    ],
    "achievements": [
      "Successfully transitioned product handover, empowering team members with the knowledge to utilize diverse applications.",
      "Contributed to File360 23.4 by designing and developing key features.",
      "Streamlined API development and documentation by developing multiple Web APIs and designing endpoints with Swagger.",
      "Improved user experience by designing and implementing intuitive interfaces using HTML5, CSS3, Typescript, Angular, JSON, and Bootstrap.",
      "Enhanced backend efficiency by creating optimized stored procedures for SQL Server.",
      "Improved application security by scanning for security vulnerabilities using Blackbuck, fortify, and web inspect."
    ]
  },
  {
    "title": "Micron Technology",
    "companyName": "Micron Technology",
    "description": "Application development using Micron's proprietary internal framework",
    "location": "Hyderabad, India",
    "role": "Staff Software Engineer",
    "startDate": "2021-10",
    "endDate": "2023-05",
    "technologies": [
      ".Net 6",
      "Angular 14",
      "HighCharts",
      "AgGrid",
      "Big Query",
      "Azure Cloud"
    ],
    "achievements": [
      "Enhanced development efficiency by spearheading application development using Micron's internal framework.",
      "Reduced development time by 30% through architecting and implementing reusable components and providing architectural guidance.",
      "Improved project delivery by 25% by optimizing product development cycles using Agile methodologies.",
      "Enabled data-driven decision-making by designing advanced Power BI reports integrated with Azure Application Insights.",
      "Improved Angular proficiency across the department by 40% through comprehensive training sessions.",
      "Ensured code quality and consistency by establishing and enforcing custom lint rules for Angular applications within the Azure pipeline."
    ]
  },
  {
    "title": "Loop IT",
    "companyName": "EPAM Systems",
    "description": "It's a product developed for healthcare industry clients to provide a feedback platform for the clients.",
    "location": "Hyderabad, India",
    "role": "Senior Software Engineer",
    "startDate": "2019-08",
    "endDate": "2021-10",
    "technologies": [
      "Angular",
      "Angular Material",
      "Bootstrap",
      ".Net Core",
      "Cosmos DB",
      "SQL Server"
    ],
    "achievements": [
      "Accelerated product development by leading the development of Angular application architecture and identifying key libraries.",
      "Improved code reliability by achieving over 70% code coverage through Jasmine test cases.",
      "Empowered team members by providing training and guidance in Angular application development.",
      "Streamlined Angular app development and testing using Node.js to create mock APIs.",
      "Enhanced application scalability and performance by developing .NET Core services using Azure serverless programming.",
      "Improved user interaction by developing dynamic forms for the application"
    ]
  },
  {
    "title": "eDocs",
    "companyName": "OpenText",
    "description": "EDocs is the content management product of OpenText Technologies with most of the customers in the law industry. It has various clients like Office client, Outlook, Windows Explorer Extension and SMART UI. Iâ€™ve been part of EDOCS SMART UI development for with Angular 6 and typescript. Also... involved in enhancing EDOCs product features and maintenance which involves work on .Net MVC web application, batch jobs, and SSIS packages and python.",
    "location": "Hyderabad, India",
    "role": "Lead Software Engineer",
    "startDate": "2016-02",
    "endDate": "2019-08",
    "technologies": [
      "ASP.Net",
      "SQL server",
      "WCF",
      "Web API",
      "Angular 12",
      "Bootstrap",
      "CSS3",
      "Java script"
    ],
    "achievements": [
      "Improved database performance by designing and creating optimized stored procedures and dynamic SQL queries.",
      "Delivered a seamless hybrid application experience by implementing new features for OpenText eDocs smart UI with responsive solutions.",
      "Enhanced system functionality and user experience by developing and maintaining Web APIs.",
      "Ensured consistent performance across multiple platforms by authoring comprehensive unit tests.",
      "Reduced manual errors by engineering PowerShell scripts to automate the development build process.",
      "Improved collaboration with team members by conducting peer reviews and testing"
    ]
  },
  {
    "title": "MBPM",
    "companyName": "OpenText",
    "description": "Itâ€™s a business process management product of OpenText Technologies. Itâ€™s developed to automate the business processes followed by organizations.",
    "location": "Hyderabad, India",
    "role": "Lead Software Engineer",
    "startDate": "2016-02",
    "endDate": "2019-08",
    "technologies": [
      "ASP.Net Web API",
      "ASP.Net",
      "SQL server",
      "Angular",
      "Bootstrap",
      "HTML 5",
      "JavaScript"
    ],
    "achievements": [
      "Developed robust and scalable backend solutions by designing and developing RESTful services using Web API.",
      "Delivered a seamless user experience by creating Angular applications optimized for compatibility across multiple platforms.",
      "Enhanced productivity and consistency by building reusable components to streamline the development of reporting features.",
      "Improved code quality by performing thorough code reviews for peers",
      "Fostered team growth by conducting training sessions to familiarize the team with Angular",
      "Helped deliver product releases on time by Coordinating with Product Management and participated in sprint planning"
    ]
  },
  {
    "title": "Percana",
    "companyName": "Wipro",
    "description": "Itâ€™s a comprehensive enterprise solution that can be used to manage a wide range of Life and Pension products.",
    "location": "Hyderabad, India",
    "role": "Senior Software Engineer",
    "startDate": "2010-11",
    "endDate": "2016-02",
    "technologies": [
      "ASP.Net",
      "Web API",
      "WCF",
      "HTML5",      
      "SQL Server"
    ],
    "achievements": [
      "Delivered robust and user-friendly desktop solutions through development of sophisticated Windows client applications using WPF.",
      "Enhanced job scheduling efficiency through the creation of a Windows service-based application.",
      "Improved application responsiveness and user experience by significantly improving database query performance through optimization techniques.",
      "Gained valuable exposure to web interface development by implementing WCF SOAP services, while gaining valuable exposure to web interface development using MVC and Web API frameworks.",
      "Showcased technical expertise and domain knowledge by Actively participated in product feature discussions",
      "Facilitated server communication by Contributing to the development of a Windows-based back-office application utilizing client-server architecture"
    ]
  },
  {
    "title": "AHM eQuote",
    "companyName": "Wipro",
    "description": "Itâ€™s a system where the business users can request a quotation to supplier for spare parts and compare them before finalizing the supplier.",
    "location": "Hyderabad, India",
    "role": "Senior Software Engineer",
    "startDate": "2010-11",
    "endDate": "2016-02",
    "technologies": [
      "C#.NET",
      "ADO.NET",
      "Entity Framework"
    ],
    "achievements": [
      "Streamlined software development by contributing to full software development lifecycle, including analysis, development, testing and support",
      "Demonstrated strong proficiency in backend technologies by developing business and data tiers using C#.NET, ADO.NET, and Entity Framework.",
      "Helped improve server performance by authoring efficient stored procedures and functions for SQL"
    ]
  }
];