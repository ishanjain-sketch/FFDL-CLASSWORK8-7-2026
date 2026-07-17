import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useColorMode } from "../context/ColorModeContext";

export default function ThemeToggle() {
  const { mode, toggleMode } = useColorMode();

  return (
    <Tooltip title={mode === "light" ? "Switch to dark mode" : "Switch to light mode"}>
      <IconButton
        onClick={toggleMode}
        aria-label="Toggle color mode"
        sx={{ color: "primary.dark" }}
      >
        {mode === "light" ? (
          <DarkModeOutlinedIcon />
        ) : (
          <LightModeOutlinedIcon />
        )}
      </IconButton>
    </Tooltip>
  );
}