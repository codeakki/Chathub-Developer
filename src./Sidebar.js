import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InboxIcon from "@material-ui/icons/Inbox";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import DraftsIcon from "@material-ui/icons/Drafts";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LoopIcon from "@material-ui/icons/Loop"


function Sidebar() {
    const[channels,setChannels]=useState([]);
    const[{user}]=useStateValue();
    const[loading,setLoading]=useState("");

    useEffect(() => {
          ///Run the code when the sidebar Component loads
          db.collection('rooms').onSnapshot(snapshot=>(
                setChannels(
                    snapshot.docs.map(doc=>(
                  {
                      id:doc.id,
                      name:doc.data().name,
                  }
              ))
          )    
          ))
    }, [])

    useEffect(() => {
		if (!channels.length)
			setLoading(<SidebarOption Icon={LoopIcon} title="Loading..." />)
		else setLoading("")
	}, [channels])


  return (
    <div className="sidebar">
        <div className="sidebar_header">
            <div className="sidebar_info">

                <h2>Developers HUB 👨‍💻🚀</h2>
             <h3>
                <FiberManualRecordIcon />
                    {user?.displayName}
                 </h3>
            </div>
        <CreateIcon/>    
        </div>
        <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
        <SidebarOption Icon={InboxIcon} title="Mention & reactions"/>
        <SidebarOption Icon={DraftsIcon} title="Saved items"/>
        <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
        <SidebarOption Icon={PeopleAltIcon} title="people & user groups"/>
        <SidebarOption Icon={AppsIcon} title="Apps"/>
        <SidebarOption Icon={FileCopyIcon} title="File browser"/>
        <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
         <hr/>
         <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
         <hr/>
         <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel"/>

        {/* Connect to Db and lisit all the channel */}
        {loading ||
				channels.map((channel) => (
					<SidebarOption
						key={channel.id}
						title={channel.name}
						id={channel.id}
					/>
				))}
    </div>
  );
}

export default Sidebar
