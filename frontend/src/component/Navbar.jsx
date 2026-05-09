import { Bell, BookOpen, Menu, User, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center gap-2">
                            <BookOpen className="h-8 w-8 text-blue-600" />
                            <span className="text-2xl font-bold text-slate-800 tracking-tight">
                                EduMaster<span className="text-blue-600">Uni</span>
                            </span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Home</a>
                        <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Academics</a>
                        <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Admissions</a>
                        <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Faculties</a>
                        
                        <div className="flex items-center gap-4 ml-4">
                            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative">
                                <Bell size={20} />
                                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                            </button>
                            <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-sm">
                                <User size={18} />
                                Student Login
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-blue-600 transition-colors"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar/Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-2 shadow-inner">
                    <a href="#" className="block px-3 py-2 text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-md">Home</a>
                    <a href="#" className="block px-3 py-2 text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-md">Academics</a>
                    <a href="#" className="block px-3 py-2 text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-md">Admissions</a>
                    <a href="#" className="block px-3 py-2 text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-md">Faculties</a>
                    <div className="pt-4 border-t border-slate-100">
                        <button className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg font-bold">
                            <User size={18} />
                            Student Login
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;