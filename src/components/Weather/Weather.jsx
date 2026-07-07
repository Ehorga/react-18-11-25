import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getWeatherThunk } from './../../store/weatherSlice';

const Weather = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getWeatherThunk({"latitude": 49.2331, "longitude": 28.4682}))
       
    }, [dispatch]);
    return (
        <div>
            weather
        </div>
    );
}

export default Weather;
