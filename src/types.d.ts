/* enum, tipo de dato de typescript, tambien funciona en runtime/ejecucion. Puedo hacer Weather.Sunny y me debería devolver "sunny" */
/* !!!!!!!!!!!!!!!! Los pongo en archivo enums.ts porque estos si se compilan a js y los puedo usar */
import { Weather, Visibility } from "./enums";
// export enum Weather { 
//     Sunny = 'sunny',
//     Rainy = 'rainy',
//     Cloudy = 'cloudy',
//     Windy = 'windy',
//     Stormy = 'stormy'
// };

// export enum Visibility {   
//     Great = 'great',
//     Good = 'good',
//     Ok = 'ok',
//     Poor = 'poor'
// };

/* Usamos enum en vez de type */
/* Usamos type cuando queremos algo más fijo, que no cambie ni se extienda */
// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';
// export type Visibility = 'great' | 'good' | 'ok' | 'poor';


/* Las interfaces estan hechas para poder ser extendidas. Usamos este. */
/* Ademas las interfaces podemos tener 2 con el mismo nombre y las propiedades se añaden */
export interface DiaryEntry { 
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string
};

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;

/* Una forma de hacerlo */
// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

/* Otra forma de hacerlo, el otro es bueno pero usamos este */
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>;

/* SpecialDiaryEntry tiene todas las propiedades de DiaryEntry más flightNumber. Y usamos este. */
// interface SpecialDiaryEntry extends DiaryEntry { 
//     flightNumber: number
// };






/* Con type puede hacerse tambien pero es para expresar de forma distinta. O sea que este lo usamos meh  */
// type SpecialDiaryEntry2 = DiaryEntry & {
//     flightNumber: number
// };