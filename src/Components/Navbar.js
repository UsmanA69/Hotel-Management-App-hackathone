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
import { useEffect } from "react";
import { AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const MuiAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const navigate = useNavigate();

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
    navigate("/addhotel");
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const location = useLocation()
  // console.log(location.state);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      }
    });
  }, []);
  return (
    <AppBar position="static">
      <Container maxWidth="auto" style={{ marginLeft: "5%" }}>
        <Toolbar disableGutters>
          <Box
            noWrap
            component="div"
            sx={{ mr: { xs: 0, md: 2 }, display: { xs: "none", md: "flex" } }}
          >
            <img
              // style={{ margin: "5px" }}
              src="Images/hotel-management-logo (1).png"
              width="60px"
              alt="logo"
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              <MenuItem onClick={navigateToAddHotel}>
                <Typography textAlign="center">Add Your Hotel</Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* view on small */}
          <Box
            noWrap
            component="div"
            sx={{ mr: 2, flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img
              style={{ margin: "5px" }}
              src="Images/hotel-management-logo (1).png"
              width="60px"
              alt="logo"
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={navigateToAddHotel}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Add Your Hotel
            </Button>
          </Box>
          {/* view on small */}

          {loggedIn ? (
            <>
              <Box
                sx={{
                  position: "absolute",
                  top: "5px",
                  right: {xs:"0px" , md:"100px" },
                }}
              >
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu}>
                    <AccountCircle fontSize="large" />
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
