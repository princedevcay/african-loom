import React, { useEffect, useState } from 'react';

const PreloadLogo = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000); // Corrected delay of 2 seconds
    }, []);

    return loading ? (
        <div id="preload-logo">
            <img src="logo.png" alt="Logo" />
        </div>
    ) : null;
};

export default PreloadLogo;
