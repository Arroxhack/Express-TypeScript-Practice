import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry} from "../types";
import diaryData from "./diaries.json";
// import diaryData2 from "./diariesPrueba";  // opcion 2 que no le gusta a midu pero que se usa tmb
// Orden en que importa TS por defecto si no se le pone extension -> ".tsx, ".ts, ".node", ".js", ".json"


const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;  // diaries es un array de DiaryEntry // usamos asercion de tipos: as Array<DiaryEntry> // Ya que no controlamos lo que nos viene de una api, no lo creamos nosotros.

export const getEntries = (): Array<DiaryEntry> => diaries; 

export const findById = (id: number) => diaries.filter((diary) => diary.id === id);

/* Forma para mostrar de lo que nos salva typescript, ya que el metodo .find devuelve el primer elemento que coincide o si ninguno lo hace devuelve undefined. */
export const findById2 = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
    const entry = diaries.find(diary => diary.id === id)
    if (entry) {
        const { comment, ...restOfDiary } = entry
        return restOfDiary
    }
    return undefined // Tengo que agregar esto por la configuracion de no implicit returns
};

export const getEntriesWithoutSensitiveInfo = (): Array<NonSensitiveInfoDiaryEntry> => {
    return  diaries.map(({id, date, weather, visibility}) => {
        return {
            id,
            date,
            weather,
            visibility
        }
    }); 
};

export const addDiaryEntry = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
    const diaryEntry = {
        id: Math.max(...diaries.map(d => d.id)) + 1, // diaries.length + 1 --> Mas facil pero solo si estan en orden.
        ...newDiaryEntry 
    };
    diaries.push(diaryEntry);
    return diaryEntry;
};









/* opcion 2 que no le gusta a midu pero que se usa tmb */
// const diaries2: Array<DiaryEntry> = diaryData2;

// export const getEntries2 = () => diaries2;