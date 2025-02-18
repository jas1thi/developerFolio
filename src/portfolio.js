/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jaswanthi Boyapati",
  title: "Hi, I'm Jaswanthi",
  subTitle: emoji(
    " Data Science professional with expertise in analytics and cloud architecture. Skilled in building ETL pipelines and delivering actionable insights using Python, SQL, and AWS. MS in Data Science, looking for opportunities in cross functional teams. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/13ikKkU-WILkzHc3c3zWqnAzn4lvnTvDu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/jaswanthi-boyapati-7377b31b0",
  gmail: "jaswanthi.boyapati09@gmail.com",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I play with data, build cool dashboards, and optimize cloud pipelines!",
  skills: [
    emoji(
      "⚡Building robust ETL pipelines with AWS and Python "
    ),
    emoji("⚡  Designing and deploying scalable cloud-based storage solutions"),
    emoji(
      "⚡ Creating predictive models and analytics dashboards"
    )

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [


    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Terraform", fontAwesomeClassname: "fas fa-cloud" },
    { skillName: "Tableau", fontAwesomeClassname: "fas fa-chart-line" },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Houston",
      logo: require("./assets/images/uhLogo.png"),
      subHeader: "Master's degree in Data Science (CGPA: 3.96/4)",
      duration: "Jan 2023 - Dec 2024",
      desc: "Coursework: Big Data Analytics, Databases, Data Mining, Machine Learning",
    },
    {
      schoolName: "Institute of Aeronautical Engineering",
      logo: require("./assets/images/iareLogo.png"),
      subHeader: "B.Tech in Computer Science and Engineering (GPA: 9.22/10)",
      duration: "June 2018 - June 2022",
      desc: "Coursework: Cloud Computing, DSA, Data Warehousing, Web Technologies",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [

    
      {
        Stack: "SQL",
        progressPercentage: "95%"
      },
      {
        Stack: "Python",
        progressPercentage: "90%"
      },
      {
        Stack: "AWS",
        progressPercentage: "95%"
      },
      {
        Stack: "ETL Pipelines",
        progressPercentage: "80%"
      },
      {
        Stack: "Machine Learning",
        progressPercentage: "85%"
      },
      {
        Stack: "Tableau",
        progressPercentage: "90%"
      },
      {
        Stack: "Terraform",
        progressPercentage: "85%"
      },  
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperience = {
  display: true, 
  experience: [
    {
      role: "Research Assistant",
      company: "University of Houston",
      companylogo: require("./assets/images/uhLogo.png"),
      date: "Jan 2023 – Dec 2024",
      desc: "Designed scalable data pipelines using Python and AWS, improving efficiency by 25%. Developed predictive models for student success initiatives, boosting accuracy by 15%."
      
    },
    {

      role: "Cloud Data Engineer",
      company: "Capgemini",
      companylogo: require("./assets/images/capgLogo.png"),
      date: "Mar 2022 – Dec 2022",
      desc: "Built ETL pipelines with AWS Glue, Python, and Apache Spark, improving data processing efficiency by 30%. Designed AWS-based data lakes for optimized data storage and querying, reducing query execution time by 25%."
     
    },
    {
      role: "Data Analyst Intern",
      company: "Virtusa",
      companylogo: require("./assets/images/virtusaLogo.png"),
      date: "Oct 2021 – Mar 2022",
      desc: "Performed market basket analysis using SQL and Python, increasing sales performance by 25%. Created interactive dashboards in Tableau for marketing insights, improving campaign ROI by 20%.",
    },
    
  ]
};



/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [

    
    {
      title: "AWS Certified Solutions Architect – Associate",
      subtitle:
        "Certification for expertise in designing scalable AWS solutions.",
      image: require("./assets/images/awsLogo.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/fd51bf6b-ae16-42df-a954-9b1363a31508/linked_in?t=sp4gzs"
        }
      ]
    },

    {
      title: "Infosys Certified Software Programmer",
      subtitle: "Certification validating software development skills.",
      image: require("./assets/images/infosysLogo.png"),
      imageAlt: "Infosys Logo",
      footerLink: [
        {name: "Certification",
           url: "https://infytq.onwingspan.com/public-assets/Infosys-Certified-Software-Programmer_2022/f194fc2e-2d83-4006-82f7-9f14740212ab.pdf"},
        
      ]
    },

    {
      title: "Getting started with AWS machine learning",
      subtitle: "Certification validating Amazon Web Services (AWS) to build and deploy machine learning models.",
      image: require("./assets/images/awsLogo.png"),
      imageAlt: "Infosys Logo",
      footerLink: [
        {name: "Certification",
           url: "https://www.coursera.org/account/accomplishments/verify/VLWAN6TFWG2H"},
        
      ]
    },

    {
      title: "Responsive Web Design",
      subtitle: "Certification validating understanding of web development, including HTML, CSS, and responsive web design. ",
      image: require("./assets/images/fccLogo.png"),
      imageAlt: "Frecode camp Logo",
      footerLink: [
        {name: "Certification",
           url: "https://www.coursera.org/account/accomplishments/verify/VLWAN6TFWG2H"},
      
        
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};


// Some big projects you have worked on

const bigProjects = {
  title: " Projects",
  subtitle: "Includes Course Curriculum:)",
  projects: [
    {
      projectName: "Topic Modeling",
      projectDesc: "Developed an LDA model to analyze 1,620 newspaper articles, optimizing perplexity and coherence scores to extract key themes. Applied text preprocessing techniques, including tokenization, stopword removal, and TF-IDF vectorization, to enhance model performance by providing insights into emerging trends in media.",
    },
    {
      projectName: "Three-Tier VPC Deployment",
      projectDesc: "Designed and implemented a scalable AWS VPC using Terraform, ensuring 99.99% uptime across multiple availability zones. Integrated security best practices, including private subnets, NAT gateways, and IAM policies, to enhance data protection. Automated infrastructure deployment reduced provisioning time by 40%.",
    },
    {
      projectName: "Ensemble Machine Learning Model",
      projectDesc: "Collaborated in a team of 4 to implement ensemble modeling with 20 models for dry bean classification. Optimized hyperparameters to enhance accuracy and reduce training time. The project achieved a significant improvement in classification performance, reducing misclassification rates by 15%.",
    },
    {
      projectName: "Web-Based House Sales Management System",
      projectDesc: "Developed a real estate platform managing 100+ properties with a robust database architecture. Implemented dynamic listings, advanced filtering, and automated workflows, improving search efficiency by 30%. Optimized system performance, ensuring seamless user experience.",
    }
      
  ],
  display: true // Set false to hide this section, defaults to true
};
// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Talk title",
      subtitle: "Subtitle",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to new opportunities! Feel free to reach out to discuss roles, projects, or collaborations.",
  number: "+1 3465629019",
  email_address: "jaswanthi.boyapati09@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperience,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
