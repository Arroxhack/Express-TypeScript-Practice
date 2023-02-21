"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDiaryEntry = exports.getEntriesWithoutSensitiveInfo = exports.findById2 = exports.findById = exports.getEntries = void 0;
const diaries_json_1 = __importDefault(require("./diaries.json"));
// import diaryData2 from "./diariesPrueba";  // opcion 2 que no le gusta a midu pero que se usa tmb
// Orden en que importa TS por defecto si no se le pone extension -> ".tsx, ".ts, ".node", ".js", ".json"
const diaries = diaries_json_1.default; // diaries es un array de DiaryEntry // usamos asercion de tipos: as Array<DiaryEntry> // Ya que no controlamos lo que nos viene de una api, no lo creamos nosotros.
const getEntries = () => diaries;
exports.getEntries = getEntries;
const findById = (id) => diaries.filter((diary) => diary.id === id);
exports.findById = findById;
/* Forma para mostrar de lo que nos salva typescript, ya que el metodo .find devuelve el primer elemento que coincide o si ninguno lo hace devuelve undefined. */
const findById2 = (id) => {
    const entry = diaries.find(diary => diary.id === id);
    if (entry) {
        const { comment } = entry, restOfDiary = __rest(entry, ["comment"]);
        return restOfDiary;
    }
    return undefined; // Tengo que agregar esto por la configuracion de no implicit returns
};
exports.findById2 = findById2;
const getEntriesWithoutSensitiveInfo = () => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return {
            id,
            date,
            weather,
            visibility
        };
    });
};
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo;
const addDiaryEntry = (newDiaryEntry) => {
    const diaryEntry = Object.assign({ id: Math.max(...diaries.map(d => d.id)) + 1 }, newDiaryEntry);
    diaries.push(diaryEntry);
    return diaryEntry;
};
exports.addDiaryEntry = addDiaryEntry;
/* opcion 2 que no le gusta a midu pero que se usa tmb */
// const diaries2: Array<DiaryEntry> = diaryData2;
// export const getEntries2 = () => diaries2;
