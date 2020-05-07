import {useEffect, useRef } from 'react'


function useInterval(callback, snakeSpeed) {
    const savedCallback = useRef
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback
    }, [callback, savedCallback])
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current()
      }
      if (snakeSpeed !== null) {
        let id = setInterval(tick, snakeSpeed)
        return () => clearInterval(id)
      }
    }, [snakeSpeed, savedCallback])
  }

  export default useInterval;