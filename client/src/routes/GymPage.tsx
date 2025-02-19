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
            <h1 className="text-3xl font-bold font-sans mb-4">Start workout</h1>
            <Link
                to={'/gym-workout'}
                state={{ template: { title: "Empty workout", exercises: [] } }}
            >
                <div className={"btn btn-primary "}>
                    Start an Empty Workout
                </div>
            </Link>
            <h2 className="text-xl font-bold font-sans mt-12 mb-2">My templates</h2>
            <div className={"flex gap-4 md:flex-row flex-col"}>
                {templates.map((template) => (
                    <TemplateButton key={template.id} template={template} />
                ))}
            </div>

        </>
    );
}
