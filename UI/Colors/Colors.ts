export type ThemeColors = {
    primary: string;
    secondary: string;
    tertiary: string;
    teal: string;
    danger: string;
    warning: string;
    success: string;
    info: string;
    black: string;
    white: string;
    grayLight: string;
    grayDark: string;
};

export const themeColors: ThemeColors = {
    primary: '#57CC99',        // Emerald - main action color
    secondary: '#22577A',      // Lapis Lazuli - dark blue accent
    tertiary: '#80ED99',       // Light green - soft accent
    teal: '#38A3A5',           // Verdigris - supporting color
    danger: '#E74C3C',         // Professional red for errors
    warning: '#F39C12',        // Professional orange for warnings
    success: '#27AE60',        // Professional green for success
    info: '#3498DB',           // Professional blue for info
    black: '#000000',
    white: '#FFFFFF',
    grayLight: '#F8F9FA',
    grayDark: '#34495E',
}

// Dark mode palette stays in the same family but shifts deeper
export const darkThemeColors: ThemeColors = {
    primary: '#2E8B68',       // Deep emerald
    secondary: '#1B4B64',     // Deep lapis
    tertiary: '#4FA779',      // Muted soft green
    teal: '#2B7A80',          // Darker teal
    danger: '#C0392B',        // Darker red
    warning: '#D9822B',       // Muted orange
    success: '#1F7A50',       // Deep green
    info: '#2B6AA4',          // Darker blue
    black: '#0B1220',
    white: '#ffffff',         // Soft mint white for contrast
    grayLight: '#1F2933',
    grayDark: '#0F172A',
}