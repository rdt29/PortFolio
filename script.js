// Projects Data - Easy to update!

const ROOM_MATIK = "RoomMatik (Spain)";
const CHENIERE = "Cheniere Energy (US)";
const BEFREE = "BeFree";
const GIFTCITY = "Gujarat International Finance Tec-City (GIFT City)";
const projectsData = [
  {
    title: "Cheniere Capacity Loss Evaluation and Reporting",
    client: CHENIERE,
    type: "Offshore Development",
    startDate: "September 2025",
    endDate: "Present",
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
    startDate: "June 2025",
    endDate: "September 2025",
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
    startDate: "March 2025",
    endDate: "June 2025",
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
    startDate: "January 2025",
    endDate: "March 2025",
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
  {
    title: "Contract Management System",
    client: CHENIERE,
    type: "Offshore Development",
    startDate: "June 2024",
    endDate: "January 2025",
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
    startDate: "June 2023",
    endDate: "June 2024",
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
];

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const prefersMobilePerformance = window.matchMedia(
  "(max-width: 768px), (pointer: coarse)",
).matches;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getProjectDateRange(project) {
  return `${project.startDate} - ${project.endDate}`;
}

function renderProjects() {
  const container = document.getElementById("projectsContainer");
  if (!container) return;

  container.innerHTML = "";

  projectsData.forEach((project, index) => {
    const dateRange = getProjectDateRange(project);
    const card = document.createElement("article");
    card.className = "project-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `View details for ${project.title}`);
    card.innerHTML = `
        <div class="project-header">
          <h3>${escapeHtml(project.title)}</h3>
          <div class="project-meta">
            <span>${escapeHtml(project.type)}</span>
            <span aria-hidden="true">&bull;</span>
            <span>${escapeHtml(dateRange)}</span>
          </div>
        </div>
        <div class="project-content">
          <div class="project-client">Client: ${escapeHtml(project.client)}</div>
          <p class="project-desc">${escapeHtml(project.description)}</p>
          <div class="tech-stack">
            ${project.technologies
              .map(
                (tech) => `<span class="tech-tag">${escapeHtml(tech)}</span>`,
              )
              .join("")}
          </div>
          <button class="btn btn-primary" type="button">View Details</button>
        </div>
      `;

    card.addEventListener("click", () => openModal(index));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(index);
      }
    });
    container.appendChild(card);
  });
}

function openModal(index) {
  const project = projectsData[index];
  const modal = document.getElementById("projectModal");
  const modalContent = document.getElementById("modalContent");
  if (!project || !modal || !modalContent) return;
  const dateRange = getProjectDateRange(project);

  modalContent.innerHTML = `
    <h2 class="modal-title">${escapeHtml(project.title)}</h2>
    <div class="modal-meta">
      ${escapeHtml(project.client)} | ${escapeHtml(project.type)} | ${escapeHtml(dateRange)}
    </div>
    <p class="modal-desc">${escapeHtml(project.description)}</p>
    <div class="modal-section">
      <h3>Technologies</h3>
      <div class="tech-stack">
        ${project.technologies
          .map((tech) => `<span class="tech-tag">${escapeHtml(tech)}</span>`)
          .join("")}
      </div>
    </div>
    <div class="modal-section">
      <h3>Key Achievements</h3>
      <ul class="achievements">
        ${project.achievements
          .map((achievement) => `<li>${escapeHtml(achievement)}</li>`)
          .join("")}
      </ul>
    </div>
  `;

  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  modal.querySelector(".close-modal").focus();

  if (
    !prefersReducedMotion &&
    !prefersMobilePerformance &&
    typeof gsap !== "undefined"
  ) {
    gsap.fromTo(
      ".modal-content",
      { scale: 0.94, opacity: 0, y: 24 },
      { scale: 1, opacity: 1, y: 0, duration: 0.35, ease: "power3.out" },
    );
  }
}

function closeModal() {
  const modal = document.getElementById("projectModal");
  if (!modal) return;

  modal.style.display = "none";
  document.body.style.overflow = "";
}

function calculateExperienceYears() {
  const startYear = 2023;
  const now = new Date();

  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;

  if (currentMonth <= 5) {
    return currentYear - startYear;
  } else {
    return currentYear - startYear + 0.5;
  }
}

function setupNavigation() {
  const nav = document.querySelector("nav");
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  const anchors = document.querySelectorAll(
    '.nav-links a[href^="#"], .logo[href^="#"]',
  );
  const sections = [...document.querySelectorAll("section[id]")];

  function closeMenu() {
    links?.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  }

  toggle?.addEventListener("click", () => {
    const isOpen = links?.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
  });

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior:
          prefersReducedMotion || prefersMobilePerformance ? "auto" : "smooth",
        block: "start",
      });
      closeMenu();
    });
  });

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        nav?.classList.toggle("scrolled", window.scrollY > 12);
        ticking = false;
      });
    },
    { passive: true },
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        document.querySelectorAll(".nav-links a").forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`,
          );
        });
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
  );

  sections.forEach((section) => observer.observe(section));
}

function setupAnimations() {
  if (
    prefersReducedMotion ||
    prefersMobilePerformance ||
    typeof gsap === "undefined"
  )
    return;

  gsap.registerPlugin(ScrollTrigger);

  const cursorDot = document.querySelector(".cursor-dot");
  document.addEventListener("mousemove", (event) => {
    gsap.to(cursorDot, {
      x: event.clientX,
      y: event.clientY,
      duration: 0.18,
      ease: "power2.out",
    });
  });

  gsap.from(".hero h1", {
    opacity: 0,
    y: 80,
    duration: 1,
    delay: 0.18,
    ease: "power4.out",
  });

  gsap.from(".hero h2", {
    opacity: 0,
    y: 36,
    duration: 0.9,
    delay: 0.32,
    ease: "power3.out",
  });

  gsap.from(".hero-desc", {
    opacity: 0,
    y: 28,
    duration: 0.9,
    delay: 0.44,
    ease: "power3.out",
  });

  gsap.from(".cta-buttons", {
    opacity: 0,
    y: 24,
    duration: 0.8,
    delay: 0.56,
    ease: "power3.out",
  });

  gsap.to(".hero .container", {
    yPercent: -8,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.utils.toArray(".section-title").forEach((title) => {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: "top 82%",
      },
      opacity: 0,
      y: 34,
      duration: 0.75,
      ease: "power3.out",
    });
  });

  gsap.utils
    .toArray(".skill-card, .project-card, .experience, .contact-content")
    .forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 84%",
        },
        opacity: 0,
        y: 44,
        scale: 0.98,
        duration: 0.75,
        delay: (index % 3) * 0.08,
        ease: "power3.out",
      });
    });

  document
    .querySelectorAll(".project-card, .skill-card, .contact-item")
    .forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * -8;
        gsap.to(card, {
          rotateX: y,
          rotateY: x,
          transformPerspective: 900,
          duration: 0.35,
        });
      });

      card.addEventListener("pointerleave", () => {
        gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.35 });
      });
    });
}

function setupModalEvents() {
  document.querySelector(".close-modal")?.addEventListener("click", closeModal);

  window.addEventListener("click", (event) => {
    const modal = document.getElementById("projectModal");
    if (event.target === modal) {
      closeModal();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}

function initialize() {
  renderProjects();

  const experienceYears = document.getElementById("experienceYears");
  if (experienceYears) {
    experienceYears.textContent = `${calculateExperienceYears()}+`;
  }

  setupNavigation();
  setupModalEvents();
  setupAnimations();
}

initialize();
