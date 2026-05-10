import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "3be6844e22a0bd7845ca2a0f03a15b48";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
        setError(false); // Clear error when typing
    };

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            let newInfo = await getWeatherInfo();
            setCity("");
            updateInfo(newInfo);
            setError(false);
        } catch (err) {
            setError(true);
        }
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="City"
                    label="Enter City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                    fullWidth
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            color: 'white',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '12px',
                            '& fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                            },
                            '&:hover fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'white',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: 'rgba(255, 255, 255, 0.7)',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: 'white',
                        },
                    }}
                />
                <Button
                    variant="contained"
                    type="submit"
                    startIcon={<SearchIcon />}
                    fullWidth
                    sx={{
                        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                        borderRadius: '12px',
                        padding: '12px',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 20px rgba(254, 107, 139, 0.5)',
                        '&:hover': {
                            background: 'linear-gradient(45deg, #FE6B8B 60%, #FF8E53 120%)',
                            boxShadow: '0 6px 25px rgba(254, 107, 139, 0.7)',
                            transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                    }}
                >
                    Search Weather
                </Button>
                {error && (
                    <Alert
                        severity="error"
                        sx={{
                            borderRadius: '12px',
                            fontWeight: 500,
                            animation: 'shake 0.5s ease'
                        }}
                    >
                        City not found! Please try again.
                    </Alert>
                )}
            </form>
        </div>
    )
}

//3be6844e22a0bd7845ca2a0f03a15b48