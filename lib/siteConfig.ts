// ============================================================
// CENTRAL CONTENT CONFIGURATION
// Update all text, links, prices, and features from this file
// ============================================================

export const siteConfig = {
  brand: {
    name: "Leadhaus",
    tagline: "CRM by TGG · Est. 2026",
    logo: "/leadhaus-logo.png",
    logoAlt: "Leadhaus Logo",
    description:
      "The all-in-one CRM platform built exclusively for educational consultancies.",
  },

  nav: {
    links: [
      { label: "Features", href: "#features" },
      { label: "Student Journey", href: "#student-journey" },
      { label: "Tutorials", href: "#tutorials" },
      { label: "Pricing", href: "#pricing" },
      {
        label: "About TGG",
        href: "https://thegermanguy.org",
        external: true,
      },
    ],
    ctas: [
      { label: "View Plans", href: "#pricing", variant: "ghost" },
      { label: "Get Started Free", href: "/app/register", variant: "primary" },
    ],
  },

  hero: {
    badge: "CRM by TGG · Est. 2026",
    headlinePre: "The CRM Built for",
    headlineHighlight: "Educational Consultancies",
    subtext:
      "Manage students, track applications, collect payments, and grow your consultancy, all from one powerful platform built specifically for education professionals.",
    ctas: [
      { label: "Start Free Trial →", href: "/app/register", variant: "primary" },
      { label: "See How It Works", href: "#features", variant: "outline" },
    ],
    trustBadges: [
      "Built for consultancies",
      "30-day free trial",
      "No credit card required",
    ],
  },

  stats: [
    { value: "100+", label: "Study Fields Supported" },
    { value: "5", label: "Subscription Tiers" },
    { value: "30 Day", label: "Free Trial" },
    { value: "∞", label: "Universities to Partner" },
  ],

  features: [
    {
      id: "student-management",
      icon: "Users",
      title: "Student Management",
      description:
        "Register and manage all your students in one place. Track journey status, assigned counselor, payment status, and registration history.",
      featured: false,
      color: "electric",
    },
    {
      id: "application-tracking",
      icon: "FileText",
      title: "Application Tracking",
      description:
        "Monitor every application from initial submission through to university decision. Know exactly where each student stands at a glance.",
      featured: false,
      color: "sky",
    },
    {
      id: "student-journey-pipeline",
      icon: "Map",
      title: "Student Journey Pipeline",
      description:
        "Visual pipeline showing all students across every stage: Initial Inquiry, Applied, Conditional Offer, Visa Applied, Arrived, and more.",
      featured: true,
      color: "purple",
    },
    {
      id: "payment-management",
      icon: "CreditCard",
      title: "Payment Management",
      description:
        "Track consultancy fees, visa fees, and other charges. Get instant visibility into overdue, partial, and pending payments per student.",
      featured: false,
      color: "green",
    },
    {
      id: "partner-university-network",
      icon: "Building2",
      title: "Partner University Network",
      description:
        "Maintain a database of your partner universities with intake periods, available programs, and referral tracking built in.",
      featured: false,
      color: "amber",
    },
    {
      id: "team-management",
      icon: "Shield",
      title: "Team Management",
      description:
        "Invite team members, assign students to counselors, and manage access roles. Scale your team without losing visibility.",
      featured: false,
      color: "electric",
    },
  ],

  studentJourney: {
    stages: [
      { id: 1, label: "Initial Inquiry", desc: "Capture and qualify new student leads as they come in.", active: true },
      { id: 2, label: "Collecting Documents", desc: "Gather required academic and personal documents efficiently.", active: false },
      { id: 3, label: "Referred to Partner", desc: "Submit applications to partner universities.", active: false },
      { id: 4, label: "Applied", desc: "Track application status directly with the university.", active: false },
      { id: 5, label: "Offer → Visa → Payment → Arrival", desc: "Manage offers, visa process, and confirm student arrival.", active: false },
    ],
    pipeline: [
      { stage: "Initial Inquiry", count: 5, total: 9, color: "#2563eb" },
      { stage: "Collecting Docs", count: 1, total: 9, color: "#8b5cf6" },
      { stage: "Referred to Partner", count: 0, total: 9, color: "#f59e0b" },
      { stage: "Applied", count: 9, total: 9, color: "#22c55e" },
      { stage: "Conditional Offer", count: 3, total: 9, color: "#4a90d9" },
      { stage: "Unconditional Offer", count: 3, total: 9, color: "#eab308" },
      { stage: "Visa Applied", count: 5, total: 9, color: "#ec4899" },
      { stage: "Visa Approved", count: 1, total: 9, color: "#14b8a6" },
      { stage: "Arrived", count: 0, total: 9, color: "#6366f1" },
    ],
  },

  pricing: {
    monthly: [
      {
        id: "free",
        name: "Free Trial",
        price: "€0",
        period: "/mo",
        limit: "25 students",
        featured: false,
        cta: { label: "Get Started Free", href: "/app/register", variant: "outline" },
        features: [
          "25 Students",
          "Basic Support",
          "Student Management",
          "Email Notifications",
          "30-Day Trial",
        ],
        badge: null,
      },
      {
        id: "starter",
        name: "Starter",
        price: "€25",
        period: "/mo",
        limit: "100 students",
        featured: false,
        cta: { label: "Start Free Trial", href: "/app/register", variant: "outline" },
        features: [
          "100 Students",
          "Priority Support",
          "Advanced Analytics",
          "API Access",
          "All Free Features",
        ],
        badge: null,
      },
      {
        id: "professional",
        name: "Professional",
        price: "€100",
        period: "/mo",
        limit: "500 students",
        featured: true,
        cta: { label: "Start Free Trial", href: "/app/register", variant: "primary" },
        features: [
          "500 Students",
          "Dedicated Support",
          "Custom Branding",
          "Bulk Operations",
          "Advanced Reporting",
          "All Starter Features",
        ],
        badge: "Most Popular",
      },
      {
        id: "business",
        name: "Business",
        price: "€150",
        period: "/mo",
        limit: "1000 students",
        featured: false,
        cta: { label: "Start Free Trial", href: "/app/register", variant: "outline" },
        features: [
          "1000 Students",
          "Custom Branding",
          "Dedicated Support",
          "Custom Integrations",
          "All Professional Features",
        ],
        badge: null,
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: "€450",
        period: "/mo",
        limit: "Unlimited students",
        featured: false,
        cta: {
          label: "Apply Now",
          href: "https://thegermanguy.org/it-consulting",
          variant: "outline",
          external: true,
        },
        features: [
          "Unlimited Students",
          "White-Label Solutions",
          "24/7 Dedicated Support",
          "SLA Guarantee",
          "All Business Features",
        ],
        badge: null,
      },
    ],
    yearly: [
      {
        id: "free",
        name: "Free Trial",
        price: "€0",
        period: "/mo (billed yearly)",
        limit: "25 students",
        featured: false,
        cta: { label: "Get Started Free", href: "/app/register", variant: "outline" },
        features: [
          "25 Students",
          "Basic Support",
          "Student Management",
          "Email Notifications",
          "30-Day Trial",
        ],
        badge: null,
      },
      {
        id: "starter",
        name: "Starter",
        price: "€20",
        period: "/mo (billed yearly)",
        limit: "100 students",
        featured: false,
        cta: { label: "Start Free Trial", href: "/app/register", variant: "outline" },
        features: [
          "100 Students",
          "Priority Support",
          "Advanced Analytics",
          "API Access",
          "All Free Features",
        ],
        badge: null,
      },
      {
        id: "professional",
        name: "Professional",
        price: "€75",
        period: "/mo (billed yearly)",
        limit: "500 students",
        featured: true,
        cta: { label: "Start Free Trial", href: "/app/register", variant: "primary" },
        features: [
          "500 Students",
          "Dedicated Support",
          "Custom Branding",
          "Bulk Operations",
          "Advanced Reporting",
          "All Starter Features",
        ],
        badge: "Most Popular",
      },
      {
        id: "business",
        name: "Business",
        price: "€105",
        period: "/mo (billed yearly)",
        limit: "1000 students",
        featured: false,
        cta: { label: "Start Free Trial", href: "/app/register", variant: "outline" },
        features: [
          "1000 Students",
          "Custom Branding",
          "Dedicated Support",
          "Custom Integrations",
          "All Professional Features",
        ],
        badge: null,
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: "€270",
        period: "/mo (billed yearly)",
        limit: "Unlimited students",
        featured: false,
        cta: {
          label: "Apply Now",
          href: "https://thegermanguy.org/it-consulting",
          variant: "outline",
          external: true,
        },
        features: [
          "Unlimited Students",
          "White-Label Solutions",
          "24/7 Dedicated Support",
          "SLA Guarantee",
          "All Business Features",
        ],
        badge: null,
      },
    ],
  },

  tutorials: [
    {
      id: "signup",
      title: "How to Sign Up for Leadhaus",
      description:
        "Learn how to create your Leadhaus account, set up your consultancy profile, and onboard your first students in under 10 minutes.",
      youtubeId: "7Jn5Lkz1SDc",
    },
  ],

  testimonials: [
    {
      id: 1,
      stars: 5,
      quote:
        "Leadhaus completely transformed how we manage our student pipeline. Having everything — from initial inquiry to visa — in one place saves us hours every week.",
      name: "Ravi K.",
      role: "Director, Global Study Consultancy",
      initials: "RK",
      color: "#2563eb",
    },
    {
      id: 2,
      stars: 5,
      quote:
        "The payment tracking feature alone is worth it. We used to chase payments in spreadsheets — now everything is clear, with overdue alerts and status at a glance.",
      name: "Sita M.",
      role: "Founder, Abroad Pathways",
      initials: "SM",
      color: "#8b5cf6",
    },
    {
      id: 3,
      stars: 5,
      quote:
        "As a small consultancy, we needed something affordable and powerful. The Starter plan fits perfectly, and the journey pipeline gives our team clarity on every student.",
      name: "Ankit P.",
      role: "Manager, EduBridge Consulting",
      initials: "AP",
      color: "#22c55e",
    },
  ],

  cta: {
    title: "Ready to grow your consultancy?",
    subtitle:
      "Start your 30-day free trial today. No credit card required. Built by TGG for education professionals.",
    buttons: [
      { label: "Start Free Trial →", href: "/app/register", variant: "white" },
      {
        label: "Meet the TGG Team",
        href: "https://thegermanguy.org/it-consulting",
        variant: "outline-white",
        external: true,
      },
    ],
  },

  footer: {
    description:
      "The all-in-one CRM platform built exclusively for educational consultancies. Manage students, track applications, collect payments, and grow your business — all from one place.\n\nA product by The German Guy (TGG) · Est. 2026",
    columns: [
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Student Journey", href: "#student-journey" },
          { label: "Tutorials", href: "#tutorials" },
          { label: "Pricing", href: "#pricing" },
          { label: "Login", href: "/app/login" },
        ],
      },
      {
        heading: "Platform",
        links: [
          { label: "Student Management", href: "#features" },
          { label: "Payment Tracking", href: "#features" },
          { label: "Team Management", href: "#features" },
          { label: "University Network", href: "#features" },
        ],
      },
      {
        heading: "Company",
        links: [
          {
            label: "About TGG",
            href: "https://thegermanguy.org",
            external: true,
          },
          {
            label: "IT Consulting",
            href: "https://thegermanguy.org/it-consulting",
            external: true,
          },
          { label: "Contact", href: "mailto:hello@thegermanguy.org" },
        ],
      },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};
