'use client';

import React from 'react';
import { Button } from 'antd';
import { ArrowLeftOutlined, GithubOutlined, LinkedinOutlined, MailOutlined, RocketOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useAppContext } from '../context/AppContext';

export default function AboutPage() {
    const router = useRouter();
    const { author, email } = useAppContext();

    return (
        <div className="flex-1 min-h-full bg-[#050510] text-[#00f3ff] relative overflow-hidden font-mono flex flex-col justify-center items-center p-6">
            {/* Background effects */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#bc13fe] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#00f3ff] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute top-[20%] left-[20%] w-[2px] h-[2px] bg-white shadow-[0_0_10px_white] rounded-full animate-ping"></div>
                <div className="absolute bottom-[30%] right-[30%] w-[3px] h-[3px] bg-[#00f3ff] shadow-[0_0_15px_#00f3ff] rounded-full animate-ping delay-500"></div>
            </div>

            {/* Card */}
            <div className="relative z-10 w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-2xl shadow-[0_0_40px_rgba(0,243,255,0.1)] hover:shadow-[0_0_60px_rgba(188,19,254,0.2)] transition-shadow duration-500">
                 {/* Header */}
                 <div className="flex items-center mb-8 border-b border-white/10 pb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#00f3ff] to-[#bc13fe] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,243,255,0.5)] animate-bounce-slow">
                        <RocketOutlined className="text-4xl text-white" />
                    </div>
                    <div className="ml-8">
                        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00f3ff] to-[#bc13fe] tracking-tighter">
                            {author}
                        </h1>
                        <div className="flex items-center mt-2 space-x-2">
                             <div className="w-2 h-2 bg-[#00f3ff] rounded-full animate-pulse"></div>
                             <p className="text-gray-400 font-bold tracking-widest text-sm">SYSTEM ARCHITECT</p>
                        </div>
                    </div>
                 </div>

                 {/* Content */}
                 <div className="space-y-8 text-gray-300">
                    <p className="leading-relaxed text-lg">
                        Processing data streams... <br/>
                        Building the future of web applications with
                        <span className="text-[#00f3ff] mx-1 font-bold shadow-cyan">Next.js</span> and
                        <span className="text-[#bc13fe] mx-1 font-bold shadow-magenta">AI Agents</span>.
                        Focusing on clean code, high performance, and user-centric design.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="group p-6 bg-black/20 rounded-xl border border-white/5 hover:border-[#00f3ff]/50 transition-all hover:translate-y-[-5px]">
                            <h3 className="text-[#00f3ff] mb-3 font-bold text-xl flex items-center">
                                <span className="mr-2">⚡</span> Frontend
                            </h3>
                            <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">React, Next.js, Tailwind, Ant Design, Three.js, WebGL</p>
                         </div>
                         <div className="group p-6 bg-black/20 rounded-xl border border-white/5 hover:border-[#bc13fe]/50 transition-all hover:translate-y-[-5px]">
                            <h3 className="text-[#bc13fe] mb-3 font-bold text-xl flex items-center">
                                <span className="mr-2">🔮</span> Backend
                            </h3>
                            <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">Node.js, PostgreSQL, GraphQL, Serverless, Docker</p>
                         </div>
                    </div>
                 </div>

                 {/* Actions */}
                 <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-8">
                    <div className="flex space-x-6">
                        <GithubOutlined className="text-2xl text-gray-500 hover:text-white cursor-pointer transition-colors hover:scale-110" />
                        <LinkedinOutlined className="text-2xl text-gray-500 hover:text-[#0077b5] cursor-pointer transition-colors hover:scale-110" />
                        <a href={`mailto:${email}`} className="text-gray-500 hover:text-[#00f3ff] transition-colors flex items-center group">
                           <MailOutlined className="text-2xl group-hover:scale-110 transition-transform"/>
                           <span className="ml-3 text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">{email}</span>
                        </a>
                    </div>
                    <Button
                        type="primary"
                        ghost
                        size="large"
                        icon={<ArrowLeftOutlined />}
                        onClick={() => router.back()}
                        className="!border-[#00f3ff] !text-[#00f3ff] hover:!bg-[#00f3ff] hover:!text-black hover:!border-[#00f3ff] hover:!shadow-[0_0_20px_rgba(0,243,255,0.5)] transition-all"
                    >
                        RETURN
                    </Button>
                 </div>
            </div>
            
            <style jsx global>{`
                .shadow-cyan { text-shadow: 0 0 10px rgba(0, 243, 255, 0.5); }
                .shadow-magenta { text-shadow: 0 0 10px rgba(188, 19, 254, 0.5); }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(-5%); }
                    50% { transform: translateY(5%); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 3s infinite ease-in-out;
                }
            `}</style>
        </div>
    );
}
