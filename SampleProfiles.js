// src/data/sampleProfiles.js

export const sampleProfiles = [
  {
    id: 1,
    name: "Sarah Chen",
    photo: "/assets/profiles/sarah.jpg", // Replace with actual path or use placeholder
    role: "Senior Product Manager",
    company: "Tech Innovations Inc.",
    location: "San Francisco Bay Area",
    education: "Stanford University",
    connections: 500,
    mutualConnections: 23,
    summary: "Experienced product leader with a passion for building user-centric solutions. Former PM at Google and Meta.",
    similarities: {
      education: true,
      company: false,
      industry: true,
      location: true
    },
    skills: ["Product Strategy", "User Research", "Agile Management"]
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    photo: "/assets/profiles/michael.jpg", // Replace with actual path or use placeholder
    role: "Frontend Developer",
    company: "Nexus Software",
    location: "Austin, TX",
    education: "University of Texas",
    connections: 356,
    mutualConnections: 12,
    summary: "Frontend specialist with 5+ years experience building responsive web applications with React and modern JavaScript frameworks.",
    similarities: {
      education: false,
      company: true,
      industry: true,
      location: false
    },
    skills: ["React", "JavaScript", "UI/UX", "CSS"]
  },
  {
    id: 3,
    name: "Priya Sharma",
    photo: "/assets/profiles/priya.jpg", // Replace with actual path or use placeholder
    role: "Data Scientist",
    company: "DataViz Analytics",
    location: "New York City",
    education: "MIT",
    connections: 412,
    mutualConnections: 8,
    summary: "AI/ML specialist focused on building predictive models and data visualization tools. Previously at Amazon AWS and IBM Research.",
    similarities: {
      education: true,
      company: false,
      industry: false,
      location: true
    },
    skills: ["Machine Learning", "Python", "Data Visualization", "NLP"]
  },
  {
    id: 4,
    name: "David Park",
    photo: "/assets/profiles/david.jpg", // Replace with actual path or use placeholder
    role: "Product Marketing Manager",
    company: "Growth Ventures",
    location: "Chicago, IL",
    education: "Northwestern University",
    connections: 623,
    mutualConnections: 19,
    summary: "Strategic marketer specialized in SaaS products and B2B solutions. Passionate about bridging the gap between product and marketing.",
    similarities: {
      education: false,
      company: false,
      industry: true,
      location: false
    },
    skills: ["Market Research", "Product Positioning", "Growth Strategy"]
  },
  {
    id: 5,
    name: "Emma Wilson",
    photo: "/assets/profiles/emma.jpg", // Replace with actual path or use placeholder
    role: "UX Designer",
    company: "Creative Solutions",
    location: "Seattle, WA",
    education: "RISD",
    connections: 289,
    mutualConnections: 5,
    summary: "Human-centered designer creating intuitive and accessible digital experiences. Previously designed products at Airbnb and Spotify.",
    similarities: {
      education: false,
      company: true,
      industry: true,
      location: false
    },
    skills: ["User Research", "Wireframing", "Prototyping", "Figma"]
  }
];

export default sampleProfiles;
