import { Box, Typography, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import { projectDataInStore } from "src/redux/projects/projectSlice";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import colors from "src/theme/variables";
import projectImage from "src/assets/icons/Project.png";

const Headers = () => {
  const { active_project } = useSelector(projectDataInStore);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/Dashboard" || location.pathname.includes("/Dashboard/activeProject/board")) {
      navigate(`/Dashboard/activeProject/board/${active_project}`);
      // queryClient.invalidateQueries("projects"); invalidate all the query
    }
  }, [active_project, location.pathname]);

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        top: "4.5rem",
      }}>
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
          <img src={projectImage} alt="project" style={{ width: "40px" }} />
          <Typography
            variant="h5"
            sx={{
              textTransform: "capitalize",
              pl: 2,
              color: colors.primaryColor,
              fontWeight: "bold",
            }}>
            {active_project}
          </Typography>
        </Box>
        <Box>
          <NavLink
            style={({ isActive }) => ({
              color: "white",
              fontWeight: isActive ? 600 : 100,
              textDecoration: "none",
              marginLeft: "1.2rem",
              borderBottom: isActive ? `1px solid ${colors.secondaryColor}` : "",
            })}
            to={`activeProject/board/${active_project}`}>
            Board
          </NavLink>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

export default Headers;
