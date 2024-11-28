import React, { lazy, useState } from "react";
import "./App.css";


const DynamicRemoteA = lazy(() =>
    import("remoteA/RemoteARoot").then((mod) => {
        return { default: mod.default || mod };
    })
);

const DynamicRemoteB = lazy(() =>
    import("remoteB/RemoteBRoot").then((mod) => {
        return { default: mod.default || mod };
    })
);

export default function App() {
      
    const [count, setCount] = useState<number>(0);

    const addCount = () => {
        setCount(count + 1);
    };

    return (
        <div className="app">
        <React.Suspense fallback="Loading">
            <DynamicRemoteA count={count} />
            <DynamicRemoteB addCount={addCount} />
        </React.Suspense>
        </div>
    );
    }