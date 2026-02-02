// Projects Data - Easy to update!

const ROOM_MATIK = "RoomMatik (Spain)";
const CHENIERE = "Cheniere Energy (US)";
const BEFREE = "BeFree";
const GIFTCITY = "Gujarat International Finance Tec-City (GIFT City)";
const projectsData = [
  {
    title: "Contract Management System",
    client: CHENIERE,
    type: "Offshore Development",
    startDate: "2024",
    technologies: [".NET Framework 4.5.1", ".NET Core 8", "Azure DevOps"],
    description:
      "Architected and developed a comprehensive contract management system for a Fortune 500 energy company, managing multi-million dollar cargo contracts and commodity-based agreements.",
    achievements: [
      "Dual Contract Management: Architected system to handle both third-party integrated contracts and native system-based contracts",
      "Third-Party Integration: Implemented seamless data synchronization with external cargo tracking systems, reducing manual data entry by 80%",
      "Automated Notification System: Developed intelligent reminder system improving adherence by 90%",
      "Legacy Migration: Successfully migrated from .NET Framework 4.5.1 to .NET Core 8, improving performance by 50%",
      "DevOps Implementation: Established Azure DevOps CI/CD pipelines reducing deployment time from hours to minutes",
    ],
  },
  {
    title: "GIFTCity Power Management System",
    client: GIFTCITY,
    type: "Government Project",
    startDate: "2023",
    technologies: [".NET Core", "MySQL", "Payment Gateway", "SMS Integration"],
    description:
      "Developed a comprehensive power management system for India's premier financial hub, streamlining electricity services for businesses and residents.",
    achievements: [
      "Service Consolidation: Unified multiple microservices into a single comprehensive API",
      "Document Management: Engineered multi-document submission capability reducing processing time by 40%",
      "Billing Automation: Built end-to-end automated billing module with email and SMS notifications",
      "Payment Integration: Integrated secure payment gateway increasing collection efficiency by 35%",
      "Role-Based Access Control: Implemented sophisticated authentication system for multiple user hierarchies",
      "Automated Document Generation: Developed automated PDF generation system for technical sanctions, monthly bills and demand estimates, eliminating manual processes and ensuring accuracy ",
    ],
  },
  {
    title: "Cheniere Capacity Loss Evaluation and Reporting",
    client: CHENIERE,
    type: "Offshore Development",
    startDate: "2025",
    technologies: [".NET Core", "MySQL", "PI System", "Denodo", "Maximo"],
    description:
      "Analytics application built on .NET Core and SQL Server for a Fortune 500 energy company, integrating PI, Denodo, and Maximo to track capacity loss and performance across facilities.",
    achievements: [
      "Designed and built a .NET Core backend that connects smoothly with PI, Denodo, and Maximo systems.",
      "Created a pipeline that pulls data from different sources and transforms it into a consistent, usable format.",
      "Developed calculation logic to track capacity loss, achievement percentages, and efficiency metrics across facilities and production trains.",
      "Gave business users clear, near real-time visibility into how operations are performing.",
      "Optimized SQL queries and backend processes to handle large volumes of historical data without performance issues.",
      "Delivered a reporting solution that makes it easy for users to evaluate losses and achievements across different operational areas.",
    ],
  },
  {
    title: "Custom Identity Provider (SSO Solution)",
    client: BEFREE,
    type: "Enterprise Authentication",
    startDate: "2025",
    technologies: [
      ".NET Core",
      "React.js",
      "OAuth 2.0",
      "SAML",
      "OpenID Connect",
    ],
    description:
      "Architected and developed a comprehensive Single Sign-On (SSO) identity provider solution, comparable to enterprise solutions.",
    achievements: [
      "Full-Stack Development: Built complete SSO solution with React.js frontend and .NET Core backend",
      "Protocol Implementation: Implemented industry-standard authentication protocols (SAML, OAuth 2.0, OpenID Connect)",
      "Multi-Tenant Architecture: Designed scalable system supporting multiple organizations with isolated data",
      "Two-Factor Authentication: Integrated configurable 2FA system within SSO workflow",
      "Security Framework: Implemented comprehensive security measures including token-based authentication and encryption",
    ],
  },
  {
    title: "Kiosk Management & Auto-Update System",
    client: ROOM_MATIK,
    type: "Offshore Development",
    startDate: "2025",
    technologies: [".NET WinForms", "Desktop Application"],
    description:
      "Created an innovative desktop application ecosystem for managing and updating distributed kiosk machines across multiple deployment environments.",
    achievements: [
      "Multi-Platform Support: Developed desktop updater supporting three deployment types (IIS, Node.js, executables)",
      "Automated Deployment: Engineered intelligent update system reducing manual intervention by 95%",
      "Version Management: Built comprehensive admin portal for centralized control over distributed kiosk network",
      "Error Handling: Developed robust rollback mechanisms ensuring 99.9% update success rate",
    ],
  },
  {
    title: "Traveler Registration Form Management System",
    client: ROOM_MATIK,
    type: "Offshore Development",
    startDate: "2025",
    technologies: [".NET Core Web API"],
    description:
      "Developed a comprehensive web service API to automate Spain's legal compliance requirements for traveler registration forms in hospitality and car rental industries.",
    achievements: [
      "Legal Compliance Automation: Built robust API system automating real-time traveler registration form generation and transmission",
      "Real-Time Processing: Implemented event-driven architecture handling reservation, cancellation, and check-in events",
      "Digital Document Management: Developed secure PDF generation and digital signing workflow",
      "Data Retention System: Architected secure storage solution maintaining signed forms for the legally required 3-year period",
      "Scalable Architecture: Designed system to handle high-volume concurrent requests from multiple establishments",
    ],
  },
];

