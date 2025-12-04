export const WhiteLabelConfig = {
  appName: "OrlandoTrip",
  hotelName: "Orlando Hotel",
  appLogo: require("../assets/icon/logo.png"),
  tagline: "Your complete resource for exploring Orlando",

  hero: {
    titleSuffix: " Guide",
    gradientColors: ["#0EA5E9", "#1E40AF"],
    categoryColor: "#38BDF8",               
    backgroundColor: "#1E3A8A",            
  },

  footer: {
    gradientColors: ["#1E40AF", "#1E3A8A"],
    backgroundColor: "#EFF6FF",            
  },

  colors: {
    primary: "#1E3A8A",            
    secondary: "#0EA5E9",          
    accent: "#38BDF8",             
    background: "#FFFFFF",
    headerBackground: "#FFFFFF",
    headerBorder: "#DBEAFE",
    text: "#1E293B",
    mutedText: "#6B7280",
    button: "#0EA5E9",             
    buttonText: "#FFFFFF",
    drawerButtonBackground: "#E0F2FE", 
  },

  fonts: {
    regular: "System",
    medium: "System",
    bold: "System",
    sizes: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 24,
      title: 30,
    },
  },

  theme: {
    isDark: false,
  },

  components: {
    button: {
      radius: 10,
      paddingH: 18,
      paddingV: 10,
    },
    card: {
      radius: 14,
      shadow: true,
      background: "#FFFFFF",
    },
  },
};
