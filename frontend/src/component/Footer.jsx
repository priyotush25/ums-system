// Import icons from React Icons (Fa for FontAwesome, Md for Material Design)
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-200">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">EduMaster <span className="text-blue-500">Uni</span></h2>
                        <p className="text-sm text-slate-400">
                            Empowering future leaders through excellence in education.
                        </p>
                        <div className="flex space-x-4">
                            <FaFacebook className="text-xl cursor-pointer hover:text-blue-500 transition-colors" />
                            <FaTwitter className="text-xl cursor-pointer hover:text-blue-400 transition-colors" />
                            <FaLinkedin className="text-xl cursor-pointer hover:text-blue-600 transition-colors" />
                            <FaGithub className="text-xl cursor-pointer hover:text-white transition-colors" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-blue-400">Student Portal</a></li>
                            <li><a href="#" className="hover:text-blue-400">Admissions</a></li>
                            <li><a href="#" className="hover:text-blue-400">Faculties</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
                            <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-blue-500" />
                                <span>123 Uni Ave, Dhaka</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhoneAlt className="text-blue-500" />
                                <span>+880 1234 5678</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-blue-500" />
                                <span>info@university.edu</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} EduMaster Uni. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;