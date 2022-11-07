import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { GrClose } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <p className="close__btn">
            <GrClose />
          </p>
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="header">
      <nav>
        <Link className="links" to="/">
          <div className="logo">EquiData</div>
        </Link>

        <div className="navLinks">
          <Link className="links" to="/">
            Home
          </Link>
          <Link className="links" to="/about">
            About
          </Link>
          <Link className="links" to="/business">
            Business Data
          </Link>
          <Link className="links" to="/crypto">
            Cryptocurrency
          </Link>
          <Link className="links" to="/chart">
            Contact
          </Link>
        </div>
        <div className="menu__btn">
          <div>
            <Button variant="outlined" onClick={handleClickOpen}>
              <i className="fa-solid fa-bars" />
            </Button>
            <BootstrapDialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleClose}
              >
                EquiData
              </BootstrapDialogTitle>
              <div className="responsive__links">
                <Link
                  className="responsive__navLinks"
                  onClick={handleClose}
                  to="/"
                >
                  <i className="fa-solid fa-house"></i>
                  Home
                </Link>
                <Link
                  className="responsive__navLinks"
                  onClick={handleClose}
                  to="/about"
                >
                  <i className="fa-solid fa-list-check"></i>
                  About
                </Link>
                <Link
                  className="responsive__navLinks"
                  onClick={handleClose}
                  to="/business"
                >
                  <i className="fa-brands fa-blogger"></i>
                  Business
                </Link>
                <Link
                  className="responsive__navLinks "
                  onClick={handleClose}
                  to="/crypto"
                >
                  <i className="fa-solid fa-phone"></i>
                  Crypto
                </Link>
              </div>
              {/* <div className="dialog__social"> */}
              <div className="dialog__socialSection">
                <a
                  href="https://github.com/gurudattpuranik25"
                  className="social__icons github"
                >
                  <BsGithub />
                </a>
                <a
                  href="https://twitter.com/PuranikGurudatt"
                  className="social__icons twitter"
                >
                  <BsTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/in/gurudatt-puranik-0933b0195/"
                  className="social__icons linkedin"
                >
                  <BsLinkedin />
                </a>
                <a
                  href="https://gurudattpuranik.hashnode.dev/"
                  className="social__icons hashnode"
                >
                  <SiHashnode />
                </a>
                {/* <p className="social__icons mail" onClick={gmailHandler}> */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=gurudattpuranik35@gmail.com"
                  className="social__icons mail"
                >
                  <MdEmail />
                </a>
                {/* </p> */}
              </div>
              {/* </div> */}
            </BootstrapDialog>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
