import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Appbar(props) {
  const navigate = useNavigate();
  const handleClick = (button) => {
    switch (button.target.name) {
      case "viewer":
        navigate("/viewer");
        break;
      case "logIn":
        props.logIn.current.open();
      default:
    }
  };
  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        backgroundImage: "linear-gradient(black, transparent)",
      }}
      elevation={0}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          color="aqua"
          sx={{ flexGrow: 1 }}
        >
          Canvas
        </Typography>
        <Button sx={{ color: "aqua", marginRight: "50px" }}>Designer</Button>
        <Button
          name="viewer"
          onClick={handleClick}
          sx={{ color: "aqua", marginRight: "50px" }}
        >
          Viewer
        </Button>
        <Button
          name="logIn"
          onClick={handleClick}
          sx={{ color: "aqua", marginRight: "50px" }}
        >
          Login
        </Button>
        <Button sx={{ color: "aqua", marginRight: "50px" }}>SignUp</Button>
        <Button sx={{ color: "aqua" }}>About</Button>
      </Toolbar>
    </AppBar>
  );
}
