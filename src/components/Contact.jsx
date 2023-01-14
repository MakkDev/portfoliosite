import {
  TextField,
  Box,
  Button,
  Typography,
  Container,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { Zoom, Rotate } from "react-reveal";

export default function Contact(props) {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        mb: "5%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "90%",
          mb: "5%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Zoom left>
            <Typography
              ref={props.refProp3}
              sx={{
                mb: "8%",
                fontFamily: "Cormorant, serif",
                fontWeight: "600",
                textAlign: "center",
              }}
              variant={isSmallScreen ? "h2" : "h1"}
            >
              Get In Touch{" "}
            </Typography>{" "}
          </Zoom>
        </Box>
        <Zoom>
          {" "}
          <Typography sx={{ mb: "1%" }} variant="h5">
            {" "}
            Name{" "}
          </Typography>{" "}
        </Zoom>
        <TextField color="secondary" label="Name" placeholder="Name" required />
        <br />
        <Zoom>
          <Typography sx={{ mb: "1%" }} variant="h5">
            {" "}
            Email Address{" "}
          </Typography>{" "}
        </Zoom>
        <TextField
          color="secondary"
          label="Email"
          placeholder="Email Address"
          required
        />
        <br />
        <Zoom>
          <Typography sx={{ mb: "1%" }} variant="h5">
            {" "}
            Message{" "}
          </Typography>{" "}
        </Zoom>
        <TextField
          color="secondary"
          sx={{}}
          size="large"
          label="Message"
          placeholder="Message"
          required
        />
      </Box>
      <Button
        size="large"
        sx={{
          fontSize: "110%",
          fontFamily: "Montserrat",
          width: "30%",
          fontWeight: "600",
          ml: "2%",
          color: "#dae0e0",
          backgroundColor: "#020004",
          borderColor: "#dae0e0",
          "&:hover": {
            color: "#06000C",
            backgroundImage:
              "linear-gradient(to right, #D9BFE6, #B380CC, #8C40B3  )",
          },
        }}
        variant="contained"
      >
        {" "}
        Submit{" "}
      </Button>
    </Container>
  );
}
