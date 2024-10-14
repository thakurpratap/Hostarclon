
import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import YouTube from 'react-youtube';

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

function Viewvideo({detailsId}){

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [savevideos , setSavevideos] = useState([])

    const getvideos = async ()=> {
        try{
            const response =  await fetch(`https://api.themoviedb.org/3/movie/${detailsId}/videos?api_key=b16e3ccef134709edd7ba814d4e2fd75&&language=en-US`)
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
      <Button onClick={handleOpen} className="bg-gray-500 mt-10 w-60 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            Watch Now
          </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <YouTube videoId = {savevideos && savevideos[0]?.key} /> 
        </Box>
      </Modal>
    </div>
        </>
    )
}
export default Viewvideo;


        {/* <YouTube videoId = {savevideos && savevideos[0]?.key} /> */}


// import React, { useEffect, useState } from "react";
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';
// import YouTube from 'react-youtube';

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 660,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 1,
//   };

// function Viewvideo({detailsId}){

//     const [open, setOpen] = useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);
//     const [savevideos , setSavevideos] = useState([])

//     const getvideos = async ()=> {
//         try{
//             const response =  await fetch(`https://api.themoviedb.org/3/movie/${detailsId}/videos?api_key=b16e3ccef134709edd7ba814d4e2fd75&&language=en-US`)
//             const data = await response.json();
//             setSavevideos(data.results);
//         }catch(error){
//             console.error(error);
//         }
//     }
//     useEffect(() => {
//         // if (detailsId) {
//           getvideos();
//         // }
//       }, [detailsId]);
//     //   console.log(savevideos[0]);

//     return(
//         <>
//   <div>
//       {/* <Button onClick={handleOpen}>Open modal</Button> */}
//       <Button onClick={handleOpen} className="bg-gray-500 mt-10 w-60 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
//             Watch Now
//           </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//         <YouTube videoId = {savevideos && savevideos[0]?.key} /> 
//         </Box>
//       </Modal>
//     </div>
//         </>
//     )
// }
// export default Viewvideo;


//         {/* <YouTube videoId = {savevideos && savevideos[0]?.key} /> */}
