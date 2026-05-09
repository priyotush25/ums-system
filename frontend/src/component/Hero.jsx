import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// CSS Imports
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Icons
import { FaArrowRight, FaFileAlt, FaGlobeAmericas, FaUserGraduate } from 'react-icons/fa';

const Hero = () => {
    const slides = [
        "https://images.unsplash.com/photo-1541339907198-e08756defefe?q=80&w=2070",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070",
        "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=2070"
    ];

    const stats = [
        { icon: FaUserGraduate, label: "Active Students", value: "25,000+" },
        { icon: FaGlobeAmericas, label: "Global Alumni", value: "120k+" },
        { icon: FaFileAlt, label: "Publications", value: "8,500+" },
    ];

    return (
        <section className="relative w-full h-[90vh] overflow-hidden bg-slate-950">
            {/* Background Slider */}
            <div className="absolute inset-0 z-0">
                <Swiper
                    effect={'fade'}
                    autoplay={{ delay: 5000 }}
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    className="h-full w-full"
                >
                    {slides.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="h-full w-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${image})` }}
                            >
                                <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
                <div className="max-w-3xl space-y-6">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        Ranked #1 in Research
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        Shape Your Future at <span className="text-blue-500">EduMaster</span>
                    </h1>
                    <p className="text-lg text-slate-300 max-w-xl">
                        A world-class university committed to excellence in education, 
                        innovation, and leadership development.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                        <button className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-all font-bold">
                            Apply Now <FaArrowRight />
                        </button>
                        <button className="bg-white/10 text-white border border-white/20 backdrop-blur-md px-8 py-3 rounded-md hover:bg-white hover:text-black transition-all font-bold">
                            View Programs
                        </button>
                    </div>
                </div>

                {/* Stats Section - Desktop Only for better view */}
                <div className="absolute bottom-10 left-6 right-6 hidden lg:block">
                    <div className="grid grid-cols-3 gap-6 bg-white p-8 rounded-xl shadow-2xl">
                        {stats.map((item, index) => (
                            <div key={index} className="flex items-center gap-4 border-r last:border-none border-slate-200">
                                <div className="text-blue-600 text-3xl"><item.icon /></div>
                                <div>
                                    <div className="text-2xl font-bold text-slate-900">{item.value}</div>
                                    <div className="text-sm text-slate-500">{item.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;