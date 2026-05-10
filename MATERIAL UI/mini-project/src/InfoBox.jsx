import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import AirIcon from '@mui/icons-material/Air';
import CompressIcon from '@mui/icons-material/Compress';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import "./InfoBox.css"

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1640026786617-5848989fe698?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.jpg?s=2048x2048&w=is&k=20&c=MEinOvXAEFy9XXcclTgQV64m_FaoT_NRz8YyWItS9zM=";
    const COLD_URL = "https://images.unsplash.com/photo-1612119276551-be9efb8ea36a?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    // Get weather condition icon
    const getWeatherIcon = () => {
        if (info.humidity > 80) return <ThunderstormIcon className="weather-icon" sx={{ color: '#00bcd4' }} />;
        if (info.temp > 18) return <WbSunnyIcon className="weather-icon" sx={{ color: '#ff9800' }} />;
        return <AcUnitIcon className="weather-icon" sx={{ color: '#2196f3' }} />;
    };

    // Get temperature color
    const getTempColor = () => {
        if (info.temp > 30) return '#d32f2f';
        if (info.temp > 18) return '#ff9800';
        return '#2196f3';
    };

    return (
        <div className="InfoBox">
            <h1>Weather Dashboard</h1>
            <div className='CardContainer'>
                <Card sx={{ maxWidth: 400, width: '100%' }}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={
                            info.humidity > 80 ? RAIN_URL
                            : info.temp > 18 ? HOT_URL 
                            : COLD_URL
                        }
                        title="weather image"
                    />
                    <CardContent sx={{ padding: '24px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                                {info.city}
                            </Typography>
                            {getWeatherIcon()}
                        </Box>

                        <Chip 
                            label={info.weather.toUpperCase()} 
                            sx={{ 
                                mb: 2, 
                                fontWeight: 'bold',
                                background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                                color: 'white'
                            }} 
                        />

                        <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            mb: 3,
                            p: 2,
                            background: `linear-gradient(135deg, ${getTempColor()}22 0%, ${getTempColor()}44 100%)`,
                            borderRadius: '15px'
                        }}>
                            <ThermostatIcon sx={{ fontSize: '3rem', color: getTempColor(), mr: 1 }} />
                            <Typography variant="h2" sx={{ fontWeight: 'bold', color: getTempColor() }}>
                                {info.temp}°C
                            </Typography>
                        </Box>

                        <Box className="weather-details">
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                <ThermostatIcon sx={{ mr: 1, color: '#e74c3c' }} />
                                <Typography variant="body1" sx={{ flex: 1, fontWeight: 500 }}>
                                    Feels Like: <strong>{info.feelsLike}°C</strong>
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                <OpacityIcon sx={{ mr: 1, color: '#3498db' }} />
                                <Typography variant="body1" sx={{ flex: 1, fontWeight: 500 }}>
                                    Humidity: <strong>{info.humidity}%</strong>
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, pt: 2, borderTop: '2px solid #ddd' }}>
                                <Box sx={{ textAlign: 'center', flex: 1 }}>
                                    <Typography variant="caption" sx={{ color: '#7f8c8d', display: 'block' }}>
                                        Min Temp
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2980b9' }}>
                                        {info.tempMin}°C
                                    </Typography>
                                </Box>
                                <Box sx={{ textAlign: 'center', flex: 1 }}>
                                    <Typography variant="caption" sx={{ color: '#7f8c8d', display: 'block' }}>
                                        Max Temp
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#e74c3c' }}>
                                        {info.tempMax}°C
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}