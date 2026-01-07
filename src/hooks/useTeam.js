import { useState, useEffect } from 'react';
import { teamMembers as initialTeam } from '../data/teamData';

export const useTeam = () => {
    const [team, setTeam] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Use static data directly (mockup mode)
        const data = initialTeam.map((t, index) => ({
            ...t,
            id: `team-${index}`
        }));
        setTeam(data);
        setIsLoading(false);
    }, []);

    return { team, isLoading, error };
};


