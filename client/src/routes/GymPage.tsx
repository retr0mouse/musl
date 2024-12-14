import {Link} from "react-router-dom";

export default function GymPage() {

    return (
        <>
            <h1 className="text-4xl font-mono text-center mb-8">Pick your workout</h1>

            <Link
                to={'/gym-workout'}
                state={{ workoutTitle: "Empty Workout"}}
            >
                <div className={"w-full bg-amber-200 font-semibold text-2xl py-3 rounded mt-2 text-center"}>
                    Start an Empty Workout
                </div>
            </Link>
        </>
    );
}
