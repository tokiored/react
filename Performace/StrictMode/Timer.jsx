import React from "react"

export default function Timer() {
    const [seconds, setSeconds] = React.useState(0)
    
    React.useEffect(() => {
        setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1)
            console.log('running timer')    
        }, 1000)
    }, [])
    
    /* 
     * Strict.Mode will trigger the components to load x2.
     * - The interval count as a result is incorrect, 0, 2, 4
     * 
     * Fix: Declare the interval as a constant and return a clean up function 
     * ()=> clearInterval(timer) which is called when component is unmouted
     * */

    return (
        <h2>{seconds} seconds</h2>
    )
}