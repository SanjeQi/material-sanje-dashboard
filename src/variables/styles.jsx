// ##############################
// // // Variables
// #############################

const drawerWidth = 260;

// ##############################
// // // App styles
// #############################

const appStyle = theme => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh"
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    WebkitTransition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
    MozTransition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
    OTransition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
    MsTransition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
    transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
    maxHeight: "100%"
  },
  content: {
    marginTop: "70px",
    padding: "30px 15px",
    minHeight: "calc(100% - 123px)"
  }
});

// ##############################
// // // Sidebar styles
// #############################

const sidebarStyle = theme => ({
  drawerPaper: {
    border: "none",
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    zIndex: "1",
    boxShadow:
      "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      position: "fixed",
      height: "100%"
    },
    [theme.breakpoints.down("md")]: {
      width: drawerWidth,
      boxShadow:
        "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
      position: "fixed",
      display: "block",
      top: "0",
      height: "100vh",
      right: "0",
      left: "auto",
      zIndex: "1032",
      visibility: "visible",
      // backgroundColor: '#9A9A9A',
      overflowY: "visible",
      borderTop: "none",
      textAlign: "left",
      paddingRight: "0px",
      paddingLeft: "0",
      WebkitTransform: "translate3d(260px, 0, 0)",
      MozTransform: "translate3d(260px, 0, 0)",
      OTransform: "translate3d(260px, 0, 0)",
      MsTransform: "translate3d(260px, 0, 0)",
      transform: "translate3d(260px, 0, 0)",
      WebkitTransition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
      MozTransition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
      OTransition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
      MsTransition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
      transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
    }
  }
});

// ##############################
// // // Header styles
// #############################

const headerStyle = theme => ({
  popperClose: {
    pointerEvents: "none"
  },
  appBar: {
    top: "-20px",
    backgroundColor: "transparent",
    boxShadow: "none",
    borderBottom: "0",
    marginBottom: "0",
    position: "absolute",
    width: "100%",
    paddingTop: "10px",
    zIndex: "1029",
    color: "#555555",
    border: "0",
    borderRadius: "3px",
    padding: "10px 0",
    WebkitTransition: "all 150ms ease 0s",
    MozTransition: "all 150ms ease 0s",
    OTransition: "all 150ms ease 0s",
    MsTransition: "all 150ms ease 0s",
    transition: "all 150ms ease 0s",
    minHeight: "50px",
    display: "block"
  },
  toolbar: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto"
  },
  flex: {
    flex: 1
  },
  title: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    "&:hover,&:focus": {
      background: "transparent"
    }
  },
  links: {
    width: "20px",
    height: "20px"
  },
  top: {
    top: "-6px"
  },
  dropdown: {
    borderRadius: "3px",
    border: "0",
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
    top: "100%",
    zIndex: "1000",
    minWidth: "160px",
    padding: "5px 0",
    margin: "2px 0 0",
    fontSize: "14px",
    textAlign: "left",
    listStyle: "none",
    backgroundColor: "#fff",
    WebkitBackgroundClip: "padding-box",
    backgroundClip: "padding-box"
  },
  dropdownItem: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: "13px",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "2px",
    WebkitTransition: "all 150ms linear",
    MozTransition: "all 150ms linear",
    OTransition: "all 150ms linear",
    MsTransition: "all 150ms linear",
    transition: "all 150ms linear",
    display: "block",
    clear: "both",
    fontWeight: "400",
    lineHeight: "1.42857143",
    color: "#333",
    whiteSpace: "nowrap",
    "&:hover": {
      backgroundColor: "#9c27b0",
      color: "#FFFFFF",
      boxShadow:
        "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
    }
  },
  notifications: {
    position: "absolute",
    top: "5px",
    border: "1px solid #FFF",
    right: "10px",
    fontSize: "9px",
    background: "#f44336",
    color: "#FFFFFF",
    minWidth: "16px",
    height: "16px",
    borderRadius: "10px",
    textAlign: "center",
    lineHeight: "16px",
    verticalAlign: "middle",
    display: "block"
  }
});

// ##############################
// // // Footer styles
// #############################

