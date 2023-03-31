import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Text,ResponsiveContext } from "grommet";
import { Home, Group, Clipboard, System } from "grommet-icons";

const SideBar = () => {
  const navigate = useNavigate();
  const size = React.useContext(ResponsiveContext);

  let leftPanelMenu = [
    {
      label: "Home",
      icon: <Home color="#fff"  style={{ marginRight: "3px" }} size="large"/>,
      navigateTo: "/",
    },
    {
      label: "Products",
      icon: (
        <Clipboard color="#fff" style={{ marginRight: "3px" }}  size="large" />
      ),
      navigateTo: "/products",
    },
    {
      label: "User",
      icon: <Group color="#fff" style={{ marginRight: "3px" }}  size="large" />,
      navigateTo: "/user-management",
    },
    {
      label: "Settings",
      icon: (
        <System color="#fff" style={{ marginRight: "3px" }} size="large" />
      ),
      navigateTo: "/settings",
    },
  ];

  return (
    <Box height="100%" width="100%" align="start" justify="evenly" margin="8px">
      {leftPanelMenu.map((item) => {
        return (
          <Box
            direction="row"
            align="center"
            justify="center"
            onClick={() => {
              navigate(item.navigateTo);
            }}
          >
            {item.icon}
            <Text alignSelf="center" size="1.4vw" style={{display:size==='small'?'none':''}}>{item.label}</Text>
          </Box>
        );
      })}
    </Box>
  );
};

export default SideBar;
