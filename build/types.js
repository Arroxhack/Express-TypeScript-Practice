"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visibility = exports.Weather = void 0;
/* enum, tipo de dato de typescript, tambien funciona en runtime/ejecucion. Puedo hacer Weather.Sunny y me debería devolver "sunny" */
/* Hay que cambiar el nombre de este archivo de types.d.ts a types.ts ya que ahora este archivo si se convierte a js ya que el enum es codigo que puedo usar en js. */
var Weather;
(function (Weather) {
    Weather["Sunny"] = "sunny";
    Weather["Rainy"] = "rainy";
    Weather["Cloudy"] = "cloudy";
    Weather["Windy"] = "windy";
    Weather["Stormy"] = "stormy";
})(Weather = exports.Weather || (exports.Weather = {}));
;
var Visibility;
(function (Visibility) {
    Visibility["Great"] = "great";
    Visibility["Good"] = "good";
    Visibility["Ok"] = "ok";
    Visibility["Poor"] = "poor";
})(Visibility = exports.Visibility || (exports.Visibility = {}));
;
;
/* SpecialDiaryEntry tiene todas las propiedades de DiaryEntry más flightNumber. Y usamos este. */
// interface SpecialDiaryEntry extends DiaryEntry { 
//     flightNumber: number
// };
/* Con type puede hacerse tambien pero es para expresar de forma distinta. O sea que este lo usamos meh  */
// type SpecialDiaryEntry2 = DiaryEntry & {
//     flightNumber: number
// };
