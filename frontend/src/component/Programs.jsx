import { FaArrowRight, FaChartBar, FaFlask, FaMicrochip, FaPalette } from 'react-icons/fa';

const Programs = () => {
    const categories = [
        {
            title: "Engineering & Tech",
            icon: <FaMicrochip />,
            description: "Future-ready courses in CSE, EEE, and Robotics designed for innovation.",
            color: "bg-blue-500",
            courses: "12 Undergraduate, 5 Graduate"
        },
        {
            title: "Business Studies",
            icon: <FaChartBar />,
            description: "Develop leadership and entrepreneurial skills with our world-class BBA programs.",
            color: "bg-emerald-500",
            courses: "8 Undergraduate, 4 Graduate"
        },
        {
            title: "Art & Design",
            icon: <FaPalette />,
            description: "Unleash your creativity with professional guidance in fine arts and digital media.",
            color: "bg-purple-500",
            courses: "6 Undergraduate, 2 Graduate"
        },
        {
            title: "Science & Research",
            icon: <FaFlask />,
            description: "Advanced laboratories and research-focused degrees in Biotech and Physics.",
            color: "bg-orange-500",
            courses: "10 Undergraduate, 8 Graduate"
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Academic Excellence</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Explore Our Programs</h3>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                {/* Programs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((item, index) => (
                        <div 
                            key={index} 
                            className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            {/* Icon Container */}
                            <div className={`${item.color} w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                                {item.icon}
                            </div>

                            <h4 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                {item.description}
                            </p>
                            
                            <div className="text-xs font-semibold text-slate-400 border-t pt-4 flex justify-between items-center">
                                <span>{item.courses}</span>
                                <button className="text-blue-600 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    Explore <FaArrowRight size={10}/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-slate-600 mb-6">Want to see the full list of departments?</p>
                    <button className="border-2 border-blue-600 text-blue-600 px-8 py-2.5 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all">
                        View All Academics
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Programs;