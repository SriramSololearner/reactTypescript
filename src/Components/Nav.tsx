import { Box } from "@mui/material";
import React from "react";
import { useLocation, NavLink, Link } from "react-router-dom";
import { StyleSheet } from "./Styles";
import Header from "../Header.json";

interface Istate {
  header: string[];
}

const Nav = () => {
  const [data, setData] = React.useState<Istate["header"]>(Header);
  const pathname = useLocation().pathname;
  console.log(pathname);
  return (
    <Box sx={StyleSheet.navBar}>
      {data.map((item, ind) => (
        <NavLink className={"Link"} key={ind} to={`/${item}`}>
          {item}
        </NavLink>
      ))}
    </Box>
  );
};

export default Nav;
