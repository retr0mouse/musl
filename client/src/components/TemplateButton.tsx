import { closestCenter, DndContext, DragEndEvent } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useState } from "react";
import { Link } from "react-router-dom";
import ClockIcon from "/public/icons/ClockIcon.svg";
import { Exercise } from "../interfaces/Exercise";
import { Template } from "../interfaces/Template";
import { SortableExercise } from "./SortableExercise";

interface Props {
    template: Template;
}

export default function TemplateButton({ template }: Props) {
    const [exercises, setExercises] = useState<Exercise[]>(template.exercises);

    function onDragEnd(event: DragEndEvent) {
        const { active, over } = event;
        if (!over || active.id === over.id) return;

        const oldIndex = exercises.findIndex(ex => ex.id === active.id);
        const newIndex = exercises.findIndex(ex => ex.id === over.id);

        setExercises(arrayMove(exercises, oldIndex, newIndex));
    }

    return (
        <>
            <button
                className="cursor-pointer bg-primary w-80 h-56 font-normal p-5 rounded-xl mt-2 text-center flex flex-col justify-between"
                onClick={() => (document.getElementById('template_modal' + template.title) as HTMLDialogElement).showModal()}
            >
                <div className="text-start">
                    <h2 className="text-xl">{template.title}</h2>
                    <p>{pluralize(template.exercises.length, "exercise")}</p>
                </div>

                <div className="mt-2 text-start overflow-hidden">
                    {exercises.map((exercise) => (
                        <p className="font-serif opacity-70" key={exercise.id}>
                            {exercise.title}
                        </p>
                    ))}
                </div>

                <div className="flex justify-end gap-2 items-center mt-2">
                    <img className="size-5 mt-1" src={ClockIcon} />
                    <p>2 days ago</p>
                </div>
            </button>

            <dialog id={"template_modal" + template.title} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h2 className="text-xl font-bold">{template.title}</h2>
                    <p className="mt-1 mb-4">{pluralize(template.exercises.length, "exercise")}</p>
                    <DndContext
                        collisionDetection={closestCenter}
                        onDragEnd={onDragEnd}
                        modifiers={[restrictToVerticalAxis]} // ⬅ Restricts movement to vertical only
                    >
                        <SortableContext items={exercises.map(e => e.id)} strategy={verticalListSortingStrategy}>
                            {exercises.map((exercise) => (
                                <SortableExercise key={exercise.id} id={exercise.id} title={exercise.title} />
                            ))}
                        </SortableContext>
                    </DndContext>
                    <Link to={'/gym-workout'} state={{ template: { ...template, exercises } }}>
                        <div className="btn btn-success text-white mt-2">Start workout</div>
                    </Link>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>Close</button>
                </form>
            </dialog>
        </>
    );
}

function pluralize(n: number, word: string): string {
    return n === 1 ? `${n} ${word}` : `${n} ${word}s`;
}
