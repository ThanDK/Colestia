import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import ExternalLinkModal from '../components/ExternalLinkModal';
import { ArrowUpRight, Info } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Velcurve House",
        category: "Real Estate Tokenization",
        description: "Fractional ownership of the premier production house studio in Bangkok.",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
        raised: "75%",
        link: "https://th-ico-portal.com/project/velcurve"
    },
    {
        id: 2,
        title: "EcoEnergy Grid",
        category: "Sustainable Tech",
        description: "Blockchain-powered renewable energy distribution network.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2000&auto=format&fit=crop",
        raised: "Coming Soon",
        link: "https://investax.io/project/eco"
    },
    {
        id: 3,
        title: "NextGen Media",
        category: "Media & Entertainment",
        description: "Decentralized content creation platform for independent artists.",
        image: "https://images.unsplash.com/photo-1598899134739-967b867b7463?q=80&w=2000&auto=format&fit=crop",
        raised: "100%",
        link: "https://th-ico-portal.com/project/media"
    }
];

const Products = () => {
    const [modalState, setModalState] = useState({ isOpen: false, url: '', title: '' });

    const handleInvestClick = (project) => {
        setModalState({
            isOpen: true,
            url: project.link,
            title: project.title
        });
    };

    return (
        <div className="pt-28 pb-20 min-h-screen">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        Project <span className="text-gradient-main">Showcase</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Discover vetted projects within the Colestia ecosystem.
                        <br />
                        <span className="text-colestia-magenta text-sm border border-colestia-magenta/30 px-2 py-0.5 rounded-full mt-2 inline-block">
                            Educational Purposes Only
                        </span>
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 hover:border-colestia-purple/30 transition-colors duration-300"
                        >
                            {/* Image */}
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-90" />

                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                    <span className="text-xs font-bold text-white bg-white/10 backdrop-blur-md px-2 py-1 rounded">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-display font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                                        <Info size={14} />
                                        <span>Viewing Mode</span>
                                    </div>

                                    <Link to={`/project/${project.id}`}>
                                        <Button
                                            variant="primary"
                                            className="text-xs px-4 py-2"
                                        >
                                            View Project <ArrowUpRight size={14} className="ml-1" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <ExternalLinkModal
                isOpen={modalState.isOpen}
                destination="the Licensed ICO Portal"
                url={modalState.url}
                onClose={() => setModalState({ ...modalState, isOpen: false })}
            />
        </div>
    );
};

export default Products;
