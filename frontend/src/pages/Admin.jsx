import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Users, LayoutGrid, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [registrations, setRegistrations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/registrations');
                setRegistrations(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="min-h-screen p-8 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <Link to="/" className="text-slate-500 hover:text-white flex items-center gap-2 mb-4 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Portal
                    </Link>
                    <h1 className="text-4xl font-bold flex items-center gap-3">
                        <Users className="w-10 h-10 text-indigo-400" />
                        Registration Dashboard
                    </h1>
                </div>
                <div className="glass-card px-6 py-4 flex flex-col items-center">
                    <span className="text-slate-400 text-sm">Total Registrations</span>
                    <span className="text-3xl font-bold text-indigo-400">{registrations.length}</span>
                </div>
            </div>

            <div className="glass-card overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10 bg-white/5">
                                <th className="p-4 text-slate-400 font-medium">Name</th>
                                <th className="p-4 text-slate-400 font-medium">Roll Number</th>
                                <th className="p-4 text-slate-400 font-medium">Branch</th>
                                <th className="p-4 text-slate-400 font-medium">Year</th>
                                <th className="p-4 text-slate-400 font-medium">Email</th>
                                <th className="p-4 text-slate-400 font-medium">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr><td colSpan="6" className="p-8 text-center text-slate-500">Loading registrations...</td></tr>
                            ) : registrations.length === 0 ? (
                                <tr><td colSpan="6" className="p-8 text-center text-slate-500">No registrations found.</td></tr>
                            ) : (
                                registrations.map((reg) => (
                                    <tr key={reg._id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="p-4 font-semibold">{reg.name}</td>
                                        <td className="p-4 text-slate-300">{reg.rollNumber}</td>
                                        <td className="p-4">
                                            <span className="px-2 py-1 rounded-md bg-indigo-500/10 text-indigo-400 text-xs border border-indigo-500/20">
                                                {reg.branch}
                                            </span>
                                        </td>
                                        <td className="p-4 text-slate-300">{reg.year}</td>
                                        <td className="p-4 text-slate-300">{reg.email}</td>
                                        <td className="p-4 text-slate-500 text-sm">
                                            {new Date(reg.createdAt).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Admin;
