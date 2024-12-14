import {Link, Route, Routes} from "react-router-dom"
import HomePage from "./routes/HomePage.tsx";
import GymPage from "./routes/GymPage.tsx";
import BoulderingPage from "./routes/BoulderingPage.tsx";
import GymWorkout from "./routes/GymWorkout.tsx";

export default function App() {
    return (
        <>
            <nav className={'bg-amber-400 text-3xl font-extrabold pl-3 pb-2'}><Link to={'/'}>musl.</Link></nav>
            <main className={'mt-4 px-5'}>
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