// Render Projects
function renderProjects() {
  const container = document.getElementById("projectsContainer");
  projectsData
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))

    .forEach((project, index) => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
                    <div class="project-header">
                        <h3>${project.title}</h3>
                        <div class="project-meta">
                            <span>${project.type}</span>
                            <span>•</span>
                            <span>${project.startDate}</span>
                        </div>
                    </div>
                    <div class="project-content">
                        <div class="project-client">Client: ${
                          project.client
                        }</div>
                        <p class="project-desc">${project.description}</p>
                        <div class="tech-stack">
                            ${project.technologies
                              .map(
                                (tech) =>
                                  `<span class="tech-tag">${tech}</span>`,
                              )
                              .join("")}
                        </div>
                        <button class="btn btn-primary" onclick="openModal(${index})">View Details</button>
                    </div>
                `;
      container.appendChild(card);
    });
}

// Modal Functions
function openModal(index) {
  const project = projectsData[index];
  const modal = document.getElementById("projectModal");
  const modalContent = document.getElementById("modalContent");

  modalContent.innerHTML = `
                <h2 style="color: var(--primary); margin-bottom: 1rem;">${
                  project.title
                }</h2>
                <div style="color: var(--accent); margin-bottom: 2rem; font-size: 1.1rem;">
                    ${project.client} | ${project.type} | ${project.startDate}
                </div>
                <p style="color: var(--gray); margin-bottom: 2rem; line-height: 1.8;">${
                  project.description
                }</p>
                <div style="margin-bottom: 2rem;">
                    <h3 style="color: var(--primary); margin-bottom: 1rem;">Technologies</h3>
                    <div class="tech-stack">
                        ${project.technologies
                          .map(
                            (tech) => `<span class="tech-tag">${tech}</span>`,
                          )
                          .join("")}
                    </div>
                </div>
                <div>
                    <h3 style="color: var(--primary); margin-bottom: 1rem;">Key Achievements</h3>
                    <ul class="achievements">
                        ${project.achievements
                          .map((achievement) => `<li>${achievement}</li>`)
                          .join("")}
                    </ul>
                </div>
            `;

  modal.style.display = "block";
  gsap.from(".modal-content", { scale: 0.8, opacity: 0, duration: 0.3 });
}

document.querySelector(".close-modal").addEventListener("click", () => {
  document.getElementById("projectModal").style.display = "none";
});

window.addEventListener("click", (e) => {
  const modal = document.getElementById("projectModal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor
const cursorDot = document.querySelector(".cursor-dot");
document.addEventListener("mousemove", (e) => {
  gsap.to(cursorDot, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1,
  });
});

// Hero Animation
gsap.from(".hero h1", {
  opacity: 0,
  y: 100,
  duration: 1,
  delay: 0.2,
});

gsap.from(".hero h2", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.4,
});

gsap.from(".hero-desc", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.6,
});

gsap.from(".cta-buttons", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.8,
});

// Scroll Animations
gsap.utils.toArray(".skill-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 0.6,
    delay: i * 0.1,
  });
});

gsap.utils.toArray(".project-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
    },
    opacity: 0,
    scale: 0.8,
    duration: 0.6,
    delay: i * 0.1,
  });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Initialize
renderProjects();

function calculateExperienceYears() {
  const startYear = 2023;
  const now = new Date();

  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;

  if (currentMonth <= 6) {
    return currentYear - startYear;
  } else {
    return currentYear - startYear + 0.5;
  }
}
document.getElementById("experience").textContent =
  `${calculateExperienceYears()}+`;
