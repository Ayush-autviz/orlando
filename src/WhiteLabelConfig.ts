export const WhiteLabelConfig = {
  appName: "Tripzy",
  hotelName: "Orlando Hotel",
  appLogo: require("../assets/icon/tripzyLogo.png"),
  tagline: "Your complete resource for exploring Tripzy",

  hero: {
    titleSuffix: " Guide",
    gradientColors: ["#1FC6E1", "#158DA1"],
    categoryColor: "#116C7B",               
    backgroundColor: "#1E3A8A",            
  },

  footer: {
    gradientColors: ["#1E40AF", "#1E3A8A"],
    backgroundColor: "#EFF6FF",            
  },

  colors: {
    primary: "#116C7B",            
    secondary: "#116C7B",          
    accent: "#116C7B",             
    background: "#FFFFFF",
    headerBackground: "#FFFFFF",
    headerBorder: "#DBEAFE",
    text: "#116C7B",
    mutedText: "#6B7280",
    button: "#116C7B",             
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
