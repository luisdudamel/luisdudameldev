interface theme {
  name: string;
  colors: {
    orange: string;
    lightblue: string;
    darkblue: string;
    midblue: string;
    dark: string;
    white: string;
  };
}

export const dark: theme = {
  name: "dark-theme",
  colors: {
    orange: "#ec7955",
    lightblue: "#e0fbfc",
    darkblue: "#3d5a80",
    midblue: "#98c1d9",
    dark: "#293241",
    white: "#ffffff",
  },
};

export const light = {
  name: "light-theme",
  colors: {
    background: "#293241",
  },
};
