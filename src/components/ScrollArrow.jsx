import { AppBar, Box } from "@mui/material";
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function ScrollArrow() {
  return (
    <Box
      sx={{
        position: "absolute",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <ArrowUpwardIcon
        sx={{
          fontSize: "400%",
          position: "absolute",
          color: "black",
          "&:before": {
            position: "absolute",
            bottom: "0",
            width: "100%",
            height: "80%",
            content: "''",
            backgroundImage:
              "linear-gradient(to left, #660099, #8C40B3, #B380CC )",
          },
        }}
        fontSize="large"
      />
    </Box>
  );
}
