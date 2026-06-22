/**
 * ============================================================
 *  LEADHAUS SITE CONFIG
 *  ✏️  Edit this file to update content across the whole site.
 *  Changes here automatically reflect in nav, footer, hero, etc.
 * ============================================================
 */
const SITE = {

  // ── Brand ──────────────────────────────────────────────────
  brand: {
    name:    "Leadhaus",        // Used in <title>, nav, footer
    tagline: "CRM by TGG · Est. 2026",
    appUrl:  "https://leadhaus.thegermanguy.org/app",   // Your CRM app URL
    tggUrl:  "https://thegermanguy.org/it-consulting",
  },

  // ── SEO / Meta ─────────────────────────────────────────────
  meta: {
    title:       "Leadhaus – CRM for Educational Consultancies",
    description: "Leadhaus is the all-in-one CRM built for educational consultancies. Manage students, applications, payments, and team – all in one place.",
  },

  // ── Footer ─────────────────────────────────────────────────
  //  ✏️  EDIT THIS to update footer description site-wide
  footer: {
    description: "The all-in-one CRM platform built exclusively for educational consultancies. Manage students, track applications, collect payments, and grow your business — all from one place.",
    credit:      "A product by The German Guy (TGG) · Est. 2026",
    links: {
      privacy: "#",
      terms:   "#",
    },
  },

  // ── Navigation links ───────────────────────────────────────
  nav: [
    { label: "Features",        href: "#features"  },
    { label: "Student Journey", href: "#journey"   },
    { label: "Pricing",         href: "#pricing"   },
    { label: "About TGG",       href: "https://thegermanguy.org/it-consulting", external: true },
  ],

  // ── Hero section ───────────────────────────────────────────
  hero: {
    heading:   "The CRM Built for",
    highlight: "Educational Consultancies",
    subtext:   "Manage students, track applications, collect payments, and grow your consultancy, all from one powerful platform built specifically for education professionals.",
    trust:     ["Built for consultancies", "30-day free trial", "No credit card required"],
  },

  // ── Stats bar ──────────────────────────────────────────────
  stats: [
    { num: "100+", label: "Study Fields Supported"  },
    { num: "5",   label: "Subscription Tiers"      },
    { num: "30",  label: "Day Free Trial"           },
    { num: "∞",   label: "Universities to Partner" },
  ],

  // ── Features ───────────────────────────────────────────────
  features: [
    {
      icon: "🎓", iconBg: "fi-blue",
      title: "Student Management",
      desc: "Register and manage all your students in one place. Track journey status, assigned counselor, payment status, and registration history.",
    },
    {
      icon: "📄", iconBg: "fi-orange",
      title: "Application Tracking",
      desc: "Monitor every application from initial submission through to university decision. Know exactly where each student stands at a glance.",
    },
    {
      icon: "🗺️", iconBg: "fi-white",
      title: "Student Journey Pipeline",
      desc: "Visual pipeline showing all students across every stage: Initial Inquiry, Applied, Conditional Offer, Visa Applied, Arrived, and more.",
      featured: true,
    },
    {
      icon: "💳", iconBg: "fi-green",
      title: "Payment Management",
      desc: "Track consultancy fees, visa fees, and other charges. Get instant visibility into overdue, partial, and pending payments per student.",
    },
    {
      icon: "🏛️", iconBg: "fi-purple",
      title: "Partner University Network",
      desc: "Maintain a database of your partner universities with intake periods, available programs, and referral tracking built in.",
    },
    {
      icon: "👥", iconBg: "fi-teal",
      title: "Team Management",
      desc: "Invite team members, assign students to counselors, and manage access roles. Scale your team without losing visibility.",
    },
  ],

  // ── Journey stages ─────────────────────────────────────────
  journey: {
    heading: "Track every step of the student lifecycle",
    subtext: "Leadhaus maps the full journey from first inquiry to arrival, giving you and your team complete clarity at every stage.",
    steps: [
      { title: "Initial Inquiry",       desc: "Capture and qualify new student leads as they come in.",              active: true  },
      { title: "Collecting Documents",  desc: "Gather required academic and personal documents efficiently."                       },
      { title: "Referred to Partner",   desc: "Submit applications to partner universities."                  },
      { title: "Applied",               desc: "Track application status directly with the university."                             },
      { title: "Offer → Visa → Payment → Arrival",desc: "Manage offers, visa process, and confirm student arrival."                         },
    ],
    pipeline: [
      { label: "Initial Inquiry",      count: 5,  width: "55%",  color: "#94a3b8" },
      { label: "Collecting Docs",      count: 1,  width: "11%",  color: "#38bdf8" },
      { label: "Referred to Partner",  count: 0,  width: "5%",   color: "#5598d5" },
      { label: "Applied",              count: 9,  width: "100%", color: "#6366f1" },
      { label: "Conditional Offer",    count: 3,  width: "33%",  color: "#f59e0b" },
      { label: "Unconditional Offer",  count: 3,  width: "33%",  color: "#22c55e" },
      { label: "Visa Applied",         count: 5,  width: "55%",  color: "#8b5cf6" },
      { label: "Visa Approved",        count: 1,  width: "75%",  color: "#10b981" },
      { label: "Arrived",              count: 0,  width: "10%",   color: "#15e07e" },
    ],
  },
    // ── Tutorials (YouTube) ────────────────────────────────────
  //  ✏️  Add a new object to `videos` for every new tutorial you publish.
  //      youtubeId is the part after "watch?v=" in the YouTube URL,
  //      e.g. for https://www.youtube.com/watch?v=dQw4w9WgXcQ it's "dQw4w9WgXcQ"
  tutorials: {
    heading: "See Leadhaus in Action",
    subtext: "Short video walkthroughs to help you and your team get up and running fast.",
    videos: [
      {
        title:     "How to Sign Up for Leadhaus",
        desc:      "A quick walkthrough of creating your Leadhaus account and getting started.",
        youtubeId: "https://youtu.be/7Jn5Lkz1SDc", // ✏️ paste the real YouTube video ID here
      },
      // Add more as they go live, e.g.:
      // {
      //   title:     "Adding Your First Student",
      //   desc:      "Learn how to register and manage students inside Leadhaus.",
      //   youtubeId: "ANOTHER_VIDEO_ID",
      // },
    ],
  },

  // ── Pricing plans ──────────────────────────────────────────
  plans: [
    {
      name: "Free Trial",
      desc: "Try Leadhaus with limited features",
      monthly: "€0", yearly: "€0",
      limit: "25 students",
      features: ["Student management", "Basic support", "Email notifications", "30-day trial period"],
      cta: { label: "Get Started Free", href: "https://leadhaus.thegermanguy.org/app", style: "outline" },
    },
    {
      name: "Starter",
      desc: "Perfect for small consultancies",
      monthly: "€25", yearly: "€20",
      limit: "100 students",
      features: ["All Free features", "Priority support", "Advanced analytics", "API access"],
      cta: { label: "Start Free Trial", href: "https://leadhaus.thegermanguy.org/app", style: "outline" },
    },
    {
      name: "Professional",
      desc: "For growing consultancies",
      monthly: "€100", yearly: "€75",
      limit: "500 students",
      popular: true,
      features: ["All Starter features", "Dedicated support", "Custom branding", "Bulk operations", "Advanced reporting"],
      cta: { label: "Start Free Trial", href: "https://leadhaus.thegermanguy.org/app", style: "filled" },
    },
    {
      name: "Business",
      desc: "For established consultancies",
      monthly: "€150", yearly: "€105",
      limit: "1000 students",
      features: ["All Professional features", "Dedicated support", "Custom branding", "Custom integration"],
      cta: { label: "Start Free Trial", href: "https://leadhaus.thegermanguy.org/app", style: "outline" },
    },
    {
      name: "Enterprise",
      desc: "Unlimited students for large organizations",
      monthly: "€450", yearly: "€270",
      limit: "Unlimited students",
      features: ["Unlimited students", "24/7 dedicated support", "White-label solution", "SLA guarantee", "Custom integrations"],
      cta: { label: "Apply Now", href: "https://leadhaus.thegermanguy.org/app", style: "outline", external: true },
    },
  ],

  // ── Testimonials ───────────────────────────────────────────
  testimonials: [
    {
      text:   "Leadhaus completely transformed how we manage our student pipeline. Having everything — from initial inquiry to visa — in one place saves us hours every week.",
      name:   "Ravi K.",
      role:   "Director, Global Study Consultancy",
      initials: "RK",
      color:  "var(--navy)",
    },
    {
      text:   "The payment tracking feature alone is worth it. We used to chase payments in spreadsheets — now everything is clear, with overdue alerts and status at a glance.",
      name:   "Sita M.",
      role:   "Founder, Abroad Pathways",
      initials: "SM",
      color:  "var(--blue)",
    },
    {
      text:   "As a small consultancy, we needed something affordable and powerful. The Starter plan fits perfectly, and the journey pipeline gives our team clarity on every student.",
      name:   "Ankit P.",
      role:   "Manager, EduBridge Consulting",
      initials: "AP",
      color:  "#7c3aed",
    },
  ],

  // ── CTA Strip ──────────────────────────────────────────────
  cta: {
    heading: "Ready to grow your consultancy?",
    subtext: "Start your 30-day free trial today. No credit card required. Built by TGG for education professionals.",
  },

  // ── Footer columns ─────────────────────────────────────────
  footerCols: [
    {
      heading: "Product",
      links: [
        { label: "Features",        href: "#features" },
        { label: "Student Journey", href: "#journey"  },
        { label: "Pricing",         href: "#pricing"  },
        { label: "Login",           href: "https://leadhaus.thegermanguy.org/app" },
      ],
    },
    {
      heading: "Platform",
      links: [
        { label: "Student Management",    href: "#features" },
        { label: "Payment Tracking",      href: "#features" },
        { label: "Team Management",       href: "#features" },
        { label: "University Network",    href: "#features" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About TGG",     href: "https://thegermanguy.org/it-consulting", external: true },
        { label: "IT Consulting", href: "https://thegermanguy.org/it-consulting", external: true },
        { label: "Contact",       href: "mailto:leadhaus@thegermanguy.org" },
      ],
    },
  ],
};