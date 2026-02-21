import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import RegistrationForm from '../components/RegistrationForm';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-transparent">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Event Details */}
                <div className="animate-fade-in text-white">
                    <span className="px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-semibold tracking-wide border border-indigo-500/30">
                        KMIT PR TEAM PRESENTS
                    </span>
                    <h1 className="text-5xl lg:text-7xl font-extrabold mt-6 mb-4 tracking-tight leading-tight">
                        PRKMIT <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500">Tech Connect 2026</span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-lg">
                        Join the elite circle of innovators and tech enthusiasts for the most anticipated PR event of the year. Network, innovate, and thrive.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-slate-300">
                            <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-12 h-12 flex items-center justify-center">
                                <Calendar className="w-6 h-6 text-indigo-400" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">Event Date</p>
                                <p className="font-semibold text-lg">March 15, 2026</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-slate-300">
                            <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-12 h-12 flex items-center justify-center">
                                <Clock className="w-6 h-6 text-indigo-400" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">Event Time</p>
                                <p className="font-semibold text-lg">10:00 AM - 4:00 PM</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-slate-300">
                            <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-12 h-12 flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-indigo-400" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">Venue</p>
                                <p className="font-semibold text-lg">KMIT Main Auditorium, Hyderabad</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Registration Form */}
                <div className="flex justify-center">
                    <RegistrationForm />
                </div>

            </div>

            {/* Footer */}
            <footer className="mt-20 py-8 text-slate-500 text-center w-full border-t border-white/5">
                <p>&copy; 2026 KMIT PR Team. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
