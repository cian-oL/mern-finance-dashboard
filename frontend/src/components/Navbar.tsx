import { Link } from "react-router-dom";
import { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import PixIcon from "@mui/icons-material/Pix";

const Navbar = () => {
  const [selected, setSelected] = useState("dashboard");

  const { palette } = useTheme();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      marginBottom="0.25rem"
      padding="0.5rem 0rem"
      color={palette.grey[300]}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap="0.75rem"
      >
        <PixIcon sx={{ fontSize: "29px" }} />
        <Typography variant="h4" fontSize="16px">
          Finanseer
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap="2rem"
      >
        <PixIcon sx={{ fontSize: "29px" }} />
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Predictions
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
export default Navbar;
