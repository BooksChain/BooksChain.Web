import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ButtonActions from "./AddActions";

const actions = ButtonActions()

export default function BasicSpeedDial(props) {
    return (
        <SpeedDial
            ariaLabel="Add Book"
            sx={{position: 'absolute', bottom: 60, right: 70}}
            icon={<SpeedDialIcon/>}
        >
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                />
            ))}
        </SpeedDial>

    );
}