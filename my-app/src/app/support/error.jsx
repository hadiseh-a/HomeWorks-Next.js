"use client"
import { Typography } from "@mui/material";
import React from "react";

function error({ error, reset }) {
  return (
    <>
      <Typography>{error.message}</Typography>
      <button onClick={() => reset()}>reset</button>
    </>
  );
}

export default error;
