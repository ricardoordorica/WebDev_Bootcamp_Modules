import { TextField } from "@mui/material"
import { Slider } from "@mui/material";
import { Box } from "@mui/material";

import { useState } from "react";

export default function FormDemo() {
    const [name, setName] = useState('');
    const [volume, setVolume] = useState(50);

    const updateName = (e) => {
        setName(e.target.value);
    }

    const changeVolume = (e, newVal) => {
        setVolume(newVal);
    }

    return (
        <Box sx={{
            border: '1px solid red', 
            p: 6, width: 300, 
            height: 300, 
            margin: '0 auto'
        }}>
            <h1>Name is: {name}</h1>
            <TextField 
                id="outlined-basic"
                label="Puppy Name"
                variant="outlined"
                placeholder="Dana"
                value={name}
                onChange={updateName}
            />

            <h2>Volume {volume}</h2>
            <Slider aria-label="Volume" value={volume} onChange={changeVolume} />
        </Box>
    );
}