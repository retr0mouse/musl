import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <h1 className="text-3xl font-bold font-sans mb-4">Get started</h1>
            <h2 className="text-xl font-sans mb-8">Select the activity</h2>

            <div className="flex w-full flex-col lg:flex-row">
                <Link to={'/gym'} className="btn btn-primary font-mono card  rounded-box grid h-32 flex-grow place-items-center text-2xl font-normal">Gym Training</Link>
                <div className="divider lg:divider-horizontal">OR</div>
                <Link to={'/bouldering'} className="btn btn-primary font-mono card rounded-box grid h-32 flex-grow place-items-center text-2xl font-normal">Fingerboarding</Link>
            </div>
        </>
    )
}
