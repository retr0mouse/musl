import { useState } from "react";
import { ExerciseComponent } from "../components/ExerciseComponent";
import { useLocation } from "react-router-dom";
import { Template } from "../interfaces/Template";
import { Exercise } from "../interfaces/Exercise";

export default function GymWorkout() {
    const location = useLocation();
    const template = location.state?.template as Template;
    const [exercises, setExercises] = useState<Exercise[]>(template.exercises);
    const [nextExerciseId, setNextExerciseId] = useState(template.exercises.length);



    function addExercise() {
        setExercises([...exercises, {
            id: nextExerciseId,
            title: "Untitled Exercise",
            imageUrl: "",
            description: "string"
        }]);
        setNextExerciseId(nextExerciseId + 1);
    }

    function removeExercise(id: number) {
        setExercises(exercises.filter(e => e.id !== id));
    }

    return (
        <>
            <h1 className="text-4xl font-mono text-center mb-8">{template.title}</h1>

            {exercises.map((exercise, index) => (
                <ExerciseComponent
                    key={index}
                    onRemove={() => removeExercise(index)}
                    title={exercise.title}
                />
            ))}

            <button
                onClick={addExercise}
                className="w-full bg-amber-200 font-semibold text-2xl py-3 rounded mt-2"
            >
                Add new exercise
            </button>
        </>
    );
}
