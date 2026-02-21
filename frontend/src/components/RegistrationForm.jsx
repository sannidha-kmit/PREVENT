import React, { useState } from 'react';
import axios from 'axios';
import { User, Building2, Calendar, Mail, Phone, Rocket } from 'lucide-react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        rollNumber: '',
        branch: '',
        year: '',
        email: '',
        phone: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await axios.post('https://prevent-vk5t.onrender.com/api/register', formData);
            setStatus({ type: 'success', message: 'Registration Successful 🎉' });
            setFormData({
                name: '',
                rollNumber: '',
                branch: '',
                year: '',
                email: '',
                phone: ''
            });
        } catch (error) {
            setStatus({
                type: 'error',
                message: error.response?.data?.message || 'Something went wrong. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="glass-card p-8 w-full max-w-2xl animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
                Event Registration
            </h2>

            {status.message && (
                <div className={`mb-6 p-4 rounded-xl text-center ${status.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                    {status.message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-2">
                    <label className="label">Full Name</label>
                    <div className="relative">
                        <User className="absolute left-4 top-3.5 text-slate-500 w-5 h-5" />
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="input-field pl-12"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="label">Roll Number</label>
                    <div className="relative">
                        <span className="absolute left-4 top-3.5 text-slate-500 w-5 h-5">🆔</span>
                        <input
                            type="text"
                            name="rollNumber"
                            value={formData.rollNumber}
                            onChange={handleChange}
                            placeholder="22261AXXXX"
                            className="input-field pl-12"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="label">Branch</label>
                    <div className="relative">
                        <Building2 className="absolute left-4 top-3.5 text-slate-500 w-5 h-5" />
                        <select
                            name="branch"
                            value={formData.branch}
                            onChange={handleChange}
                            className="input-field pl-12 appearance-none bg-indigo-950/50"
                            required
                        >
                            <option value="">Select Branch</option>
                            <option value="CSE">CSE</option>
                            <option value="IT">IT</option>
                            <option value="ECE">ECE</option>
                            <option value="EEE">EEE</option>
                            <option value="MECH">MECH</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="label">Year</label>
                    <div className="relative">
                        <Calendar className="absolute left-4 top-3.5 text-slate-500 w-5 h-5" />
                        <select
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            className="input-field pl-12 appearance-none bg-indigo-950/50"
                            required
                        >
                            <option value="">Select Year</option>
                            <option value="1st">1st Year</option>
                            <option value="2nd">2nd Year</option>
                            <option value="3rd">3rd Year</option>
                            <option value="4th">4th Year</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="label">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-3.5 text-slate-500 w-5 h-5" />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="student@example.com"
                            className="input-field pl-12"
                            required
                        />
                    </div>
                </div>

                <div className="col-span-2">
                    <label className="label">Phone Number</label>
                    <div className="relative">
                        <Phone className="absolute left-4 top-3.5 text-slate-500 w-5 h-5" />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="1234567890"
                            pattern="[0-9]{10}"
                            className="input-field pl-12"
                            required
                        />
                    </div>
                </div>

                <div className="col-span-2 mt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? (
                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <>
                                <Rocket className="w-5 h-5" />
                                Register Now
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
