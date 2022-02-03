import { useState } from "react";
import "./App.css";
import { Post } from "./Post";
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { Button, Modal, TextField } from "@mui/material";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: 'background.paper',

  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
};

function App() {
  const [post, setpost] = useState([
    {
      username: "Abhinav User",
      caption: " You can create a new album with the content just uploaded. You mustcreate an account or sign in to save this content into your account.",
      imageUrl: "https://i.ibb.co/R41bHVx/image.png"
    },
    {
      username: "Abhinav User",
      caption: " You can create a new album with the content just uploaded. You mustcreate an account or sign in to save this content into your account.",
      imageUrl: "./logo192.png"
    },
  ]);
  const [open, setOpen] = useState(false);
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log("SDFsdf");
    
  }

  return (
    <div className="app">

      <div className="app_header">
        <img className="app_header-image" src="./instaname.png" alt="" />
      </div>
      <h1>ABHINAV</h1>
      <div>
        <StyledModal
          aria-labelledby="unstyled-modal-title"
          aria-describedby="unstyled-modal-description"
          open={open}
          onClose={handleClose}
          BackdropComponent={Backdrop}
        >
          <Box sx={style} style={{ backgroundColor: "white" }} >
            <form action="" className="app__signup" onSubmit= {onSubmitHandler}>

              <center>
                <img className="app_header-image" src="./instaname.png" alt="" />
                <div >
                  <TextField className="sign-up-input" id="outlined-basic" label="User-name" variant="outlined" value={username} onChange={(e) => setusername(e.target.value)} />
                  <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => setemail(e.target.value)} />
                  <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e) => setpassword(e.target.value)} />
                </div>
                <Button type="submit" onClick={handleOpen}>
                  Sign up
                </Button>
              </center>


            </form>
          </Box>
        </StyledModal>
        <Button type="button" onClick={handleOpen}>
          Sign up
        </Button>
      </div>


      {post.map((curdata => <Post
        username={curdata.username}
        caption={curdata.caption}
        imageUrl={curdata.imageUrl}
      />))}

      {/* Header */}
      {/* Post */}
      {/* Post */}
    </div>
  );
}

export default App;
