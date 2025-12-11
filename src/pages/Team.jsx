import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
    {
        name: "Thanet C.",
        role: "Chief Executive Officer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Pichaya S.",
        role: "Chief Technology Officer",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Somsak K.",
        role: "Chief Financial Officer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Araya M.",
        role: "Head of Production",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
    }
];

const Team = () => {
    return (
        <div className="pt-28 pb-24 bg-black min-h-screen">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl font-display font-medium text-white mb-4 tracking-widest uppercase">
                        Board Of Director
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-colestia-purple to-transparent mx-auto opacity-50" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            className="text-center group"
                        >
                            <div className="relative mb-6 overflow-hidden rounded-lg aspect-[3/4] grayscale group-hover:grayscale-0 transition-all duration-700">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Gradient Overlay typical of the Design Image style */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent opacity-80" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-colestia-purple transition-colors">
                                {member.name}
                            </h3>
                            <p className="text-xs text-gray-400 tracking-wider uppercase">
                                {member.role}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
