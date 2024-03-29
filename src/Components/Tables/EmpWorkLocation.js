import * as React from 'react';

import { 
  Box,
  Grid, 
   Paper,
        } from "@mui/material";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router';
import {Button} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {Divider} from '@mui/material';
import {Typography} from '@mui/material';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import {IconButton} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { getEmployeeWorkLocationTable } from '../../Services/employee-service/EmployeeService';
import { toast } from 'react-toastify'
import Loading from "../../Components/LoadingComponent/Loading";
import { useState } from 'react';
import moment from 'moment';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const columns = [
  { 
    field: 'empWorkLocationId',
   headerName: 'Location Id', 
   width: 200,
   flex:2,
   headerClassName:'table-header'
 
  },
  { 
    field: 'startDate',
   headerName: 'Start Date',
   width: 300,
   flex:2,
   headerClassName:'table-header',
   valueFormatter: params => 
   moment(params?.value).format("DD/MM/YYYY"),
   
  },
  { 
    field: 'endDate',
   headerName: 'End Date', 
   width: 300,
   flex:2,
   headerClassName:'table-header',
   valueFormatter: params => 
   {
    let enddate=""
    if(params?.value!==null){
     enddate=moment(params?.value).format("DD/MM/YYYY")
     return enddate
    }
 else{
   return null
 }
   }

  },
  { 
    field: 'workingFrom',
   headerName: 'Working From', 
   width: 200,
   flex:2,
   headerClassName:'table-header'
   
  },
  { 
    field: 'location',
   headerName: 'Location', 
   width: 219,
   flex:2,
   headerClassName:'table-header'
   
  },
  {
    field: 'modifiedBy',
   headerName: 'Modified By', 
   width: 220,
   flex:2,
   headerClassName:'table-header'

  },

];

export default function EmpWorkLocation() {
  const [workLocationTable,setworkLocationTable]=React.useState([])
   const navigate=useNavigate()
  const[isLoading,setIsLoading]=useState(true)


  React.useEffect(()=>{

    getEmployeeWorkLocationTable().then((res)=>{
      
      if(res.status===200 && res.statusMessage==="success"){
      
      setIsLoading(false)
      setworkLocationTable(res.result)
      
      
      }
      else{
        setIsLoading(false)
     
      }
  
    }).catch((err)=>{
      setIsLoading(false)
    
    })
    
  },[])



//backbutton
const backbutton=useNavigate()


  return (
    isLoading ? <Loading/>:
    <div className='App'>
      <div style={{ height: 400, width: '100%' }}>
        <Grid display={"flex"}  alignItems={"center"} justifyItems={"center"} marginTop={"10px"}>
             <Paper elevation={0} style={{ width:'95%', padding: "0px 0px", margin: "0 auto" }}item xs={12}>
                
                 <Box sx={{
                display:"flex",
                justifyContent:"space-between",
                alignContent:"center",
                marginRight:"1px"}}>
                  <center><Typography  color={"secondary"} style={{fontSize:"26px",marginLeft:"34px"}}>Employee Work Location</Typography></center>
                  <Grid style={{justifyContent:"center"}}>
                <Button variant='outlined' style={{fontWeight:"bold",color:"#2196F3",marginBottom:"3px",marginTop:"4px",marginRight:"0px"}} 
                 onClick={()=>{backbutton("/user/profile")}}
                 startIcon={<ArrowBackIosNewIcon/>}>
            back
                </Button>
                </Grid>
                 </Box>
                 
                 <Divider color='#2196F3' sx={{ margin: '4px 0px',height:"1px"}}  />
                 <Grid style={{textAlign:"right"}}>
                <Button variant='outlined' className='style' style={{marginBottom:"3px",marginTop:"4px"}} startIcon={<LocalAirportIcon/>} onClick={()=>{navigate("/user/workinfo")}} >
                            Create WORK
                </Button>
                </Grid>
                <Box style={{height:"54.5vh",width:"auto"}}>
                 <DataGrid
                  rows={workLocationTable}
                  columns={columns} 
                  getRowId={(workLocationTable) => workLocationTable.empWorkLocationId}     
                    initialState={{
                    ...workLocationTable.initialState,
                    pagination: { paginationModel: { pageSize: 8 } },
                  }}
                  pageSizeOptions={[8,15,25,50,75]}
                 />
                 </Box>
             </Paper>
         </Grid>
      
     </div>
    </div>
  );
}