import { Template } from "../interfaces/Template"

interface Props {
    template: Template
}

export default function TemplateButton(props: Props) {
    return (
        <div>
            <div className={"w-54 h-48 font-semibold text-2xl p-5 rounded mt-2 text-center bg-secondary"}>
                <div className="text-start">
                    <h2>{props.template.title}</h2>
                    <p className="">{pluralize(props.template.exercises.length, "exercise")}</p>
                    {props.template.exercises.map((exercise) => (
                        <p className="text-lg opacity-70" key={exercise.id}>
                            {exercise.title}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

function pluralize(n: number, word: string): string {
    return n === 1 ? `${n} ${word}` : `${n} ${word}s`;
}