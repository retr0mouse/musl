import { Link } from "react-router-dom";
import TemplateButton from "../components/TemplateButton";
import { useEffect, useState } from "react";
import { Template } from "../interfaces/Template";
import { TemplateApi } from "../api/templateApi";

export default function GymPage() {
    const [templates, setTemplates] = useState<Template[]>([]);

    useEffect(() => {
        TemplateApi.getAllTemplates().then((templates) => {
            setTemplates(templates);
        });
    }, [])

    return (
        <>
            <h1 className="text-5xl font-black font-mono mb-8">Start workout</h1>
            <Link
                to={'/gym-workout'}
                state={{ workoutTitle: "Empty Workout" }}
                className={"block max-w-80"}
            >
                <div className={"bg-accent font-semibold text-2xl py-3 px-2 rounded-xl mt-2 text-center text-[#ffffff]"}>
                    Start an Empty Workout
                </div>
            </Link>
            <h1 className="text-3xl font-black font-mono mt-24 mb-4">My templates</h1>
            <div className={"flex gap-4 md:flex-row flex-col"}>
                {templates.map((template) => (
                    <TemplateButton key={template.id} template={template} />
                ))}
            </div>

        </>
    );
}
