import React, { useEffect, useState } from 'react'
import { Box, Card, CardContent, CardMedia, Collapse, Container, Divider, Grid, List, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'

import DraftsIcon from '@mui/icons-material/Drafts';
import Groups3Icon from '@mui/icons-material/Groups3';

import { AddLocation, Call, Create, ExpandLess, ExpandMore, SpeakerNotes, StarBorder } from '@mui/icons-material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { FaBookOpen,FaClock,FaUserTie,FaGlobeAsia } from "react-icons/fa";
import TaskIcon from '@mui/icons-material/Task';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TableChartIcon from '@mui/icons-material/TableChart';
import SignalCellularAlt2BarIcon from '@mui/icons-material/SignalCellularAlt2Bar';

const SideNavBar = () => {
    const navigate = useNavigate()
    const navigate1=useNavigate()
    const [profileOpen, setprofileOpen] = React.useState(false);
    const [employeesOpen, setemployeesOpen] = React.useState(false);
    const [workInfoOpen, setworkInfoOpen] = React.useState(false);
    const [taskDetails,setTaskDetails]=useState(false)

    const handleProfileClick = () => {
        setprofileOpen(!profileOpen);
    };
    const handleEmployeeClick = () => {
        setemployeesOpen(!employeesOpen);
    };
    const handleworkInfoOpenClick = () => {
        setworkInfoOpen(!workInfoOpen);
    };

    const handleTaskDetails=()=>{
        setTaskDetails(!taskDetails)

    }
    const navigate2=useNavigate()

    const logoutHandle = () => {
        sessionStorage.clear()
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Logout successfully completed ! Redirecting to Login page...',
            showConfirmButton: false,
            timer: 1500
          })
     
        navigate("/login")
    }

    const handleNavigation=(page)=>{
        navigate(page)
    }

    return (

        <Container>



            <ListItemButton>
                <SignalCellularAlt2BarIcon>
                    <ManageAccountsIcon color='white'/>
                </SignalCellularAlt2BarIcon>
                <ListItemText sx={{pl:4}} primary="Leaves" />
            </ListItemButton>

            <ListItemButton onClick={()=>{navigate("/user/biometric")}}  >
                <ListItemIcon>
                    <DraftsIcon color='white' />
                </ListItemIcon>
                <ListItemText primary="Biometric Report" />
            </ListItemButton>

            <ListItemButton onClick={handleProfileClick}>
                <ListItemIcon>
                    <ManageAccountsIcon color='white' />
                </ListItemIcon>
                <ListItemText primary="Profile" />
                {profileOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={profileOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={()=>handleNavigation('/user/profile')}>
                        <ListItemIcon>
                            <SpeakerNotes color='white' />
                        </ListItemIcon>
                        <ListItemText primary="Information" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={()=>{navigate("/user/change-password")}}>
                        <ListItemIcon>
                            <Create color='white' />
                        </ListItemIcon>
                        <ListItemText primary="Change Password" />
                    </ListItemButton>
                </List>
            </Collapse>





            <ListItemButton onClick={handleTaskDetails}>
                <ListItemIcon>
                    <TaskIcon color='white' />
                </ListItemIcon>
                <ListItemText primary="TaskDetails" />
                {taskDetails ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={taskDetails} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={()=>{navigate2("/user/daily-report")}}>
                        <AssignmentLateIcon sx={{ pl:1 }}>
                            <SpeakerNotes color='white' />
                        </AssignmentLateIcon>
                        <ListItemText sx={{ pl:1 }} primary="Daily Report" />
                    </ListItemButton>
                    {/* <ListItemButton sx={{ pl: 4 }} onClick={()=>handleNavigation()}>
                        <ListAltIcon>
                            <Create color='white' />
                        </ListAltIcon>
                        <ListItemText primary="Report Details" />
                    </ListItemButton> */}

                    <ListItemButton sx={{ pl: 4 }} onClick={()=>{navigate1("/user/ts")}}>
                        <TableChartIcon sx={{ pl:1 }}>
                            <SpeakerNotes color='white' />
                        </TableChartIcon>
                        <ListItemText sx={{ pl:1 }} primary="Task Status" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={()=>{navigate1("/user/vp")}}>
                        <TableChartIcon sx={{ pl:1 }}>
                            <SpeakerNotes color='white' />
                        </TableChartIcon>
                        <ListItemText sx={{ pl:1 }} primary="Verification Pending" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={()=>{navigate1("/user/sp")}}>
                        <TableChartIcon sx={{ pl:1 }}>
                            <SpeakerNotes color='white' />
                        </TableChartIcon>
                        <ListItemText sx={{ pl:1 }} primary="Status Pending" />
                    </ListItemButton>

                </List>
            </Collapse>



            <ListItemButton onClick={handleEmployeeClick}>
                <Groups3Icon>
                    <ManageAccountsIcon color='white'/>
                </Groups3Icon>
                <ListItemText sx={{ pl: 4 }}  primary="Employees" />
                {employeesOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={employeesOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={()=>handleNavigation('/user/employees')}>
                        <ListItemIcon>
                            <SpeakerNotes color='white' />
                        </ListItemIcon>
                        <ListItemText primary="Employees" />
                    </ListItemButton>
                </List>
            </Collapse>
            <ListItemButton onClick={handleworkInfoOpenClick}>
                <ListItemIcon>
                    <FaBookOpen color='white' />
                </ListItemIcon>
                <ListItemText primary="Work Information" />
                {workInfoOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={workInfoOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}  onClick={()=>handleNavigation('/user/reporting-manager-data')}>
                        <ListItemIcon>
                            <FaUserTie color='white' />
                        </ListItemIcon>
                        <ListItemText primary="Reporting Manager" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={()=>handleNavigation('/user/employee-shift-timing-data')}>
                        <ListItemIcon>
                            <FaClock color='white'/>
                        </ListItemIcon>
                        <ListItemText primary="Shift Timings" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={()=>handleNavigation('/user/employee-work-location-data')}>
                        <ListItemIcon>
                            <FaGlobeAsia color='white' />
                        </ListItemIcon>
                        <ListItemText primary="Working From" />
                    </ListItemButton>
                </List>
            </Collapse>

            <ListItemButton type='submit'>
                <ListItemIcon>
                    <LogoutIcon color='white'></LogoutIcon>
                </ListItemIcon>
                <ListItemText onClick={logoutHandle} primary="Logout" />
            </ListItemButton>

        </Container>
    )
}

export default SideNavBar