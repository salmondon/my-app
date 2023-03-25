import React, { useState } from "react";

function StateAssignmentOne() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <section>
                <button onClick={handleClick}>{count}</button>
            </section>

        </div>
    );
}


export default StateAssignmentOne;