const footerStyle = {
  block: {
    color: "inherit",
    padding: "15px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  text: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    lineHeight: "1.5em",
    fontWeight: "500",
    fontSize: "12px"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right!important"
  },
  footer: {
    bottom: "0",
    borderTop: "1px solid #e7e7e7",
    padding: "15px 0",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em",
    fontSize: "14px"
  },
  fluid: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto"
  },
  a: {
    color: "#9c27b0",
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    paddingTop: "0px"
  }
};

// ##############################
// // // Dashboard styles
// #############################

const dashboardStyle = {
  successText: {
    color: "#4caf50"
  },
  upArrowCardCategory: {
    width: 14,
    height: 14
  }
};

// ##############################
// // // Icons styles
// #############################

const iconsStyle = {
  iframe: {
    width: "100%",
    height: "500px",
    border: "0",
    boxShadow:
      "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  iframeContainer: {
    margin: "0 -20px 0"
  }
};

// ##############################
// // // StatsCard styles
// #############################

const statsCardStyle = {
  card: {
    display: "inline-block",
    position: "relative",
    width: "100%",
    margin: "25px 0",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    borderRadius: "3px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff"
  },
  cardHeader: {
    float: "left",
    textAlign: "center",
    margin: "-20px 15px 0",
    borderRadius: "3px",
    padding: "15px"
  },
  orangeCardHeader: {
    background: "linear-gradient(60deg, #ffa726, #fb8c00)",
    boxShadow:
      "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
  },
  greenCardHeader: {
    background: "linear-gradient(60deg, #66bb6a, #43a047)",
    boxShadow:
      "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
  },
  redCardHeader: {
    background: "linear-gradient(60deg, #ef5350, #e53935)",
    boxShadow:
      "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
  },
  blueCardHeader: {
    background: "linear-gradient(60deg, #26c6da, #00acc1)",
    boxShadow:
      "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
  },
  purpleCardHeader: {
    background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
    boxShadow:
      "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
  },
  cardContent: {
    textAlign: "right",
    paddingTop: "10px",
    padding: "15px 20px"
  },
  cardIcon: {
    width: "40px",
    height: "36px",
    fill: "#fff"
  },
  cardAvatar: {
    margin: "8px"
  },
  cardCategory: {
    marginBottom: "0",
    color: "#999999",
    margin: "0 0 10px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em",
    fontSize: "14px"
  },
  cardTitle: {
    margin: "0",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em",
    fontSize: "1.625em"
  },
  cardTitleSmall: {
    fontSize: "65%",
    fontWeight: "400",
    lineHeight: "1",
    color: "#777"
  },
  cardActions: {
    margin: "0 20px 10px",
    paddingTop: "10px",
    borderTop: "1px solid #eeeeee",
    height: "auto",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em"
  },
  cardStats: {
    lineHeight: "22px",
    color: "#999999",
    fontSize: "12px",
    display: "inline-block"
  },
  cardStatsIcon: {
    position: "relative",
    top: "4px",
    width: "16px",
    height: "16px"
  },
  warningCardStatsIcon: {
    color: "#ff9800"
  },
  primaryCardStatsIcon: {
    color: "#9c27b0"
  },
  dangerCardStatsIcon: {
    color: "#f44336"
  },
  successCardStatsIcon: {
    color: "#4caf50"
  },
  infoCardStatsIcon: {
    color: "#00bcd4"
  },
  roseCardStatsIcon: {
    color: "#e91e63"
  },
  grayCardStatsIcon: {
    color: "#999999"
  },
  cardStatsLink: {
    color: "#9c27b0",
    textDecoration: "none",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300"
  }
};

// ##############################
// // // ChartCard styles
// #############################

