import React,{useState} from 'react';
import {Box, Container, Divider, Grid, Paper, TextField, Typography} from '@mui/material';
import {CardContent ,Card} from '@mui/material';
import { Button } from '@mui/material';
import {LocalizationProvider} from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import {DatePicker} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import CommentIcon from '@mui/icons-material/Comment';
import { GlobalButton } from '../../Components/stylecomponent/GlobalButton';

import Person3Icon from '@mui/icons-material/Person3';
import Loading from '../../Components/LoadingComponent/Loading';
import { taskService } from '../../Services/Employee-Task-Service/taskService';
import Swal from 'sweetalert2';
import axios from 'axios';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router';


export default function DailyReport(){
  const[visible,setVisible]=useState(false);

  const[TaskDetails,setTaskDetails]=useState("")
  const[desc,setDesc]=useState("")
  const[status,setStatus]=useState("")
  const[reason,setReason]=useState("")
  const[team,setTeam]=useState("")
  const[assignedDate,setAssignedDate]=useState("2000-01-01")
  const[taskAssignedBy,setTaskAssignedBy]=useState("")
  const[taskVerifiedBy,setTaskVerifiedBy]=useState("null")
  const [isLoading,setIsLoading]=useState(false)
const [message,setmessage]=useState("")
//console.log(TaskDetails,desc,status,reason,team,assignedDate,taskAssignedBy)



const handleTaskSubmit=(e)=>{
 e.preventDefault()
 setIsLoading(true)
if(desc.length<50){
  setmessage("Description must be more than 50 words")
  setIsLoading(false)
  return
}
else{



 taskService.createTask(TaskDetails,desc,status,reason,team,assignedDate,taskAssignedBy,taskVerifiedBy).then((res)=>{
    //console.log(res)
  if(res.status===200 && res.data.statusMessage==='success'){
    setIsLoading(false)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: res.message,
      showConfirmButton: false,
      timer: 1500
  })
   // setMessage(res.data.message)
  }
  else if(res.data.status===208){
    
    setIsLoading(false)
  Swal.fire(
      {
          position: 'center',
          icon: 'info',
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500
      }

  )

  }
  else{
    //console.log("res2")
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: res.message,
      showConfirmButton: false,
      timer: 1500})
  }
 }).catch((error)=>{
  
  //console.log(error)
  setIsLoading(false)
  Swal.fire(
      {
          position: 'center',
          icon: 'error',
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500
      }

  )
})

}

}

