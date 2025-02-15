import React, { useState } from "react";

interface Set {
    id: number;
    previous: number | null;
    weight: number | null;
    reps: number | null;
    done: boolean
}

interface Props {
    title: string;
    onRemove: () => void;
}

export function ExerciseComponent(props: Props) {
    const [title, setTitle] = useState(props.title ? props.title :"Untitled Exercise");
    const [sets, setSets] = useState<Set[]>([{
        id: 0,
        previous: null,
        weight: null,
        reps: null,
        done: false
    }]);
    const [nextId, setNextId] = useState(1);

    function addEmptySet() {
        setSets([...sets, {
            id: nextId,
            previous: null,
            weight: null,
            reps: null,
            done: false
        }]);
        setNextId(nextId + 1);
    }

    function removeSet(id: number) {
        setSets([...sets.filter(set => set.id !== id)]);
    }

    function markSetDone(set: Set) {
        set.done = !set.done;
        const index = sets.findIndex(curr => curr === set)
        setSets([
            ...sets.slice(0, index),
            set,
            ...sets.slice(index + 1)
            ]
        );
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
                    onClick={props.onRemove}
                    className="text-red-500 font-bold px-2"
                >
                    x
                </button>
            </div>

            <div className="grid gap-x-2 gap-y-1">
                <div className="font-bold text-center col-start-2">Set</div>
                <div className="font-bold text-center col-start-3">Previous</div>
                <div className="font-bold text-center col-start-4">Weight (kg)</div>
                <div className="font-bold text-center col-start-5">Reps</div>

                {sets.map((set, index) => (
                    <React.Fragment key={set.id}>
                        <button onClick={() => removeSet(set.id)} className={"bg-red-400 w-6 h-6 p-0.5 rounded col-start-1 self-center"}>
                            <img src={"/icons/remove.svg"} alt={"kek"}/>
                        </button>

                        <div
                            className="w-full place-self-center text-center rounded text-neutral-400 inline-flex gap-4 justify-center col-start-2">
                            <span className={'inline-block align-baseline'}>{index + 1}</span>
                        </div>
                        <div
                            className="w-full text-center place-self-center rounded text-neutral-400"
                        >
                            90 kg x 10
                        </div>
                        <input
                            disabled={set.done}
                            name="weight"
                            value={set.weight ?? ''}
                            onChange={(e) => {
                                const value = e.target.value ? parseInt(e.target.value) : null;
                                setSets(sets.map(s => s.id === set.id ? {...s, weight: value} : s));
                            }}
                            className="w-full text-center place-self-center rounded bg-neutral-300"
                            placeholder="0"
                        />
                        <input
                            disabled={set.done}
                            name="reps"
                            value={set.reps ?? ''}
                            onChange={(e) => {
                                const value = e.target.value ? parseInt(e.target.value) : null;
                                setSets(sets.map(s => s.id === set.id ? {...s, reps: value} : s));
                            }}
                            className="w-full text-center place-self-center rounded bg-neutral-300"
                            placeholder="0"
                        />

                        <button onClick={() => markSetDone(set)} className={"bg-green-300 p-1 w-6 h-6 rounded col-start-6 place-self-end"}>
                            <img src={"/icons/check.svg"} alt={"kek"}/>
                        </button>

                    </React.Fragment>
                ))}

                <button
                    onClick={addEmptySet}
                    className="w-full bg-neutral-300 mt-3 col-start-1 col-end-7 place-self-center rounded py-1 text-xl"
                >
                    Add a Set
                </button>
            </div>
        </div>
    );
}