const chartCardStyle = {
  card: {
    display: "inline-block",
    position: "relative",
    width: "100%",
    margin: "25px 0",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    borderRadius: "3px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff"
  },
  cardHeader: {
    padding: "0",
    minHeight: "160px",
    margin: "-20px 15px 0",
    borderRadius: "3px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em"
  },
  orangeChart: {
    background: "linear-gradient(60deg, #ffa726, #fb8c00)",
    boxShadow:
      "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
  },
  greenChart: {
    background: "linear-gradient(60deg, #66bb6a, #43a047)",
    boxShadow:
      "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
  },
  redChart: {
    background: "linear-gradient(60deg, #ef5350, #e53935)",
    boxShadow:
      "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
  },
  blueChart: {
    background: "linear-gradient(60deg, #26c6da, #00acc1)",
    boxShadow:
      "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
  },
  purpleChart: {
    background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
    boxShadow:
      "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
  },
  cardContent: {
    padding: "15px 20px"
  },
  cardTitle: {
    marginTop: "0",
    marginBottom: "5px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em",
    fontSize: "1.175em"
  },
  cardCategory: {
    marginBottom: "0",
    color: "#999999",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em",
    fontSize: "0.9em"
  },
  cardActions: {
    margin: "0 20px 10px",
    paddingTop: "10px",
    borderTop: "1px solid #eeeeee",
    height: "auto",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em"
  },
  cardStats: {
    lineHeight: "22px",
    color: "#999999",
    fontSize: "12px",
    display: "inline-block"
  },
  cardStatsIcon: {
    position: "relative",
    top: "4px",
    width: "16px",
    height: "16px"
  },
  warningCardStatsIcon: {
    color: "#ff9800"
  },
  primaryCardStatsIcon: {
    color: "#9c27b0"
  },
  dangerCardStatsIcon: {
    color: "#f44336"
  },
  successCardStatsIcon: {
    color: "#4caf50"
  },
  infoCardStatsIcon: {
    color: "#00bcd4"
  },
  roseCardStatsIcon: {
    color: "#e91e63"
  },
  grayCardStatsIcon: {
    color: "#999999"
  },
  cardStatsLink: {
    color: "#9c27b0",
    textDecoration: "none",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300"
  }
};

// ##############################
// // // TasksCard styles
// #############################

const tasksCardStyle = theme => ({
  card: {
    display: "inline-block",
    position: "relative",
    width: "100%",
    margin: "25px 0",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    borderRadius: "3px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff"
  },
  cardHeader: {
    flex: "none",
    padding: "15px",
    margin: "-20px 15px 0",
    borderRadius: "3px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em",
    background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
    boxShadow:
      "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
  },
  cardTitle: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    float: "left",
    padding: "10px 10px 10px 0",
    lineHeight: "24px",
    fontSize: "14px",
    color: "#FFFFFF"
  },
  tabWrapper: {
    width: "auto",
    display: "inline-block",
    alignItems: "inherit",
    flexDirection: "row",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "flex"
    }
  },
  tabIcon: {
    float: "left",
    marginTop: "2px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-2px"
    }
  },
  displayNone: {
    display: "none"
  },
  labelIcon: {
    height: "44px",
    width: "110px",
    minWidth: "72px",
    paddingLeft: "14px",
    borderRadius: "3px"
  },
  tabsContainer: {
    marginTop: "4px",
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      display: "grid"
    }
  },
  tabs: {
    width: "110px",
    minWidth: "70px",
    paddingLeft: "12px"
  },
  cardHeaderContent: {
    flex: "none"
  },
  label: {
    lineHeight: "19px",
    textTransform: "uppercase",
    fontSize: "12px",
    fontWeight: "400",
    marginLeft: "5px"
  },
  rootInheritSelected: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    transition: "background-color .1s .2s"
  }
});

// ##############################
// // // RegularCard styles
// #############################

const regularCardStyle = {
  card: {
    display: "inline-block",
    position: "relative",
    width: "100%",
    margin: "25px 0",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    borderRadius: "3px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff"
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardHeader: {
    margin: "-20px 15px 0",
    borderRadius: "3px",
    padding: "15px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em"
  },
  orangeCardHeader: {
    background: "linear-gradient(60deg, #ffa726, #fb8c00)",
    boxShadow:
      "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
  },
  greenCardHeader: {
    background: "linear-gradient(60deg, #66bb6a, #43a047)",
    boxShadow:
      "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
  },
  redCardHeader: {
    background: "linear-gradient(60deg, #ef5350, #e53935)",
    boxShadow:
      "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
  },
  blueCardHeader: {
    background: "linear-gradient(60deg, #26c6da, #00acc1)",
    boxShadow:
      "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
  },
  purpleCardHeader: {
    background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
    boxShadow:
      "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
  },
  cardTitle: {
    color: "#FFFFFF",
    marginTop: "0",
    marginBottom: "5px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em",
    fontSize: "1.3em"
  },
  cardSubtitle: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em",
    marginBottom: "0",
    color: "rgba(255, 255, 255, 0.62)",
    margin: "0 0 10px"
  },
  cardActions: {
    padding: "14px",
    display: "block"
  }
};

