import { Template } from "../interfaces/Template"
import editIcon from "../assets/EditIcon.svg";
import clockIcon from "../assets/ClockIcon.svg";
import { Link } from "react-router-dom";

interface Props {
    template: Template
}

export default function TemplateButton(props: Props) {
    return (
        <Link to="/gym-workout" state={{ template: props.template }} className={"w-80 h-56 font-semibold text-2xl p-5 rounded-xl mt-2 text-center bg-secondary flex flex-col justify-between"}>
            <div className="flex justify-between">
                <div className="text-start">
                    <h2>{props.template.title}</h2>
                    <p className="/">{pluralize(props.template.exercises.length, "exercise")}</p>
                </div>
                <Link to={`/`}>
                    <img src={editIcon} />
                </Link>
            </div>

            <div className="mt-2 text-start overflow-hidden">
                {props.template.exercises.map((exercise) => (
                    <p className="text-lg opacity-70" key={exercise.id}>
                        {exercise.title}
                    </p>
                ))}
            </div>


            <div className="flex justify-end gap-2 items-center mt-2">
                <img className="size-5 mt-1" src={clockIcon} />
                <p>2 days ago</p>
            </div>
        </Link>
    )
}

function pluralize(n: number, word: string): string {
    return n === 1 ? `${n} ${word}` : `${n} ${word}s`;
}