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
          title: '🎤 I co-presented a talk with Prof. Pietro Valdastri at the IROS 2025...',
          description: "",
          section: "News",},{id: "news-thrilled-to-announce-that-i-have-successfully-passed-my-phd-viva-and-i-am-going-to-be-a-research-fellow-in-medical-robotics-at-stormlab",
          title: '🎓 Thrilled to announce that I have successfully passed my PhD viva! And...',
          description: "",
          section: "News",},{id: "news-autonomous-robotic-exploration-on-unknown-soft-object-has-been-accepted-by-the-international-journal-of-robotics-research-ijrr",
          title: '🎉 “Autonomous Robotic Exploration on Unknown Soft Object“ has been accepted by the...',
          description: "",
          section: "News",},{id: "news-multiscale-deformable-objects-manipulation-via-wavelet-decomposed-boundary-element-method-has-been-accepted-by-the-international-journal-of-robotics-research-ijrr",
          title: '🎉 “Multiscale Deformable Objects Manipulation via Wavelet-Decomposed Boundary Element Method“ has been accepted...',
          description: "",
          section: "News",},{id: "news-our-university-of-leeds-team-received-the-champion-award-for-task-1-safe-needle-picking-and-the-best-demo-award-for-task-3-vessel-clipping-at-autosurg-2026-part-of-the-mrc-hamlyn-workshop-in-london",
          title: '🏆 Our University of Leeds team received the Champion Award for Task 1:...',
          description: "",
          section: "News",},{id: "news-our-paper-hybrid-geometric-and-latent-shape-servoing-for-autonomous-gallbladder-exposure-is-featured-at-biorob-2026-august-1-4-edmonton-canada-read-the-paper-on-ieee-xplore",
          title: '📄 Our paper, Hybrid Geometric and Latent Shape Servoing for Autonomous Gallbladder Exposure,...',
          description: "",
          section: "News",},{id: "news-new-preprint-cadet-causal-aware-deformation-transmission-for-indirect-robotic-manipulation-of-soft-tissue-explore-the-project-page-and-experiment-videos-or-read-the-paper-on-arxiv",
          title: '📄 New preprint: CADeT: Causal-Aware Deformation Transmission for Indirect Robotic Manipulation of Soft...',
          description: "",
          section: "News",},{id: "news-our-paper-autonomous-robotic-exploration-of-unknown-soft-objects-is-featured-on-the-cover-of-the-international-journal-of-robotics-research-volume-45-issue-12-october-2026",
          title: '🎉 Our paper, “Autonomous robotic exploration of unknown soft objects”, is featured on...',
          description: "",
          section: "News",},{id: "projects-cadet",
          title: 'CADeT',
          description: "Causal-Aware Deformation Transmission for Indirect Robotic Manipulation of Soft Tissue",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cadet/";
            },},{id: "projects-multiscale-deformable-objects-manipulation-via-wavelet-decomposed-boundary-element-method",
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