// ##############################
// // // ProfileCard styles
// #############################

const profileCardStyle = {
  card: {
    marginTop: "30px",
    textAlign: "center",
    display: "inline-block",
    position: "relative",
    width: "100%",
    margin: "25px 0",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    borderRadius: "3px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff"
  },
  cardHeader: {
    display: "inline-block",
    width: "100%",
    padding: "0px"
  },
  cardAvatar: {
    maxWidth: "130px",
    maxHeight: "130px",
    margin: "-50px auto 0",
    borderRadius: "50%",
    overflow: "hidden",
    boxShadow:
      "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  img: {
    width: "100%",
    height: "auto",
    verticalAlign: "middle",
    border: "0"
  },
  textAlign: {
    textAlign: "center"
  },
  cardSubtitle: {
    color: "#999999",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em",
    fontSize: "1em",
    textTransform: "uppercase",
    marginTop: "10px",
    marginBottom: "10px"
  },
  cardTitle: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em",
    fontSize: "1.3em",
    marginTop: "10px",
    marginBottom: "10px"
  },
  cardDescription: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em",
    padding: "15px 20px",
    margin: "0 0 10px"
  },
  cardActions: {
    display: "inline"
  }
};

// ##############################
// // // Button styles
// #############################

const buttonStyle = {
  button: {
    backgroundColor: "#999999",
    color: "#FFFFFF",
    boxShadow:
      "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: "10px 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition:
      "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    MsTouchAction: "manipulation",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#999999",
      boxShadow:
        "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
    }
  },
  fullWidth: {
    width: "100%"
  },
  primary: {
    backgroundColor: "#9c27b0",
    boxShadow:
      "0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)",
    "&:hover": {
      backgroundColor: "#9c27b0",
      boxShadow:
        "0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)"
    }
  },
  info: {
    backgroundColor: "#00bcd4",
    boxShadow:
      "0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12)",
    "&:hover": {
      backgroundColor: "#00bcd4",
      boxShadow:
        "0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)"
    }
  },
  success: {
    backgroundColor: "#4caf50",
    boxShadow:
      "0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)",
    "&:hover": {
      backgroundColor: "#4caf50",
      boxShadow:
        "0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)"
    }
  },
  warning: {
    backgroundColor: "#ff9800",
    boxShadow:
      "0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12)",
    "&:hover": {
      backgroundColor: "#ff9800",
      boxShadow:
        "0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)"
    }
  },
  danger: {
    backgroundColor: "#f44336",
    boxShadow:
      "0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12)",
    "&:hover": {
      backgroundColor: "#f44336",
      boxShadow:
        "0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)"
    }
  },
  rose: {
    backgroundColor: "#e91e63",
    boxShadow:
      "0 2px 2px 0 rgba(233, 30, 99, 0.14), 0 3px 1px -2px rgba(233, 30, 99, 0.2), 0 1px 5px 0 rgba(233, 30, 99, 0.12)",
    "&:hover": {
      backgroundColor: "#e91e63",
      boxShadow:
        "0 14px 26px -12px rgba(233, 30, 99, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2)"
    }
  },
  white: {
    "&,&:focus,&:hover": {
      backgroundColor: "#FFFFFF",
      color: "#999999"
    }
  },
  simple: {
    color: "#FFFFFF",
    background: "transparent",
    boxShadow: "none"
  },
  transparent: {
    "&,&:focus,&:hover": {
      color: "inherit",
      background: "transparent",
      boxShadow: "none"
    }
  },
  round: {
    borderRadius: "30px"
  }
};

// ##############################
// // // IconButton styles
// #############################

