import {Link} from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <h1 className={'place-self-center text-4xl font-mono'}>Get Started</h1>
            <h2 className={'my-5 text-lg'}>Select the activity</h2>
            <section className={'flex gap-4'}>
                <Link to={'/gym'} className={'w-32 place-items-center'}>
                    <div className={'rounded-xl'}>
                        <img className={'rounded-md'} src={'images/Dr-Mike-Israetel.jpg'}/>
                    </div>
                    <h1>Gym Training</h1>
                </Link>
                <Link to={'/bouldering'} className={'w-32 place-items-center'}>
                    <div className={'rounded-xl'}>
                        <img className={'rounded-md'} src={'images/Alex-Megos.jpg'}/>
                    </div>
                    <h1>Bouldering</h1>
                </Link>
            </section>
        </>
    )
}
