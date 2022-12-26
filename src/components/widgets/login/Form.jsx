import * as React from 'react';
//import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';

function GetLogin() {

}

export default function TextareaFormProps() {
    return (

        <form
            onSubmit={(event) => {
                event.preventDefault();
            }}
        >
            Username <Textarea
                placeholder="Please enter Username"
                required
                sx={{mb: 1}}
            />
            Password <Textarea placeholder="Please enter Password" required sx={{mb: 1}}/>
        </form>

    );
}