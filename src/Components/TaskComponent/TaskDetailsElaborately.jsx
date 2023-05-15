import { Box, Card ,Typography,Button} from "@mui/material";
import { GlobalButton } from "../stylecomponent/GlobalButton";
import { useNavigate } from "react-router";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Grid} from "@mui/material";
import { useLocation } from "react-router";
import { useState } from "react";
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import { TextareaAutosize } from "@mui/material";



export default function TaskDetailsElaborately(props){

const navigate=useNavigate()
const verticalLine={borderLeft: "solid 2px #f00"}

 const { state } = useLocation(props.state);

   const [data1,setData1]=useState(state)

   let date1=data1?.statusReportDate.slice(0,10)

    let status=data1?.status

    let desc=data1?.desc
    let desc1=desc.slice(0,200)
    let verifiedBy=data1?.verifiedBy
    let desc2=desc.slice(201,desc.length)
    const [desc3,setdesc3]=useState(desc2)
 
 
 //const[read,setRead]=useState(btnText.value)
const expandDesc=()=>{

    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn")

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
      }
    
  
}


    return (
        <Box sx={{backgroundColor:"#FFFFFF",height:"80vh", justifyContent:"center"}}>

        <Box sx={{mt:2,display:"flex",justifyContent:"space-between"}}>
    <Typography  style={{marginLeft:"40px",fontSize:"28px"}} color="#2196F3">
        Task Details
    </Typography>
    <Button sx={{marginRight:"47px"}} variant="outlined" startIcon={<ArrowBackIosNewIcon/>} onClick={()=>{navigate("../ts")}} >back</Button>
        </Box>
        <GlobalButton.GlobalDivider></GlobalButton.GlobalDivider>

   <Box sx={{  mt:3,display:"flex",backgroundColor:"#FFFFFF",height:"auto",minHeight:"50vh" ,justifyContent:"center"}}>
   
   <Card elevation={1} sx={{  display:"flex",heith:"auto",width:"74vw"}}>

       <table style={{border:"2px solid #2196F3" ,width:"100%"}}>
       
       

     <tr >
        <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <th ><Typography variant="h5">Employee Id</Typography></th>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
            <td >{data1?.empId}</td>
            </Grid>
        </Grid>
    </tr>

    <tr>
        <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <th ><Typography variant="h5">Task id</Typography></th>
            </Grid>
            <Grid item  xs={12} sm={12} md={9} lg={9} xl={9}>
            <td> <Typography>{data1?.taskDetailsId}</Typography></td>
            </Grid>
        </Grid>
    </tr>
    <tr>
        <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <th > <Typography variant="h5">Task Details</Typography></th>
            </Grid>
            <Grid item  xs={12} sm={12} md={9} lg={9} xl={9}>
            <td ><Typography> {data1?.taskDetail}</Typography></td>
            </Grid>
        </Grid>
    </tr>
    <tr>
        <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} >
            <th >  <Typography variant="h5">Task Description</Typography></th>
            </Grid>


            <Grid item  xs={12} sm={12} md={9} lg={9} xl={9}>
            <td  >
                <TextareaAutosize disabled style={{height:"200px",width:"53vw",fontSize:"20px"}}value={desc}></TextareaAutosize>
         
         {/* <p>{desc1}
       <span id="dots">.....................</span>
       <span id="more">{desc2}</span>

       <Button type="submit" onClick={expandDesc} id="myBtn" variant="text">Read More</Button>  
       </p>      */}
     
       

            </td>
            </Grid>
        </Grid>
    </tr>
    <tr>
        <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <th > <Typography variant="h5">Reason</Typography></th>
            </Grid>
            <Grid item  xs={12} sm={12} md={9} lg={9} xl={9}>
            <td><Typography>{data1?.reason}</Typography></td>
            </Grid>
        </Grid>
    </tr>


    <tr>
        <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <th > <Typography variant="h5">Status</Typography>
                   </th>
            </Grid>
            <Grid item  xs={12} sm={12} md={9} lg={9} xl={9}>
            <td> <Typography>{status==="yes"?"Completed":"Not Completed"}</Typography></td>
            </Grid>
        </Grid>
    </tr>

         <tr>
        <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <th > <Typography variant="h5">Assign Date</Typography>
                    </th>
            </Grid>
            <Grid item  xs={12} sm={12} md={9} lg={9} xl={9}>
            <td><Typography> {data1?.assignedDate}</Typography></td>
            </Grid>
        </Grid>
    </tr>


    <tr>
        <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <th > <Typography variant="h5">Status Report Date</Typography>
                   </th>
            </Grid>
            <Grid item  xs={12} sm={12} md={9} lg={9} xl={9}>
            <td> <Typography>{data1?.statusReportDate.length>0?data1?.statusReportDate.slice(0,10):"" }</Typography></td>
            </Grid>
        </Grid>
    </tr>



    <tr>
        <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <th > <Typography variant="h5">Team Name</Typography>
                   
                   </th>
            </Grid>
            <Grid item  xs={12} sm={12} md={9} lg={9} xl={9}>
            <td>  <Typography>{data1?.team}</Typography></td>
            </Grid>
        </Grid>
    </tr>
    <tr>
        <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <th > <Typography variant="h5">Assigned By</Typography>
                   
                   </th>
            </Grid>
            <Grid item  xs={12} sm={12} md={9} lg={9} xl={9}>
            <td>  <Typography>{data1?.assignedBy}</Typography></td>
            </Grid>
        </Grid>
    </tr>
    <tr>
        <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <th > <Typography variant="h5">Verified</Typography>
                    
                   </th>
            </Grid>
            <Grid item  xs={12} sm={12} md={9} lg={9} xl={9}>
            <td> 
{verifiedBy!=null  ? <PublishedWithChangesIcon sx={{backgroundColor:"green",width:"50px",height:"30px"}}></PublishedWithChangesIcon>:<PublishedWithChangesIcon sx={{backgroundColor:"red",width:"50px",height:"30px"}}></PublishedWithChangesIcon> }


            </td>
            </Grid>
        </Grid>
    </tr>








       </table>



</Card>

   </Box>
</Box>

    )


}