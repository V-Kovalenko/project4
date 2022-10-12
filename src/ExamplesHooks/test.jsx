import { useMemo, useCallback, useState } from "react";

export default function App() {
    const [count, setCount] = useState(0);
    const [test, setTest] = useState(0);
    const multiplyedCount = useMemo(() => count * 10, [count]);
    const multiplyedTest = useMemo(() => test * 10, [test]);
    return (
        <div>
            count: {count}
            <br />
            <button onClick={() => setCount(count + 1)}>+ count</button>
            <button onClick={() => setCount(count - 1)}>- count</button>
            <br />
            <br />
            test: {test}
            <br />
            <button onClick={() => setTest(test + 1)}>+ test</button>
            <button onClick={() => setTest(test - 1)}>- test</button>
            <br />
            <br />
            count x10: {multiplyedCount}
            <br />
            test x10: {multiplyedTest}
        </div>
    );
}