import HomeUpper from "./HomeUpper";

export default function Home (toHomeUpper) {
    return (
        <>
            <HomeUpper onType={toHomeUpper}/>
        </>
    )
}