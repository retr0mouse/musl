import React, { useState } from "react";

interface Set {
    id: number;
    previous: number | null;
    weight: number | null;
    reps: number | null;
}

interface ExerciseProps {
    onRemove: () => void;
}

export function ExerciseComponent({ onRemove }: ExerciseProps) {
    const [title, setTitle] = useState("Untitled Exercise");
    const [sets, setSets] = useState<Set[]>([]);
    const [nextId, setNextId] = useState(0);

    function addEmptySet() {
        setSets([...sets, {
            id: nextId,
            previous: null,
            weight: null,
            reps: null
        }]);
        setNextId(nextId + 1);
    }

    return (
        <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-2xl font-mono bg-transparent border-b border-neutral-700 focus:outline-none"
                />
                <button
                    onClick={onRemove}
                    className="text-red-500 font-bold px-2"
                >
                    x
                </button>
            </div>

            <div className="grid grid-cols-4 gap-y-1">
                <div className="font-bold text-center">Set</div>
                <div className="font-bold text-center">Previous</div>
                <div className="font-bold text-center">Weight (kg)</div>
                <div className="font-bold text-center">Reps</div>

                {sets.map((set, index) => (
                    <React.Fragment key={set.id}>
                        <div className="w-3/4 place-self-center text-center rounded text-neutral-400">
                            {index + 1}
                        </div>
                        <div
                            className="text-center w-3/4 place-self-center rounded text-neutral-400"
                        >
                            90 kg x 10
                        </div>
                        <input
                            name="weight"
                            value={set.weight ?? ''}
                            onChange={(e) => {
                                const value = e.target.value ? parseInt(e.target.value) : null;
                                setSets(sets.map(s => s.id === set.id ? { ...s, weight: value } : s));
                            }}
                            className="text-center w-3/4 place-self-center rounded bg-neutral-300"
                            placeholder="0"
                        />
                        <input
                            name="reps"
                            value={set.reps ?? ''}
                            onChange={(e) => {
                                const value = e.target.value ? parseInt(e.target.value) : null;
                                setSets(sets.map(s => s.id === set.id ? { ...s, reps: value } : s));
                            }}
                            className="text-center w-3/4 place-self-center rounded bg-neutral-300"
                            placeholder="0"
                        />
                    </React.Fragment>
                ))}

                <button
                    onClick={addEmptySet}
                    className="w-full border-2 border-neutral-700 mt-3 col-start-1 col-end-5 place-self-center rounded py-1"
                >
                    Add a set
                </button>
            </div>
        </div>
    );
}