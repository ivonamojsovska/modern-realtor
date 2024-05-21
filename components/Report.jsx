import React, { useEffect, useState } from 'react';
import { TextField, Button, Grid, Card, CardMedia, CardContent, Typography, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import  jsonData  from '../public/data/data.json'

const Report = () => {
    const [homesForSale, setHomesForSale] = useState([]); 
    const [address, setAddress] = useState();
    const [home, setHome] = useState({});
    const [isFormInvalid, setIsFormInvalid] = useState(false);

    useEffect(() => {
        setHomesForSale(jsonData);
        console.log(homesForSale)
    }, [homesForSale]);

    const handleSelectInput = (event) => {
        setAddress(event.target.value);
        const selectedHome = homesForSale.find(home => home.address === event.target.value);
        setHome(selectedHome);
    };

    return (
        <div className="w-[80%] md:w-[60%] mx-auto mt-10">
            <h1 className='text-xl font-bold mb-5'>Use the Select Input to choose your future home</h1>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={8}>
                    <FormControl fullWidth>
                        <InputLabel id="address">Address</InputLabel>
                        <Select labelId="address" id="address" value={address} label="Address" error={isFormInvalid && !address.value} helperText={isFormInvalid && !address.value ? 'Address Required' : ''} onChange={handleSelectInput}>
                            {homesForSale.map(home => (
                            <MenuItem key={home.address} value={home.address}>{home.address}</MenuItem>
                            ))}
                        </Select>
                        {isFormInvalid && !address.value && (
                        <FormHelperText error>Address Required</FormHelperText>
                        )}
                    </FormControl>
                </Grid>
            </Grid>
            {address && (
            <Grid container spacing={2} style={{ marginTop: '20px' }}>
                <Grid item xs={12} sm={6} md={6} key={home.address}>
                    <h1 className='text-xl font-bold mb-5'>Result:</h1>
                <Card>
                    <CardMedia
                    component="img"
                    height="140"
                    image={home.imgSrc}
                    alt={`Image of ${home.address}`}
                    />
                    <CardContent>
                        <Typography variant="h9" component="div">
                            <h1 className='font-bold'>Address:</h1>{home.address}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h1 className='font-bold text-black mt-3'>Price:</h1>{home.price}/sqft
                        </Typography>
                    </CardContent>
                    </Card>
                </Grid>
            </Grid>
            )}
    </div>
    )
};

export default Report;