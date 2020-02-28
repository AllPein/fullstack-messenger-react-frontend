import React, { useState } from "react";
import { connect } from "react-redux";

import { Sidebar } from "../components/index";


const SidebarContainer = ({user}) => {
    return (
        <Sidebar 
            user={user}
        />
    )
}

export default connect(state => ({user: state.user.userData}))(SidebarContainer);