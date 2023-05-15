import * as React from 'react';
import './em.css'
import { 
  Grid, 
   Paper,
        } from "@mui/material";

import MenuBookIcon from '@mui/icons-material/MenuBook';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import moment from 'moment';

const columns = [
  { 
    field: 'id',
   headerName: 'Emp Id', 
   width: 225,
   headerClassName:'table-header'
 
  },
  { 
    field: 'task',
   headerName: 'Task Details',
   width: 240,
   headerClassName:'table-header'
   
  },
  { 
    field: 'description',
   headerName: 'Description', 
   width: 250,
   headerClassName:'table-header'

  },
  { 
    field: 'assignedby',
   headerName: 'Assigned By', 
   width: 240,
   headerClassName:'table-header'
   
  },
  { 
    field: 'assigneddate',
   headerName: 'Assigned Date', 
   width: 240,
   headerClassName:'table-header',
   valueFormatter: params => 
   moment(params?.value).format("DD/MM/YYYY"),
   
  },
  { 
    field: 'status',
   headerName: 'Status', 
   width: 250,
   headerClassName:'table-header'
   
  },
  { 
    field: 'team',
   headerName: 'Team', 
   width: 250,
   headerClassName:'table-header'
   
  },

];
const rows = [
  {id:'3001',task:'tabelCreation',description:'tabel creation in db and mui',assignedby:'0852',assigneddate:'26-01-2023',status:'inprogress',team:'microservice'},
  {id:'7563',task:'tabelCreation',description:'tabel creation in db and mui',assignedby:'0852',assigneddate:'26-01-2023',status:'inprogress',team:'microservice'},
  {id:'7850',task:'tabelCreation',description:'tabel creation in db and mui',assignedby:'0852',assigneddate:'26-01-2023',status:'inprogress',team:'microservice'},
  {id:'1239',task:'tabelCreation',description:'tabel creation in db and mui',assignedby:'0852',assigneddate:'26-01-2023',status:'inprogress',team:'microservice'},
  {id:'1235',task:'tabelCreation',description:'tabel creation in db and mui',assignedby:'0852',assigneddate:'26-01-2023',status:'inprogress',team:'microservice'},
  {id:'1998',task:'tabelCreation',description:'tabel creation in db and mui',assignedby:'0852',assigneddate:'26-01-2023',status:'inprogress',team:'microservice'},

];
export default function EmpDailyStatusReg() {
  return (
    <div className='App'>
      <div style={{ height: 400, width: '100%' }}>
        <Grid display={"flex"}  alignItems={"center"} justifyItems={"center"} marginTop={"65px"}>
             <Paper style={{ width:'100%', padding: "0px 5px", margin: "0 auto" }}item xs={12}>
                 <Grid style={{textAlign:"center"}}>
                 <MenuBookIcon  style={{fontSize:'100px',
                    borderRadius:'50%',
                  backgroundColor:'#2196F3',
                  color:'white',
                 margin:'8px 1px',
                 padding:'10px'}}/>
                 </Grid>
                 <center><h2>Your Daily Status Report</h2></center>
                 <Grid style={{textAlign:"right"}}>
                <Button variant='contained' style={{fontWeight:"bold",backgroundColor:'#2196F3'}}  endIcon={<SendIcon />} >
                            Create New
                </Button>
                </Grid>
                 <DataGrid
              
                  rows={rows}
                  columns={columns}      
                    initialState={{
                    ...rows.initialState,
                    pagination: { paginationModel: { pageSize: 5 } },
                  }}
                  pageSizeOptions={[5,10,25,50,75,100]}
                 />
             </Paper>
         </Grid>
      
     </div>
    </div>
  );
}