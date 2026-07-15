// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Peer-reviewed work on static analysis, program analysis, and software security, in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Open-source software for code intelligence, static analysis, and coding agents.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-writing",
          title: "Writing",
          description: "Selected writing on code intelligence, static analysis, coding agents, and earlier program-analysis research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Experience, education, open-source work, and academic background.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "University courses I have taught or helped deliver.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "projects-anvil",
          title: 'Anvil',
          description: "A reusable Rust agent backend that gives editors, bots, terminal interfaces, and internal tools the same Agent Client Protocol runtime.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/anvil.html";
            },},{id: "projects-bifrost",
          title: 'Bifrost',
          description: "Multi-language static analysis that gives coding agents and developer tools a structural view of real repositories, even when the code does not build.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bifrost.html";
            },},{id: "projects-joern",
          title: 'Joern',
          description: "An open-source code-analysis platform based on code property graphs, with contributions across language frontends and analysis infrastructure.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/joern.html";
            },},{id: "projects-plume",
          title: 'Plume',
          description: "A graph-database-agnostic JVM bytecode frontend and benchmarking suite for code property graph research.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/plume.html";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/DavidBakerEffendi", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/david-baker-effendi-26584bb9", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-4942-626X", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=c8cUcHsAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/SDBakerEffendi", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
