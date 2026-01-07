import { useState, useEffect } from 'react';
import { directors as initialDirectors } from '../data/creatorsData';

export const useDirectors = () => {
    const [directors, setDirectors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Use static data directly (mockup mode)
        const data = initialDirectors.map((d, index) => ({
            ...d,
            id: `director-${index}`
        }));
        setDirectors(data);
        setIsLoading(false);
    }, []);

    return { directors, isLoading, error };
};


