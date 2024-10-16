import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import loginin from "../image/login_in.png"
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Signin from "./signin";

function Login() {

  const [openSigninModal, setOpenSigninModal] = useState(false);

  const handleLoginClick = () => {
    setOpenSigninModal(true);
  };

  const handleCloseModal = () => {
    setOpenSigninModal(false);  
  };

  return (
    <>
<Box sx={{padding:"14px 16px"}}>
  <Button  sx={{background : "#FFFFFF14" ,color: "#FFFFFF", marginLeft:"80%", marginTop: "3%"}}><HelpOutlineIcon/>
   <a href="https://help.hotstar.com/in/en/support/home" target="_blank" rel="noopener noreferrer" className="ml-3">
   Help & Support
              </a>.
   </Button>
</Box> 
    <Box >
   <img src={loginin} alt="" style={{height : "10%", width: "20%", marginTop:"10%", marginLeft : "40%"}} />
      <Box
        sx={{
          height: "100vh",
          textAlign: "center",
          background : "black",
          marginTop : "3%",
          color : "white",
          width : "w-11/12"
        }}
      >
        <Box>
          <Typography variant="h5" gutterBottom>
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
          {openSigninModal && (
            <Signin open={openSigninModal} handleClose={handleCloseModal} />
          )}
        </Box>
      </Box>
      </Box>
    </>
  );
}
export default Login;
