import { combineReducers } from 'redux';
import WeatherReducer from './Reducer_FetchWeather';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
