interface theme {
  name: string;
  colors: {
    accent: string;
    decoration: string;
    mainBackground: string;
    decorationBackground: string;
    main: string;
    white: string;
    navbarText: string;
    subHeading: string;
    evenSection: string;
    oddSection: string;
    projectsDescription: string;
  };
}

export const dark: theme = {
  name: "main-theme",
  colors: {
    accent: "#ec7955",
    decoration: "#e0fbfc",
    mainBackground: "#3d5a80",
    decorationBackground: "#98c1d9",
    main: "#293241",
    white: "#ffffff",
    navbarText: "#ffffff",
    subHeading: "#ffffff",
    evenSection: "#293241",
    oddSection: "ffffff",
    projectsDescription: "#ffffff",
  },
};

export const light: theme = {
  name: "light-theme",
  colors: {
    accent: "#ec7955",
    decoration: "#293241",
    mainBackground: "#e0fbfc",
    decorationBackground: "#ffffff",
    main: "#ffffff",
    white: "#ffffff",
    navbarText: "#293241",
    subHeading: "#3d5a80",
    evenSection: "ffffff",
    oddSection: "#293241",
    projectsDescription: "#293241",
  },
};
