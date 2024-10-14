import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";

function Login() {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/signin"); // Navigate to the /signin route
      };

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background : "black",
          color : "white",
          width : "w-11/12"
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
            onClick={handleLoginClick}
            sx={{
              width: "18rem", 
              fontWeight: "bold",
              py: 2, 
              px: 4,
              mt: 6, 
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
    </>
  );
}
export default Login;
