import { Box, Card, Container, Paper, TextField } from "@mui/material";
import { GlobalButton } from "../stylecomponent/GlobalButton";
import {Typography} from "@mui/material";
import {Grid} from "@mui/material";









export default function TaskDetailsExpandedView(){


    
    return (
        <Box sx={{backgroundColor:"#FFFFFF",height:"80vh", justifyContent:"center"}}>

            <Box sx={{mt:2}}>
        <Typography  style={{marginLeft:"30px",fontSize:"28px"}} color="#2196F3">
            Task Details
        </Typography>
        <GlobalButton.GlobalDivider></GlobalButton.GlobalDivider>
            </Box>
 

       <Box sx={{  mt:3,display:"flex",backgroundColor:"#FFFFFF",height:"auto",minHeight:"60vh" ,justifyContent:"center"}}>

       <Card elevation={1} sx={{  display:"-ms-inline-flexbox",heith:"auto",width:"65vw"}}>
         
         <Box sx={{width:"40vw"}}>
            <Grid container sx={{mt:1,width:"40vw"}}  >

                <Grid item  xs={12} sm={12} md={6} lg={6} xl={6} sx={{ justifyContent:"center"}}>
                <center> <Typography variant="h5">Employee Id</Typography>
                    <Typography>1006</Typography></center>
                    {/* <TextField label="empId" disabled value="1006"></TextField> */}
                </Grid>

                <Grid item  xs={12} sm={12} md={6} lg={6} xl={6} >
                   
                   <center><Typography variant="h5">Task id</Typography>
                    <Typography>103</Typography></center>
                    {/* <TextField disabled value="103"></TextField> */}
                </Grid>

            </Grid>

         </Box>
<GlobalButton.GlobalDivider></GlobalButton.GlobalDivider>
<Box sx={{display:"block",mt:3}}>
    <Grid Container >
        <Grid item xs={12}>
        <Typography variant="h5">Task Details</Typography>
        <center> <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos commodi sunt, dolores accusamus architecto velit doloremque nobis veritatis ut dolorem veniam voluptas illo laudantium animi, error aliquid libero nesciunt provident adipisci voluptate ullam odio! Vero rerum provident cumque perferendis impedit animi. Dicta fugit dolores incidunt ipsam aperiam expedita a reiciendis.</Typography></center>
        </Grid>
        <hr/>
        <Grid item xs={12}>
        <Typography variant="h5">Task Description</Typography>
        <center> <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, labore.</Typography></center>
        </Grid>
        <hr/>
        <Grid item xs={12}>
        <Typography variant="h5">Reason</Typography>
        <center> <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi fugit voluptas minus facilis dolores repellendus voluptate excepturi laboriosam debitis. Doloribus.</Typography></center>
            
        </Grid>
    </Grid>

</Box>
<GlobalButton.GlobalDivider></GlobalButton.GlobalDivider>
<Box sx={{display:"flex",width:"70vw"}}>

  <Grid container sx={{mt:1,width:"70vw",justifyContent:"space-between"}}>
    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} >
    <center><Typography variant="h5">Status</Typography>
                    <Typography>Completed</Typography></center>

    </Grid>
    <Grid item  xs={12} sm={12} md={4} lg={4} xl={4}>
    <center><Typography variant="h5">Assign Date</Typography>
                    <Typography>11/02/1999</Typography></center>
    </Grid>
    <Grid item  xs={12} sm={12} md={4} lg={4} xl={4}>
    <center><Typography variant="h5">Status Report Date</Typography>
                    <Typography>11/02/1999</Typography></center>
    </Grid>
  </Grid>

</Box>
<GlobalButton.GlobalDivider></GlobalButton.GlobalDivider>

<Box sx={{display:"flex",width:"75vw"}}>

  <Grid container sx={{mt:1,width:"70vw",justifyContent:"space-between"}}>
    <Grid item  xs={12} sm={12} md={4} lg={4} xl={4}>
    <center><Typography variant="h5">Team Name</Typography>
                    <Typography>Microservices</Typography></center>

    </Grid>
    <Grid item  xs={12} sm={12} md={4} lg={4} xl={4}>
    <center><Typography variant="h5">Assigned By</Typography>
                    <Typography>1006</Typography></center>
    </Grid>
    <Grid item  xs={12} sm={12} md={4} lg={4} xl={4}>
    <center><Typography variant="h5">Verified By</Typography>
                    <Typography>2006</Typography></center>
    </Grid>
  </Grid>

</Box>


     </Card>
       </Box>

        
           



        </Box>

    )
}