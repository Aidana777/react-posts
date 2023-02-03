import { useState } from "react"

const Counter = function () {
    const [count, setCount] = useState(0)
    function increament() {
        setCount(count + 1)
    }

    function Decrement() {
        setCount(count - 1)
    }
    return (
        <div>
            <h2>{count} </h2>
            <button onClick={increament}>increament</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    )
}
export default Counter