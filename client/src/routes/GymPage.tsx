import {Link} from "react-router-dom";
import TemplateButton from "../components/TemplateButton";

export default function GymPage() {

    return (
        <>
            <h1 className="text-5xl font-black font-mono mb-8">Start workout</h1>
            <Link
                to={'/gym-workout'}
                state={{ workoutTitle: "Empty Workout"}}
                className={"block w-80"}
            >
                <div className={"bg-accent font-semibold text-2xl py-3 px-2 rounded-xl mt-2 text-center text-[#ffffff]"}>
                    Start an Empty Workout
                </div>
            </Link>
            <h1 className="text-3xl font-black font-mono mt-24 mb-4">My templates</h1>
            <Link
                to={'/gym-workout'}
                state={{ workoutTitle: "Strength Training"}}
                className={"block w-96"}
                >
                    <TemplateButton template={{
                        id: 0,
                        title: "Upper Body",
                        notes: "the typical upper body workout",
                        exercises: [
                            {
                                id: 0,
                                title: "Bench Press",
                                imageUrl: "none",
                                description: "just bench lol"
                            }
                        ]
                    }}/>
                </Link>
            
        </>
    );
}
