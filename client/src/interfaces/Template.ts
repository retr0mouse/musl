import { Exercise } from "./Exercise";

export interface Template {
    id: number;
    title: string;
    notes: string;
    exercises: Exercise[];
}