const iconButtonStyle = {
  button: {
    height: "40px",
    minWidth: "40px",
    width: "40px",
    borderRadius: "50%",
    fontSize: "24px",
    margin: "auto",
    padding: "0",
    overflow: "hidden",
    position: "relative",
    lineHeight: "normal",
    border: "none",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition:
      "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    display: "inline-block",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    userSelect: "none",
    backgroundImage: "none",
    backgroundColor: "#999999",
    "&:hover": {
      backgroundColor: "#999999",
      boxShadow:
        "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
    }
  },
  primary: {
    backgroundColor: "#9c27b0",
    boxShadow:
      "0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)",
    "&:hover": {
      backgroundColor: "#9c27b0",
      boxShadow:
        "0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)"
    }
  },
  info: {
    backgroundColor: "#00bcd4",
    boxShadow:
      "0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12)",
    "&:hover": {
      backgroundColor: "#00bcd4",
      boxShadow:
        "0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)"
    }
  },
  success: {
    backgroundColor: "#4caf50",
    boxShadow:
      "0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)",
    "&:hover": {
      backgroundColor: "#4caf50",
      boxShadow:
        "0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)"
    }
  },
  warning: {
    backgroundColor: "#ff9800",
    boxShadow:
      "0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12)",
    "&:hover": {
      backgroundColor: "#ff9800",
      boxShadow:
        "0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)"
    }
  },
  danger: {
    backgroundColor: "#f44336",
    boxShadow:
      "0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12)",
    "&:hover": {
      backgroundColor: "#f44336",
      boxShadow:
        "0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)"
    }
  },
  rose: {
    backgroundColor: "#e91e63",
    boxShadow:
      "0 2px 2px 0 rgba(233, 30, 99, 0.14), 0 3px 1px -2px rgba(233, 30, 99, 0.2), 0 1px 5px 0 rgba(233, 30, 99, 0.12)",
    "&:hover": {
      backgroundColor: "#e91e63",
      boxShadow:
        "0 14px 26px -12px rgba(233, 30, 99, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2)"
    }
  },
  white: {
    "&,&:focus,&:hover": {
      backgroundColor: "#FFFFFF",
      color: "#999999"
    }
  },
  simple: {
    color: "#FFFFFF",
    background: "transparent",
    boxShadow: "none"
  }
};

// ##############################
// // // Table styles
// #############################

const tableStyle = {
  warningTableHeader: {
    color: "#ff9800"
  },
  primaryTableHeader: {
    color: "#9c27b0"
  },
  dangerTableHeader: {
    color: "#f44336"
  },
  successTableHeader: {
    color: "#4caf50"
  },
  infoTableHeader: {
    color: "#00bcd4"
  },
  roseTableHeader: {
    color: "#e91e63"
  },
  grayTableHeader: {
    color: "#999999"
  },
  table: {
    marginBottom: "0",
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "transparent",
    borderSpacing: "0",
    borderCollapse: "collapse"
  },
  tableCell: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.42857143",
    fontSize: "14px",
    padding: "12px 8px",
    verticalAlign: "middle"
  }
};

// ##############################
// // // CustomInput styles
// #############################

const customInputStyle = {
  disabled: {
    "&:before": {
      backgroundColor: "transparent !important"
    }
  },
  underline: {
    "&:before": {
      backgroundColor: "#D2D2D2",
      height: "1px !important"
    }
  },
  inkbar: {
    "&:after": {
      backgroundColor: "#9c27b0"
    }
  },
  labelRoot: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color: "#AAAAAA",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857"
  }
};

// ##############################
// // // Tasks styles
// #############################

const tasksStyle = {
  table: {
    marginBottom: "0"
  },
  tableRow: {
    position: "relative",
    borderBottom: "1px solid #dddddd"
  },
  tableActions: {
    display: "flex",
    border: "none",
    padding: "12px 8px !important",
    verticalAlign: "middle"
  },
  tableCell: {
    padding: "12px 8px",
    verticalAlign: "middle",
    border: "none",
    lineHeight: "1.42857143",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    fontSize: "14px"
  },
  tableActionButton: {
    width: "27px",
    height: "27px"
  },
  tableActionButtonIcon: {
    width: "17px",
    height: "17px"
  },
  edit: {
    backgroundColor: "transparent",
    color: "#9c27b0",
    boxShadow: "none"
  },
  close: {
    backgroundColor: "transparent",
    color: "#f44336",
    boxShadow: "none"
  },
  checked: {
    color: "#9c27b0"
  },
  checkedIcon: {
    width: "20px",
    height: "20px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "3px"
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "10px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "3px"
  },
  tooltip: {
    padding: "10px 15px",
    minWidth: "130px",
    color: "#555555",
    lineHeight: "1.7em",
    background: "#FFFFFF",
    border: "none",
    borderRadius: "3px",
    boxShadow:
      "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)",
    maxWidth: "200px",
    textAlign: "center",
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    textShadow: "none",
    textTransform: "none",
    letterSpacing: "normal",
    wordBreak: "normal",
    wordSpacing: "normal",
    wordWrap: "normal",
    whiteSpace: "normal",
    lineBreak: "auto"
  }
};

