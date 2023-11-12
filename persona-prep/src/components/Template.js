import { Grid, Paper } from '@mui/material';
import React from 'react';
import CustomVerticalStepper from './CustomVerticalStepper.js';
import Button from "@mui/material/Button";

const Template = () => {
    return(
<div className="page" style={{backgroundColor: "white"}}>
            <div className="container">
                <div class="logo"><img src="/Logo/Persona1.png" alt="logo"/></div>
                <div class="variable">enter name</div>
            </div>
            <div className="bodyform">
                <Grid container spacing={2}>
                    <Grid xs={4} style={{padding: "25px"}}>
                        <CustomVerticalStepper></CustomVerticalStepper>
                    </Grid>
                    <Grid xs={8} style={{backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", paddingLeft: "10px", borderLeft: "2px solid black"}}>
                    <form>
                        <label>sample</label><br/>
                        <input type="text"name="name"/><br/>
                        <label>sample</label><br/>
                        <input type="text"name="name"/><br/>
                        <label>sample</label><br/>
                        <input type="text"name="name"/><br/>
                        <label>sample</label><br/>
                        <input type="text"name="name"/><br/>
                        <label>sample</label><br/>
                        <input type="text"name="name"/><br/>
                        <label>sample</label><br/>
                        <input type="text"name="name"/><br/>
                        <label>sample</label><br/>
                        <input type="text"name="name"/><br/>
                        <Button style={{borderRadius: 10,backgroundColor: "white",padding: "18px 36px",fontSize: "1px"}}variant="contained">samplebutton</Button>
                    </form>
                    </Grid>
                </Grid>
            
            </div>
            
                {/* <input type="text"name="name"/><br/>
                <label>hello</label><br/>
                <input type="text"name="name"/><br/>
                <label>hello</label><br/>
                <input type="text"name="name"/><br/>
                <label>hello</label><br/>
                <input type="text"name="name"/><br/> */}

            
        </div>
    )

}
export default Template