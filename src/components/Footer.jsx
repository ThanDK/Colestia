import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-display font-bold text-white tracking-widest uppercase">Colestia</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering the future of digital assets through education and transparent project showcasing.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Platform</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/products" className="hover:text-colestia-gold transition-colors">Showcase</Link></li>
                            <li><Link to="/education" className="hover:text-colestia-gold transition-colors">Investor Education</Link></li>
                            <li><Link to="/team" className="hover:text-colestia-gold transition-colors">Board of Directors</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/privacy" className="hover:text-colestia-gold transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-colestia-gold transition-colors">Terms of Service</Link></li>
                            <li><span className="text-xs opacity-50">Disclaimer: No financial advice.</span></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <p className="text-gray-400 text-sm">support@colestia.io</p>
                        <p className="text-gray-400 text-sm mt-2">Bangkok, Thailand</p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-600">
                        © {new Date().getFullYear()} Colestia Ecosystem. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-600 text-center md:text-right max-w-lg">
                        Colestia is an educational portal and does not facilitate token sales. All investments are handled by licensed third-party portals.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
