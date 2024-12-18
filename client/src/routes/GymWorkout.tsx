import { useState } from "react";
import { ExerciseComponent } from "../components/ExerciseComponent";
import { useLocation } from "react-router-dom";

export default function GymWorkout() {
    const location = useLocation();
    const [exercises, setExercises] = useState<number[]>([]);
    const [nextExerciseId, setNextExerciseId] = useState(0);
    const workoutTitle = location.state?.workoutTitle || "Untitled Workout";

    function addExercise() {
        setExercises([...exercises, nextExerciseId]);
        setNextExerciseId(nextExerciseId + 1);
    }

    function removeExercise(id: number) {
        setExercises(exercises.filter(e => e !== id));
    }

    return (
        <>
            <h1 className="text-4xl font-mono text-center mb-8">{workoutTitle}</h1>

            {exercises.map((id) => (
                <ExerciseComponent
                    key={id}
                    onRemove={() => removeExercise(id)}
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
