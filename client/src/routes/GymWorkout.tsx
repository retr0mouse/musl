import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ExerciseComponent } from "../components/ExerciseComponent";
import { Exercise } from "../interfaces/Exercise";
import { Template } from "../interfaces/Template";

export default function GymWorkout() {
    const location = useLocation();
    const template = location.state.template as Template;
    const [exercises, setExercises] = useState<Exercise[]>(template.exercises);
    const [nextExerciseId, setNextExerciseId] = useState(template.exercises.length);
    const [editTitle, setEditTitle] = useState(false);
    const [title, setTitle] = useState(template.title);
    const [notes, setNotes] = useState(template.notes);

    useEffect(() => {
        console.log(exercises);
    }, [exercises]);

    function addExercise() {
        setExercises([...exercises, {
            id: nextExerciseId,
            title: "Untitled Exercise",
            imageUrl: "",
            description: "string"
        }]);
        setNextExerciseId(nextExerciseId + 1);
    }

    function removeExercise(index: number) {
        setExercises(exercises.filter((_, i) => i !== index));
    }

    return (
        <div className="flex flex-col self-center max-w-2xl mx-auto">
            {editTitle ?
                <div className="flex justify-between mb-8">
                    <div className="flex flex-col gap-2">
                        <input
                            className="input input-bordered text-3xl font-sans font-bold pl-0 w-80"
                            value={title}
                            autoFocus
                            onChange={(e) => setTitle(e.target.value)}
                            maxLength={19}
                        />
                        <textarea
                            className="text-xl font-normal pl-0 box-border field-sizing-content max-w-96 border-gray-300 radius-md bg-white"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </div>

                    <button className="btn btn-success text-white rounded-md w-12 h-10" onClick={() => setEditTitle(false)}>
                        <span className="font-sans font-semibold">Save</span>
                    </button>
                </div>
                :
                <div className="flex justify-between mb-8">
                    <div className="flex flex-col gap-2 max-w-96">
                        <h1 className="h-12 text-3xl font-sans font-bold text-start">{title}</h1>
                        <h2 className="h-12 text-xl font-sans font-normal text-start truncate">{notes}</h2>
                    </div>
                    <button className="btn btn-info text-white rounded-md w-12 h-10" onClick={() => setEditTitle(true)}>
                        <span className="font-sans font-semibold">Edit</span>
                    </button>
                </div>
            }

            {exercises.map((exercise, index) => (
                <ExerciseComponent
                    key={exercise.id}
                    onRemove={() => removeExercise(index)}
                    title={exercise.title}
                />
            ))}

            <button
                onClick={addExercise}
                className="btn btn-primary"
            >
                Add a new Exercise
            </button>
        </div>

    );
}
