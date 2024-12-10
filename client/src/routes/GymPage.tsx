import React, { useState } from "react";

let nextId = 4;

export default function GymPage() {
    const [sets, setSets] = useState<{
        id: number,
        previous: number | null,
        weight: number | null,
        reps: number | null
    }[]>([
        { id: 0, previous: 10, weight: 10, reps: 10 },
        { id: 1, previous: 10, weight: 10, reps: 10 },
        { id: 2, previous: 10, weight: 10, reps: 10 },
        { id: 3, previous: 10, weight: 10, reps: 10 }
    ]);

    function addEmptySet() {
        setSets([...sets, {
            id: nextId++,
            previous: null,
            weight: null,
            reps: null
        }]);
    }

    function removeSet(id: number) {
        setSets(sets.filter(t => t.id !== id));
    }

    return (
        <>
            <h1 className="text-4xl font-mono text-center">Gym workout</h1>
            <div className="grid grid-cols-5 gap-y-1 max-w-2xl place-self-center">
                {/* Table Headers */}
                <div className="font-bold text-center">Action</div>
                <div className="font-bold text-center">Set</div>
                <div className="font-bold text-center">Previous</div>
                <div className="font-bold text-center">Weight</div>
                <div className="font-bold text-center">Reps</div>

                {/* Table Rows */}
                {sets.map((set, index) => (
                    <React.Fragment key={set.id + index}>
                        <button
                            onClick={() => removeSet(set.id)}
                            className="text-red-500 font-bold"
                        >
                            x
                        </button>
                        <div className="w-3/4 place-self-center text-center shadow-inner shadow-neutral-700 rounded">
                            {index + 1}
                        </div>
                        <input
                            name="previous"
                            value={set.previous ?? ''}
                            onChange={(e) => {
                                const value = e.target.value ? parseInt(e.target.value) : null;
                                setSets(sets.map(s => s.id === set.id ? { ...s, previous: value } : s));
                            }}
                            className="text-center w-3/4 place-self-center rounded bg-neutral-700"
                            placeholder={set.previous !== null ? set.previous.toString() : "0"}
                        />
                        <input
                            name="weight"
                            value={set.weight ?? ''}
                            onChange={(e) => {
                                const value = e.target.value ? parseInt(e.target.value) : null;
                                setSets(sets.map(s => s.id === set.id ? { ...s, weight: value } : s));
                            }}
                            className="text-center w-3/4 place-self-center rounded bg-neutral-700"
                            placeholder={set.weight !== null ? set.weight.toString() : "0"}
                        />
                        <input
                            name="reps"
                            value={set.reps ?? ''}
                            onChange={(e) => {
                                const value = e.target.value ? parseInt(e.target.value) : null;
                                setSets(sets.map(s => s.id === set.id ? { ...s, reps: value } : s));
                            }}
                            className="text-center w-3/4 place-self-center rounded bg-neutral-700"
                            placeholder={set.reps !== null ? set.reps.toString() : "0"}
                        />
                    </React.Fragment>
                ))}

                {/* Add Set Button */}
                <button
                    onClick={addEmptySet}
                    className="border-2 border-neutral-700 mt-3 col-start-1 col-end-6 w-11/12 place-self-center rounded py-1"
                >
                    Add a set
                </button>
            </div>
        </>
    );
}
