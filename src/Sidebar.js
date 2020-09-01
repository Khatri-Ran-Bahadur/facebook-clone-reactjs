import React from "react";
import "./Sidebar.css";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";

import SidebarRow from "./SiderbarRow";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://avatars1.githubusercontent.com/u/33364806?s=460&u=3ff45b2096ffc98bc94348dfe9706788650f8192&v=4"
        title="RN Khatri"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messanger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show More" />
    </div>
  );
};

export default Sidebar;
