// import * as React from "react";
// import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import { createTheme } from "@mui/material/styles";
// import Profile from "@mui/icons-material/AccountCircle";
// import Search from "@mui/icons-material/Search";
// import Home from "@mui/icons-material/Home";
// import Movies from "@mui/icons-material/Movie";
// import { AppProvider } from "@toolpad/core/AppProvider";
// import { DashboardLayout } from "@toolpad/core/DashboardLayout";
// import { Link } from "react-router-dom";
// // import { useLocation, useNavigate } from 'react-router-dom';

// const NAVIGATION = [
//   {
//     segment: "dashboard",
//     title: "My Space",
//     path: "/signin",
//     icon: <Profile />,
//     Component: { Link },
//     to: "/signin",
//   },
//   {
//     segment: "search",
//     title: "Search",
//     path: "/search",
//     icon: <Search />,
//   },
//   {
//     segment: "home",
//     title: "Home",
//     path: "/welcome",
//     icon: <Home />,
//   },
//   {
//     segment: "movies",
//     path: "/movie",
//     title: "Movies",
//     icon: <Movies />,
//   },
// ];
// const demoTheme = createTheme({
//   cssVariables: {
//     colorSchemeSelector: "data-toolpad-color-scheme",
//   },
//   colorSchemes: { light: true, dark: true },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 600,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

// function DemoPageContent({ pathname }) {
//   return (
//     <Box
//       sx={{
//         py: 4,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         textAlign: "center",
//       }}
//     >
//       <Typography>Dashboard content for {pathname}</Typography>
//     </Box>
//   );
// }

// DemoPageContent.propTypes = {
//   pathname: PropTypes.string.isRequired,
// };

// function DashboardLayoutBasic(props) {
//   const { window } = props;

//   const [pathname, setPathname] = React.useState("/dashboard");

//   const router = React.useMemo(() => {
//     return {
//       pathname,
//       searchParams: new URLSearchParams(),
//       navigate: (path) => setPathname(String(path)),
//     };
//   }, [pathname]);

//   // Remove this const when copying and pasting into your project.
//   const demoWindow = window !== undefined ? window() : undefined;

//   return (
//     <AppProvider
//       navigation={NAVIGATION}
//       router={router}
//       theme={demoTheme}
//       window={demoWindow}
//     >
//       <DashboardLayout>
//         <DemoPageContent pathname={pathname} />
//       </DashboardLayout>
//     </AppProvider>
//   );
// }

// DashboardLayoutBasic.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * Remove this when copying and pasting into your project.
//    */
//   window: PropTypes.func,
// };

// export default DashboardLayoutBasic;
























import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { createTheme } from "@mui/material/styles";
import Profile from "@mui/icons-material/AccountCircle";
import Search from "@mui/icons-material/Search";
import Home from "@mui/icons-material/Home";
import Movies from "@mui/icons-material/Movie";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import Signin from "./signin";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Welcome from "./welcome";
// import { Link } from "@mui/material";
import { Link } from "react-router-dom";
import Movie from "./movie";
// import { patch } from "@mui/material";

// Navigation items for the sidebar and navbar
const NAVIGATION = [
  {
    segment: "dashboard",
    title: "My Space",
    path: "/dashboard",
    icon: <Profile />,
    
  },
  {
    segment: "search",
    title: "Search",
    path : "/search",
    icon: <Search />,
  },
  {
    segment: "home",
    title: "Home",
    path: "/welcome",
    icon: <Home />,
  },
  {
    segment: "movies",
    path: "/movies",
    title: "Movies",
    icon: <Movies />,
  },
];

// Theme settings
const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

// Page content changes based on the current route (pathname)
function DemoPageContent({ pathname, onLoginClick }) {
  if (pathname === "/dashboard") {
    return (
      <Box
        sx={{
          backgroundColor: "bg-blue",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <Box>
          <Typography variant="h4" gutterBottom>
            Login to Disney+ Hotstar
          </Typography>
          <Typography variant="body1" gutterBottom>
            Start watching from where you left off, personalized for kids, and
            more
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={onLoginClick}
            sx={{
              width: "18rem", // Equivalent to 'w-72' in Tailwind
              fontWeight: "bold",
              py: 2, // Padding Y-axis
              px: 4, // Padding X-axis
              mt: 6, // Margin top
              backgroundColor: "#095ae5",
              "&:hover": {
                backgroundColor: "darkblue",
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    );
  }

  // Add content for other pages
  switch (pathname) {
    case "/search":
      return (
        <Box>
        
        </Box>
      );

    case "/welcome":
      return (
        <Box>
        <Welcome />;
       </Box>
      )

    case "/movies":
      return (
        <Box>
        <Movie/>;
       </Box>
      )
    // default:
    //   return (
    //     <Box>
    //       <Typography>404: Page Not Found</Typography>
    //     </Box>
    //   );
  }
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
  onLoginClick: PropTypes.func.isRequired,
};

// Main layout component for the dashboard, navbar, and sidebar
function DashboardLayoutBasic(props) {
  const { window } = props;
  const [pathname, setPathname] = React.useState("/welcome");
  const [open, setOpen] = React.useState(false);
  

  // Handle login button click to open dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Handle closing the dialog
  const handleClose = () => {
    setOpen(false);
  };

  // Router-like navigation handling
  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
      
    };
  }, [pathname]);
  
  // console.log(searchParams, path)
  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        {/* Render different page content depending on the current path */}
        <DemoPageContent pathname={pathname} onLoginClick={handleClickOpen} />
         {/* Sign-in Popup Modal */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        // sx={{  width: "100%" }}
      >
        <DialogTitle  sx={{ m: 0, p: 2 }} id="customized-dialog-title">
         SignIn
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Signin /> {/* Your SignIn form goes here */}
        </DialogContent>
      </BootstrapDialog>
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardLayoutBasic.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutBasic;
