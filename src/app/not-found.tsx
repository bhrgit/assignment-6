import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
            <p>Page not found!</p>
            <Link href="/">Back to home</Link>
        </div>
    );
};

export default NotFoundPage;