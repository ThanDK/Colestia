import { useState, useEffect } from 'react';
import { projects as initialProjects, comingSoonMovies } from '../data/projectsData';
import { directors as initialDirectors } from '../data/creatorsData';
import { teamMembers as initialTeam } from '../data/teamData';

export const useDashboardStats = () => {
    const [stats, setStats] = useState({
        projects: 0,
        directors: 0,
        team: 0,
        investors: 1234,
        funding: '45.2M',
        growth: '24.5%'
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Use static data counts directly (mockup mode)
        setStats(prev => ({
            ...prev,
            projects: initialProjects.length + comingSoonMovies.length,
            directors: initialDirectors.length,
            team: initialTeam.length
        }));
        setIsLoading(false);
    }, []);

    return { stats, isLoading };
};

