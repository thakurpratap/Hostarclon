
import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import YouTube from 'react-youtube';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 660,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 1,
  };

function Viewvideo({detailsId,welcomeId,TvId}){

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [savevideos , setSavevideos] = useState([])

    const getvideos = async ()=> {
        try{
            const response =  await fetch(`https://api.themoviedb.org/3/movie/${detailsId ?? welcomeId ?? TvId}/videos?api_key=b16e3ccef134709edd7ba814d4e2fd75&&language=en-US`)
            const data = await response.json();
            setSavevideos(data.results);
        }catch(error){
            console.error(error);
        }
    }
    useEffect(() => {
        // if (detailsId) {
          getvideos();
        // }
      }, [detailsId]);
    //   console.log(savevideos[0]);

    return(
        <>
  <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <button onClick={handleOpen} className="bg-gray-500 mt-10 w-60 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            Watch Now
          </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 8, right: 8, color: "#fff" }}
          >
            <CloseIcon />
          </IconButton>
        {/* <video width="320" height="240" controls>
            <source src={videoUrl} type="video/mp4" />
            <source src={videoUrl.replace('.mp4', '.ogg')} type="video/ogg" />
            Your browser does not support the video tag.
          </video> */}
        <YouTube videoId = {savevideos && savevideos[0]?.key} /> 
        </Box>
      </Modal>
    </div>
        </>
    )
}
export default Viewvideo;
