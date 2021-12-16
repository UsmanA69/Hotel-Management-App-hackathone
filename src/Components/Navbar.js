import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { auth, onAuthStateChanged, signOut } from "../config/Firebase/Firebase";
// import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { AccountCircle } from "@mui/icons-material";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const MuiAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [addHotel, setAddHotel] = useState(false);

  const navigate = useNavigate();

  const uidState = useSelector((state) => state.getUserUid);
  const { userUid } = uidState;


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigateToAddHotel = () => {
    setAnchorElNav(null);
    navigate("/addroom");
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const location = useLocation()
  // console.log(location.state);

  useEffect(() => {
    if (userUid == "f2J7rIPZDwRhVrnQV41PLICQHpQ2") {
      setAddHotel(true);
    }

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      }
    });
  }, []);
  return (
    <AppBar position="static" sx={{background:'white',boxShadow:'none',borderBottom:'1px solid lightgray'}} >
      <Container maxWidth="auto">
        <Toolbar disableGutters>
          <Box
            noWrap
            component="div"
            sx={{ mr: { xs: 0, md: 2 }, display: { xs: "none", md: "flex" } }}
          >
            <h3 style={{color:'#094949'}} >Hotel Logo</h3>
          </Box>

          {addHotel ? (
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon sx={{color:'#094949'}} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={navigateToAddHotel}  sx={{color:'#094949'}}>
                  <Typography textAlign="center" sx={{color:'#094949'}} >Add Hotel</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : null}

          {/* view on small */}
          <Box
            noWrap
            component="div"
            sx={{ mr: 2, flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <h3 style={{color:'#094949'}} >Hotel Logo</h3>
          </Box>
          {addHotel ? (
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={navigateToAddHotel}
                sx={{ my: 2, color: "white", display: "block",color:'#094949' }}
              >
                Add Hotel
              </Button>
            </Box>
          ) : null}

          {/* view on small */}

          {loggedIn ? (
            <>
              <Box
                sx={{
                  position: "absolute",
                  top: "5px",
                  right: { xs: "0px", md: "100px" },
                }}
              >
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu}>
                    <AccountCircle fontSize="large"  sx={{color:'#094949'}}/>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <Link
                    to="/booking-details"
                    style={{ textDecoration: "none" }}
                  >
                    <MenuItem>
                      <Button variant="outlined" sx={{ margin: "5px" }}>
                        Booking Details
                      </Button>
                    </MenuItem>
                  </Link>
                  <a
                    onClick={() => signOut(auth)}
                    href="/"
                    style={{ textDecoration: "none" }}
                  >
                    <MenuItem>
                      <Button variant="outlined" sx={{ margin: "5px" }}>
                        Log Out <LogoutIcon />
                      </Button>
                    </MenuItem>
                  </a>
                </Menu>
              </Box>
            </>
          ) : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MuiAppBar;