//backbutton
const backbutton=useNavigate()

    return(
      isLoading?<Loading/>:
      <Box style={{backgroundColor:"#FFFFFF",height:"92vh"}}>



        <Box sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center'
        }}>
        <Box sx={{
                
                width:'75vw',
         
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'space-between',
                // marginTop:"10px",marginBottom:"20px"
                marginRight:"30px"
            }}>
             <Typography color="secondary" style={{marginLeft:"35px",fontSize:"26px"}}>Daily Task</Typography>

             <Grid style={{justifyContent:"center"}}>
                <Button variant='outlined' style={{fontWeight:"bold",color:"#2196F3",marginBottom:"3px",marginTop:"4px",marginRight:"12px"}} 
                 onClick={()=>{backbutton("/user/ts")}}
                 startIcon={<ArrowBackIosNewIcon/>}>
            back
                </Button>
                </Grid>
                 </Box>
            
        </Box>
         
            <Box sx={{width:"98%"}}>
            <GlobalButton.GlobalDivider/>
              </Box>        
        <Container style={{padding:"0px"}}>
       
            <form onSubmit={handleTaskSubmit} >
            <Paper elevation={0} style={{width:"auto"}} >

            <Box sx={{ flexFlow: 1 }} >
            <Grid container spacing={0} gap={1}  justifyContent={"center"} alignItems={"center"} alignContent={"center"}>

               <Grid item xs={12} sx={{justifyContent:"center",display:"flex"}}>
                 <TextField value={TaskDetails} onChange={(e)=>{setTaskDetails(e.target.value)}} type="number" label="Task Details" required multiline rows={2} placeholder="Task Deatils" variant='outlined' fullWidth style={{width:"550px",marginTop:"15px"}}></TextField>
                 </Grid>
              
                 <Grid item xs={12} sx={{justifyContent:"center",display:"flex"}}>
                 <TextField value={desc} onChange={(e)=>{setDesc(e.target.value)}} label="Task Description" required multiline rows={2.8} placeholder="Description Your Task Here" variant='outlined' fullWidth style={{width:"550px",marginTop:"15px"}}></TextField>
                 </Grid>
   {message.length>0?<Typography sx={{color:"red"}}>{message}</Typography>:null}
               <Grid item xs={12} sx={{justifyContent:"center",display:"flex"}}>
                 <TextField  type='number' value={taskAssignedBy} onChange={(e)=>{setTaskAssignedBy(e.target.value)}} label="Task Assigned By" required  placeholder="Task Assigned By" variant='outlined' fullWidth style={{width:"550px",marginTop:"15px"}}></TextField>
                 </Grid>
                 
                 <Grid item xs={12} sx={{justifyContent:"center",display:"flex"}} style={{width:"550px",marginTop:"15px"}}>

                <TextField  style={{width:"550px",marginTop:"15px"}} type='date' value={assignedDate} onChange={(e)=>{setAssignedDate(e.target.value)}} label="Task Assign Date"></TextField>

                 {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                   <DatePicker  value={assignedDate} onChange={(e)=>{setAssignedDate(e.target.value)}} label="Task Assign Date" defaultValue={dayjs('2023-01-01')}
                   className='outlined-basic-text-box' sx={{width:"550px"}}/>
                 </LocalizationProvider> */}


                 </Grid>

                 <Grid item xs={12} sx={{justifyContent:"center",display:"flex"}}>
                 <TextField  value={team} onChange={(e)=>{setTeam(e.target.value)}} label="Team Name" required  placeholder="Enter Your Team" variant='outlined' fullWidth style={{width:"550px",marginTop:"15px"}}></TextField>
                 </Grid>
                 </Grid>





               <Grid  item xs={12}className='form-group row' sx={{display:"flex",justifyContent:"center",marginBottom:"12px",marginTop:"12px"}}>
                 <label className='col-sm-4 col-form-label'>Status: </label>
                 <Grid className='col-sm-2  mt-2' style={{marginLeft:"15px", color:"green"}}>
                    Completed<input type="radio" className='mx-2' name="isyes" value="Yes" onClick={(e)=>{setVisible(false) ;setStatus(e.target.value)}} style={{accentColor:"green",marginLeft:"9px",marginRight:"25px"}}/>
                 </Grid>
                 <Grid className='col-sm-2  mt-2' style={{color:"red"}}>
                    Not Completed<input type="radio" className='mx-2' name="isyes" value="No" onClick={(e)=>{setVisible(true);setStatus(e.target.value)}}  style={{accentColor:"red",marginLeft:"9px"}}/>
                 </Grid>
               </Grid>
               {/* </Grid> */}
                
               {
                 visible &&
                 
               <Grid item xs={12} sx={{justifyContent:"center",display:"flex"}}>
               <TextField value={reason} onChange={(e)=>{setReason(e.target.value)}} label="Reason"multiline rows={2} required  placeholder="Enter The Reason" variant='outlined' fullWidth style={{width:"550px",marginTop:"15px"}}/>
               </Grid>
                 
               }
               <Grid item xs={12} sx={{justifyContent:"center",display:"flex",marginTop:"12px"}}>
                 <Button style={GlobalButton.OperationButton} type="submit" variant="contained" color="primary" >submit</Button>
               </Grid>
               
               
             </Box>
        </Paper>
            </form>
            {/* <GlobalButton.GlobalDivider/> */}
        </Container>
    </Box>
    
    )
}

