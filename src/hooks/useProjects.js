import { useState, useEffect, useCallback } from 'react';
import { projects as initialProjects, comingSoonMovies } from '../data/projectsData';

export const useProjects = () => {
    // Initialize with combined projects directly to avoid race condition
    const allProjects = [...initialProjects, ...comingSoonMovies].map((p, index) => ({
        ...p,
        firestoreId: `mock-${index}`
    }));

    const [projects, setProjects] = useState(allProjects);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getProjectById = useCallback((id) => {
        return projects.find(p => p.id == id || p.firestoreId === id);
    }, [projects]);

    return { projects, isLoading, error, getProjectById };
};
