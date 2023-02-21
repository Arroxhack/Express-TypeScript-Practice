import { NewDiaryEntry } from "./types";
import { Weather, Visibility } from "./enums";

/* Validacion de si algo es string */
const isString = (string: any): boolean => {
    return typeof string === "string" || string instanceof String ;
};

/* Validacion de si algo es string */
const isDate = (date: any): boolean => {
    return Boolean(Date.parse(date));
};

/* Validacion de si algo es Weather */
const isWeather = (weather: any): boolean => {
    return Object.values(Weather).includes(weather);
    // return ['sunny', 'rainy', 'cloudy', 'windy', 'stormy'].includes(weather) // Esta forma no la usamos
};

/* Validacion de si algo es Visibility */
const isVisibility = (visibility: any): boolean => {
    return Object.values(Visibility).includes(visibility);
};


/* Validacion de si el date que nos llega por request es string y Date */
const parseDate = (dateFromRequest: any): string => { // En este caso hacemos que devuelva string, pero lo podríamos complicar.
    if(!isString(dateFromRequest) || !isDate(dateFromRequest)){
        throw new Error("Incorrect or missing date");
    };
    return dateFromRequest;
};

/* Validacion de si el weather que nos llega por request es string y Weather */
const parseWeather = (weatherFromRequest: any): Weather => {
    if(!isString(weatherFromRequest) || !isWeather(weatherFromRequest)){
        throw new Error("Incorrect or missing weather");
    }
    return weatherFromRequest;
}; 

/* Validacion de si el weather que nos llega por request es string y Visibility */
const parseVisibility = (visibilityFromRequest: any): Visibility => {
    if(!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)){
        throw new Error("Incorrect or missing visibility");
    }
    return visibilityFromRequest;
}

/* Validacion de si el comment que nos llega por request es string */
const parseComment = (commentFromRequest: any): string => {
    if (!isString(commentFromRequest)) {
        throw new Error("Incorrect or missing comment")
    };
    return commentFromRequest;
};

/* Validacion de las propiedades que nos llegan en el objeto req */
const toNewDiaryEntry = (object: any): NewDiaryEntry => {
    const newEntry: NewDiaryEntry = {
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
        comment: parseComment(object.comment)
    }
    return newEntry; 
};

export default toNewDiaryEntry;