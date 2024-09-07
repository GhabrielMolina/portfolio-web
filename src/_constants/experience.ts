interface ExperienceOption {
  name: string;
  position: string;
  locale: string;
  imageURL: string;
  description: string[];
  startDate: string;
  endDate: string;
}

export const experienceOptions: ExperienceOption[] = [
  {
    name: "DLL Group",
    position: "IT Front Office Applications Intern",
    locale: "Porto Alegre, RS, Brazil",
    imageURL: "./logo/dll-logo.png",
    description: [
      "ASSIST IN SUPPORTING CORPORATE FINANCIAL SYSTEMS",
      "SUPPORT THE TEAM IN INVESTIGATING INCIDENTS AND DIAGNOSING PROBLEMS",
      "CONTRIBUTE TO AVOIDING THE OCCURENCE OF INCIDENTS THROUGH PROACTIVE ANALYSIS MINIMIZING THE IMPACT OF INCIDENTS THAT CANNOT BE AVOIDED THROUGH ALTERNATIVE SYSTEMIC FLOW OR CREATION AND APPLICATION OF DATABASE SCRIPTS",
      "UNDERSTAND, SUPPORT AND ENSURE THAT THE WRITING OF THE RCA (ROOT CAUSE ANALYSIS) OF THE PROBLEMS IS PROVIDED WITH QUALITY, GENERATING SUBSIDIES FOR SYSTEMIC CORRECTION OF THE DEVELOPMENT TEAMS AIMING AT THE STABILITY OF THE APPLICATIONS",
    ],
    startDate: "August 2024",
    endDate: "PRESENT",
  },
  {
    name: "Renner",
    position: "External Customer Service Assistant - Central Meu Cartão",
    locale: "Porto Alegre, RS, Brazil",
    imageURL: "./logo/renner-logo.svg",
    description: [
      "EXTERNAL CUSTOMER SERVICE",
      "CREDIT CARD AND FINANCIAL ACCOUNT RELATED PROBLEM RESOLUTIONS",
      "CALL OPENINGS",
      "CUSTOMER AND INTERNAL EMPLOYEE SUPPORT",
      "FINANCIAL ACTIVITIES",
    ],
    startDate: "September 2023",
    endDate: "June 2024",
  },
  {
    name: "Factum",
    position: "IT / INFRASTRUCTURE INTERN",
    locale: "Porto Alegre, RS, Brazil",
    imageURL: "./logo/factum-logo.png",
    description: [
      "IT SUPPORT",
      "COMPUTER/PRINTER/PROJECTOR MAINTENANCE AND CONFIGURATION",
      "HARDWARE",
      "SERVER SUPPORT",
      "NETWORK CABLING",
    ],
    startDate: "May 2022",
    endDate: "June 2022",
  },
  {
    name: "CPOR",
    position: "ASPIRING RESERVE OFFICER R/2",
    locale: "Porto Alegre, RS, Brazil",
    imageURL: "./logo/eb-logo.svg",
    description: [
      "LEADERSHIP",
      "TACTICAL TRAINING",
      "FIELD OPERATIONS",
      "PROBLEM SOLVING",
      "GROUP WORK",
    ],
    startDate: "February 2021",
    endDate: "December 2021",
  },
  {
    name: "PGE-RS",
    position: "STATE PUBLIC DOMAIN OFFICE INTERN - PDPE",
    locale: "Porto Alegre, RS, Brazil",
    imageURL: "./logo/pge-logo.png",
    description: [
      "CUSTOMER SERVICE",
      "FILE ORGANIZATION",
      "SECRETARY ACTIVITIES",
      "PROCESS MANAGEMENT",
    ],
    startDate: "March 2019",
    endDate: "November 2019",
  },
];
