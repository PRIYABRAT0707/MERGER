import * as React from 'react';
// import './em.css'
import { 
  Box,
  Grid, 
   Paper,
   Typography,
        } from "@mui/material";

import {FcBusinessman} from "react-icons/fc";
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Navigate, useNavigate } from 'react-router';
import {Divider} from '@mui/material';
import {Container} from '@mui/material';
import Person4Icon from '@mui/icons-material/Person4';
import {IconButton} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { getReportingManagerTable } from '../../Services/employee-service/EmployeeService';
import { toast } from 'react-toastify'
import Loading from "../../Components/LoadingComponent/Loading";
import { useState } from 'react';
import moment from 'moment';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const columns = [
  { 
    field: 'empId',
   headerName: 'Emp Id', 
   width: 125,
    flex:2,
   headerClassName:'table-header'
 
  },
  { 
    field: 'reportingManagerId',
   headerName: 'Manager Id',
   width: 125,
    flex:2,
   headerClassName:'table-header'
   
  },
  { 
    field: 'modifiedBy',
   headerName: 'Modified By', 
   width: 125,
    flex:2,
   headerClassName:'table-header'

  },
  { 
    field: 'modifiedDate',
   headerName: 'Modified Date', 
   width: 295,
    flex:2,
   headerClassName:'table-header',
   valueFormatter: params => 
   moment(params?.value).format("DD/MM/YYYY"),

   
  },
  { 
    field: 'reportingManagerName',
   headerName: 'Manager Name', 
   width: 295,
    flex:2,
   headerClassName:'table-header'
   
  },
  { 
  field: 'startDate',
   headerName: 'Start Date', 
   width: 275,
    flex:2,
   headerClassName:'table-header',
   valueFormatter: params => 
   moment(params?.value ? params.value.slice(0,10):"" ).format("DD/MM/YYYY"),
    // renderCell: (params) => (
    //  params.value ? params.value.slice(0,10):"")

   
  },
  { 
   field: 'endDate',
   headerName: 'End Date', 
   width: 244,
   flex:2,
   headerClassName:'table-header',
   valueFormatter: params =>{
    let enddate=""
   if(params?.value!==null){
    enddate=moment(params.value).format("DD/MM/YYYY")
    return enddate
   }
else{
  return null
}
  }
    
   
   
   
   

  },

];


export default function ReportingMangr() {

  const [reportingManagerTable,setReportingManagerTable]=React.useState([])
  const navigate=useNavigate()
  const[isLoading,setIsLoading]=useState(true)
  React.useEffect(()=>{

    getReportingManagerTable().then((res)=>{

      if(res.status===200 && res.statusMessage==="success"){
        setIsLoading(false)
      setReportingManagerTable(res.result)
      
      
      }
      else{
        setIsLoading(false)
        toast.error(res.message, {
          position: toast.POSITION.TOP_RIGHT
      })
      }
  
    }).catch((err)=>{
  
    setIsLoading(false)
    })
    
  },[])




//backbutton
const backbutton=useNavigate()

  return (
    isLoading ?<Loading/>:
    <div className='App'>
      <div style={{ height: 400, width: 'auto' }}>
        <Grid display={"flex"}  alignItems={"center"} justifyItems={"center"} marginTop={"10px"}>
             <Paper elevation={0} style={{ width:'95%', padding: "0px 0px", margin: "0 auto" }}item xs={12}>
                 
             <Box sx={{display:"flex",
                 justifyContent:"space-between",alignContent:"center",
                 marginRight:"1px"}}>
                
                  <center><Typography color={"secondary"} style={{marginLeft:"34px",fontSize:"26px"}}>Reporting Manager</Typography></center>
                  <Grid style={{justifyContent:"center"}}>
                <Button variant='outlined' style={{fontWeight:"bold",color:"#2196F3",marginBottom:"3px",marginTop:"4px",marginRight:"1px"}} 
                 onClick={()=>{backbutton("/user/profile")}}
                 startIcon={<ArrowBackIosNewIcon/>}>
            back
                </Button>
                </Grid>
                 </Box>
                
                 <Divider color='#2196F3' sx={{ margin: '4px 0px',height:"1px"}}  />


                 <Grid style={{textAlign:"right"}}>
                <Button variant='outlined' className='style' style={{marginBottom:"3px",marginTop:"4px"}} 
                startIcon={<Person4Icon></Person4Icon>} 
                onClick={()=>{navigate("/user/reporting-manager")}} >
                            UPDATE REPORTING MANAGER
                </Button>
                </Grid>
                  
                  <Box style={{height:"54.5vh",width:"auto"}}>

                  
                 <DataGrid 
                  rows={reportingManagerTable}
                  columns={columns} 
                  getRowId={(reportingManagerTable) => reportingManagerTable.empId}    
                    initialState={{
                      ...reportingManagerTable.initialState,
                    pagination: { paginationModel: { pageSize: 8} },
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