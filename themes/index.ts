const theme = {
    primary: "#DA6D3A",
    secondary: "#9747FF",
    tertiary: "#F5E47C",
    quaternary: "#000000",
    quintary: "#FFFFFF",
    inactive: "#585858",
    appBackground: "#F7F8FA",

    
} as ThemeType


export interface ThemeType {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    quintary: string;
    inactive: string;
    appBackground: string;
}

export default theme;