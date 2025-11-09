// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-co-presented-a-talk-with-prof-pietro-valdastri-at-the-iros-2025-workshop-soft-tissue-manipulation-in-robotic-surgery-titled-from-conformation-to-exploration-advancing-autonomous-robotic-manipulation-of-soft-organs-in-laparoscopy",
          title: 'I co-presented a talk with Prof. Pietro Valdastri at the IROS 2025 workshop...',
          description: "",
          section: "News",},{id: "projects-multiscale-deformable-objects-manipulation-via-wavelet-decomposed-boundary-element-method",
          title: 'Multiscale Deformable Objects Manipulation via Wavelet-Decomposed Boundary Element Method',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dwtbem/";
            },},{id: "projects-autonomous-robotic-exploration-on-unknown-soft-object",
          title: 'Autonomous Robotic Exploration on Unknown Soft Object',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/exploration/";
            },},{id: "projects-occlusion-robust-autonomous-robotic-manipulation-of-human-soft-tissues-with-3-d-surface-feedback",
          title: 'Occlusion-Robust Autonomous Robotic Manipulation of Human Soft Tissues With 3-D Surface Feedback',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gpwrm/";
            },},{
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
