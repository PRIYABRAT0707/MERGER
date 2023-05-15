import { Box, Button, Card, CardContent, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import Person3Icon from '@mui/icons-material/Person3';
import { useState } from 'react';
import userServiceModule from '../../Services/user-service/UserService';
import Swal from 'sweetalert2';
import { GlobalButton } from '../stylecomponent/GlobalButton';
import {Divider} from '@mui/material';
import Loading from '../../Components/LoadingComponent/Loading';
import { helpFunction } from '../../Components/HelperComponent/helpFunction';
import { EmpUpdateService } from '../../Services/Employee-Update-Service/EmpUpdSer';
import { toast } from "react-toastify";


export const ReportingManModal = (props) => {


  const[managerId,setManagerId]=useState(props.manager)
  const [initialStartDate,setInitialStartDate]=useState(function stringToDate(){
    let sd=props.startdate
    
    return new Date(sd).toISOString().slice(0, 10)
  })

  const[initialEndDate,setInitialEndDate]=useState(function stringToDate(){
    let ed=props.enddate
    
    return new Date(ed).toISOString().slice(0,10)
  })

const button1={backgroundColor:"#2196F3",color:"#FFFFFF",borderRadius:"20px",marginBottom:"20px",width:"22%"}
  const textfield1={width: 400}

    
 const [state, setState] =useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
    });
 
const { vertical, horizontal, open } = state;
const[empId,setEmpId]=useState(props.empId)
const [isLoading,setIsLoading]=useState(false)
//const[modalClose,setModalClose]=useState(props.onClose1)



const reportingManagerModalHandle=(e)=>{
    e.preventDefault()
    setIsLoading(true)
    let endDate1=helpFunction.endDateManipulation(initialEndDate)
    EmpUpdateService.updateReportingManager(empId,managerId,initialStartDate,endDate1).then((res)=>{
        if(res.status===201 && res.statusMessage==='success'){

            setIsLoading(false)
            // setModalClose(true)
            toast.success(res.message, {
                position: toast.POSITION.TOP_CENTER
              });
            // Swal.fire({
            //     position: 'center',
            //     icon: 'success',
            //     title: res.message,
            //     showConfirmButton: false,
            //     timer: 1500 })
            }
        else{

            setIsLoading(false)
            toast.error(res.message, {
                position: toast.POSITION.TOP_CENTER
            });
            // Swal.fire({
            //     position: 'center',
            //     icon: 'error',
            //     title: res.message,
            //     showConfirmButton: false,
            //     timer: 1500})
        }
             }).catch((error)=>{

                setIsLoading(false)
                toast.error(error.response.data.message, {
                    position: toast.POSITION.TOP_CENTER
                });
        // Swal.fire(
        //     {  position: 'center',
        //         icon: 'error',
        //         title: error.response.data.message,
        //         showConfirmButton: false,
        //         timer: 1500
        //     } )
        
        })}



    return (
        isLoading?<Loading/>:
        <Card style={{ maxWidth: 670, padding: "13px 5px", margin: "0 auto" ,marginTop:"55px"}}>
        <CardContent>
            <center>
            <Grid>
                <Person3Icon sx={{
                    fontSize: '50px',
                    borderRadius: '50%',
                    backgroundColor: '#2196F3',
                    color: 'black',
                    margin: '10px 100px',
                    padding: '10px'
                }} />
                 <Typography style={{fontSize:"25px",marginBottom:"10px"}} color="primary">
                 Update Reporting Manager
                 </Typography>
                  
                
            </Grid>
            </center>
            <GlobalButton.GlobalDivider/>
        <Container style={{padding:"20px"}}>
            <form onSubmit={reportingManagerModalHandle}>
            <Paper elevation={0} style={{width:"auto"}} >
              <Box sx={{ flexFlow: 1 }}>
                <Grid container spacing={1} gap={1.5}  justifyContent={"center"} alignItems={"center"} alignContent={"center"}>
                 <Grid item xs={12} sx={{display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                        <TextField required value={props.empId} name="empId"  className='outlined-basic-text-box' id="outlined-basic" label="Employee Id" variant="outlined" style={textfield1} disabled type='number' ></TextField>
                    </Grid>
                    <Grid item xs={12} sx={{display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                        <TextField required value={managerId} onChange={(e)=>{setManagerId(e.target.value)}} className='outlined-basic-text-box' id="outlined-basic" label="Manager Id" variant="outlined" style={textfield1} type='number' />
                    </Grid>
                
                    <Grid item xs={12} sx={{display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
            <TextField required value={initialStartDate} onChange={(e)=>{setInitialStartDate(e.target.value)}} className='outlined-basic-text-box' id="outlined-basic1" label="Start Date" variant="outlined" style={textfield1} type='date' />  
                    </Grid >
                    <Grid item xs={12} sx={{display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                <TextField className='outlined-basic-text-box' id="outlined-basic1" label="End Date" variant="outlined" style={textfield1} type='date'
                value={initialEndDate} onChange={(e)=>{setInitialEndDate(e.target.value)}} />  
                </Grid >
                
                    <Grid item xs={12} sx={{display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                        <Button sx={{marginTop:"10px"}} type='submit' disableElevation variant="contained" style={button1}>UPDATE</Button>

                        <Button  sx={{marginLeft:"20px",marginTop:"10px"}} onClick={props.onClose1} variant='contained'  style={GlobalButton.HaltButton}>Cancel</Button>
                    </Grid>
                    {/* <Grid item xs={12} sx={{justifyContent:"right",display:"flex"}}>
                         <Button onClick={handleRmClose} style={{marginRight:"32px",color:"red",fontWeight:"bold"}}>Cancel</Button>
                        </Grid> */}
                </Grid>
            </Box>
            </Paper>
            </form>
        </Container>
        <GlobalButton.GlobalDivider/>
        </CardContent>
        </Card>

    )
}
