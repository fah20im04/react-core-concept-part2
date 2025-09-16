import { useState } from "react"
export default function Batsman() {
 
    const [runs, setRuns] = useState(0);
    const [sixes,setSixes] = useState(0)
    const [fours,setFours] = useState(0);
    const handleSingle=()=>{
        const updateRuns = runs + 1;
        setRuns (updateRuns)
    }
    const handleFour=()=>{
        const updateRuns = runs + 4;
        const updatedFours = fours + 1;
        setFours(updatedFours)
        setRuns (updateRuns)
    }
    const handleSix=()=>{
        const updateRuns = runs + 6;
        setRuns (updateRuns);
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes)
    }
    return (
        <div>
            <h3>Player: Bangladesh Batsman</h3>
            <p><small>Six: {sixes}</small></p>
            <p><small>fours: {fours}</small></p>
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>singles</button>
            <button onClick={handleFour}>four</button>
            <button onClick={handleSix}>six</button>
        </div>
    )
}