/// <reference types="vite/client" />

declare module 'remoteA/RemoteARoot'{
    import React from 'react';

    interface RemoteAProps {
        count: number;
    }

    const RemoteARoot: React.FC<RemoteAProps>;

    export default RemoteARoot;
}
declare module 'remoteB/RemoteBRoot'{
    import React from 'react';

    interface RemoteBProps {
        addCount: () => void;
    }

    const RemoteBRoot: React.FC<RemoteBProps>;

    export default RemoteBRoot;
}

