import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextareaFormProps from "./Form";
import Grid2 from "@mui/material/Unstable_Grid2";

//import Button from '@mui/joy/Button';

function Login() {

}

export default function LoginWidget() {
    return (
        <Card>
            <CardContent>
               <Typography sx={{fontSize: 20}} color="text.secondary" gutterBottom>
                    Fast Login
                </Typography>
                <TextareaFormProps/>
            </CardContent>
            <CardActions>
                <Grid2 container spacing={0}>
                    <Grid2 xs={11}>
                    </Grid2>
                    <Grid2 xs={1}>
                        <Button variant="contained">Login</Button>
                    </Grid2>
                </Grid2>
            </CardActions>
        </Card>
    )
}