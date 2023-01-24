import { useState } from "react";

const ButtonAddPoints = () => {
    const handleClick = () => {
        addPoints();
    }

    return(
        <button
        onClick={handleClick}>
            Add Points</button>
    )
}

function Index (){
    const [points, newPoints] = useState(null);
    
    function addPoints(){
        newPoints(points + 1);
    }

return(
    <main>
        <div>
            <h1>Friend Wallet</h1>
            <p>Send friendly points to your fools!</p>
        </div>
        <div className="pointsViewer">
            <span>{points}</span><span> Lovely</span>
            <br/>
            <button
        onClick={addPoints}>
            Add Points</button>
        </div>
    </main>
);
}

export default Index;