// ##############################
// // // Typography styles
// #############################

const typographyStyle = {
  defaultFontStyle: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em",
    fontSize: "14px"
  },
  defaultHeaderMargins: {
    marginTop: "20px",
    marginBottom: "10px"
  },
  h1Style: {
    fontSize: "3.8em"
  },
  h2Style: {
    fontSize: "2.6em"
  },
  h3Style: {
    fontSize: "1.825em"
  },
  h4Style: {
    fontSize: "1.3em"
  },
  h5Style: {
    fontSize: "1.25em"
  },
  h6Style: {
    fontSize: "1em"
  },
  pStyle: {
    margin: "0 0 10px"
  },
  quote: {
    padding: "10px 20px",
    margin: "0 0 20px",
    fontSize: "17.5px",
    borderLeft: "5px solid #eee"
  },
  quoteText: {
    margin: "0 0 10px",
    fontStyle: "italic"
  },
  quoteAuthor: {
    display: "block",
    fontSize: "80%",
    lineHeight: "1.42857143",
    color: "#777"
  },
  mutedText: {
    color: "#777"
  },
  primaryText: {
    color: "#9c27b0"
  },
  infoText: {
    color: "#00bcd4"
  },
  successText: {
    color: "#4caf50"
  },
  warningText: {
    color: "#ff9800"
  },
  dangerText: {
    color: "#f44336"
  },
  smallText: {
    fontSize: "65%",
    fontWeight: "400",
    lineHeight: "1",
    color: "#777"
  },
  aStyle: {
    color: "#FFFFFF",
    textDecoration: "none",
    backgroundColor: "transparent"
  }
};

// ##############################
// // // SnackbarContent styles
// #############################

const snackbarContentStyle = {
  root: {
    position: "relative",
    padding: "20px 15px",
    lineHeight: "20px",
    marginBottom: "20px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    fontSize: "14px",
    backgroundColor: "white",
    color: "#555555",
    borderRadius: "3px",
    boxShadow:
      "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"
  },
  info: {
    backgroundColor: "#00d3ee",
    color: "#ffffff",
    boxShadow:
      "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
  },
  success: {
    backgroundColor: "#5cb860",
    color: "#ffffff",
    boxShadow:
      "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
  },
  warning: {
    backgroundColor: "#ffa21a",
    color: "#ffffff",
    boxShadow:
      "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
  },
  danger: {
    backgroundColor: "#f55a4e",
    color: "#ffffff",
    boxShadow:
      "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
  },
  primary: {
    backgroundColor: "#af2cc5",
    color: "#ffffff",
    boxShadow:
      "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
  },
  message: {
    padding: "0",
    display: "block",
    maxWidth: "89%"
  },
  close: {
    width: "14px",
    height: "14px"
  },
  iconButton: {
    width: "24px",
    height: "24px"
  },
  icon: {
    display: "block",
    left: "15px",
    position: "absolute",
    top: "50%",
    marginTop: "-15px",
    width: "30px",
    height: "30px"
  },
  iconMessage: {
    paddingLeft: "65px",
    display: "block"
  }
};

module.exports = {
  dashboardStyle,
  iconsStyle,
  statsCardStyle,
  chartCardStyle,
  tasksCardStyle,
  regularCardStyle,
  profileCardStyle,
  buttonStyle,
  iconButtonStyle,
  tableStyle,
  customInputStyle,
  tasksStyle,
  typographyStyle,
  snackbarContentStyle,
  footerStyle,
  headerStyle,
  sidebarStyle,
  appStyle
};
