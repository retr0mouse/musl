import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import HandleIcon from "/public/icons/HandleIcon.svg";

interface Props {
    id: string | number;
    title: string;
}

export function SortableExercise({ id, title }: Props) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} className="bg-gray-100 p-2 my-1 rounded-md flex items-center justify-between">
            <p className="ml-2">{title}</p>
            <div
                {...listeners}
                {...attributes}
                className="cursor-grab p-2"
            >
                <img src={HandleIcon} className="text-gray-500 size-3" />
            </div>
        </div>
    );
}
