import {Link, Route, Routes} from "react-router-dom"
import HomePage from "./routes/HomePage.tsx";
import GymPage from "./routes/GymPage.tsx";
import BoulderingPage from "./routes/BoulderingPage.tsx";
import GymWorkout from "./routes/GymWorkout.tsx";

export default function App() {
    return (
        <>
            <nav className={'bg-primary text-3xl font-black pl-3 pb-2'}><Link to={'/'}>musl.</Link></nav>
            <main className={'mt-16 md:px-24 px-8'}>
                <Routes>
                    <Route path={'/'} element={<HomePage />}></Route>
                    <Route path={'/gym'} element={<GymPage />}></Route>
                    <Route path={'/bouldering'} element={<BoulderingPage />}></Route>
                    <Route path={'/gym-workout'} element={<GymWorkout />}></Route>
                </Routes>
            </main>
        </>
    )
}
