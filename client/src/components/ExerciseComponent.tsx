import React, { useState } from "react";
import RemoveIcon from '/public/icons/RemoveIcon.svg';
import TrashIcon from '/public/icons/TrashIcon.svg';

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
    const title = props.title ? props.title : "Untitled Exercise";
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
        <div className="bg-white p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center mb-4">

                <h2 className="text-xl font-normal">{title}</h2>
                <button
                    onClick={props.onRemove}
                    className="size-6"
                >
                    <img src={TrashIcon} alt={"kek"} />
                </button>
            </div>

            <div className="grid gap-x-2 gap-y-1">
                <div className="font-bold text-center col-start-2">Set</div>
                <div className="font-bold text-center col-start-3">Previous</div>
                <div className="font-bold text-center col-start-4">Weight (kg)</div>
                <div className="font-bold text-center col-start-5">Reps</div>

                {sets.map((set, index) => (
                    <React.Fragment key={set.id}>
                        <button onClick={() => removeSet(set.id)} className={`${set.done ? 'bg-neutral-300 opacity-50' : 'bg-red-400'} p-1 w-6 h-6 rounded col-start-1 place-self-end hover:opacity-80 transition-opacity`}
                        >
                            <img src={RemoveIcon} alt={"kek"} />
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
                                setSets(sets.map(s => s.id === set.id ? { ...s, weight: value } : s));
                            }}
                            type="number"
                            min="0"
                            className="input input-bordered w-full h-7"
                            placeholder="0"
                        />
                        <input
                            disabled={set.done}
                            name="reps"
                            value={set.reps ?? ''}
                            onChange={(e) => {
                                const value = e.target.value ? parseInt(e.target.value) : null;
                                setSets(sets.map(s => s.id === set.id ? { ...s, reps: value } : s));
                            }}
                            type="number"
                            min="0"
                            className="input input-bordered w-full h-7"
                            placeholder="0"

                        />

                        <button
                            onClick={() => markSetDone(set)}
                            className={`${set.done ? 'bg-neutral-300 opacity-50' : 'bg-green-500'} p-1 w-6 h-6 rounded col-start-6 place-self-end hover:opacity-80 transition-opacity`}
                        >
                            <svg fill="none" viewBox="0 0 24 24">
                                <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.611 8.923 17.5 20 6.5" />
                            </svg>
                        </button>

                    </React.Fragment>
                ))}

                <button
                    onClick={addEmptySet}
                    className="btn w-full bg-base-300 mt-3 col-start-1 col-end-7 place-self-center"
                >
                    Add a Set
                </button>
            </div>
        </div>
    );
}