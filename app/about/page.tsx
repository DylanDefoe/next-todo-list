'use client'

import React from 'react'
import { Button } from 'antd'
import {
  ArrowLeftOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  RocketOutlined,
} from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import { useAppContext } from '../context/AppContext'

export default function AboutPage() {
  const router = useRouter()
  const { author, email } = useAppContext()

  return (
    <div className="relative flex min-h-full flex-1 flex-col items-center justify-center overflow-hidden bg-[#050510] p-6 font-mono text-[#00f3ff]">
      {/* Background effects */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#bc13fe] opacity-20 mix-blend-screen blur-[100px] filter"></div>
        <div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#00f3ff] opacity-20 mix-blend-screen blur-[100px] filter delay-1000"></div>
        <div className="absolute top-[20%] left-[20%] h-[2px] w-[2px] animate-ping rounded-full bg-white shadow-[0_0_10px_white]"></div>
        <div className="absolute right-[30%] bottom-[30%] h-[3px] w-[3px] animate-ping rounded-full bg-[#00f3ff] shadow-[0_0_15px_#00f3ff] delay-500"></div>
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-12 shadow-[0_0_40px_rgba(0,243,255,0.1)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_0_60px_rgba(188,19,254,0.2)]">
        {/* Header */}
        <div className="mb-8 flex items-center border-b border-white/10 pb-6">
          <div className="animate-bounce-slow flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#00f3ff] to-[#bc13fe] shadow-[0_0_20px_rgba(0,243,255,0.5)]">
            <RocketOutlined className="text-4xl text-white" />
          </div>
          <div className="ml-8">
            <h1 className="bg-gradient-to-r from-[#00f3ff] to-[#bc13fe] bg-clip-text text-5xl font-bold tracking-tighter text-transparent">
              {author}
            </h1>
            <div className="mt-2 flex items-center space-x-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#00f3ff]"></div>
              <p className="text-sm font-bold tracking-widest text-gray-400">
                SYSTEM ARCHITECT
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-300">
          <p className="text-lg leading-relaxed">
            Processing data streams... <br />
            Building the future of web applications with
            <span className="shadow-cyan mx-1 font-bold text-[#00f3ff]">
              Next.js
            </span>{' '}
            and
            <span className="shadow-magenta mx-1 font-bold text-[#bc13fe]">
              AI Agents
            </span>
            . Focusing on clean code, high performance, and user-centric design.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="group rounded-xl border border-white/5 bg-black/20 p-6 transition-all hover:translate-y-[-5px] hover:border-[#00f3ff]/50">
              <h3 className="mb-3 flex items-center text-xl font-bold text-[#00f3ff]">
                <span className="mr-2">⚡</span> Frontend
              </h3>
              <p className="text-sm text-gray-400 transition-colors group-hover:text-gray-200">
                React, Next.js, Tailwind, Ant Design, Three.js, WebGL
              </p>
            </div>
            <div className="group rounded-xl border border-white/5 bg-black/20 p-6 transition-all hover:translate-y-[-5px] hover:border-[#bc13fe]/50">
              <h3 className="mb-3 flex items-center text-xl font-bold text-[#bc13fe]">
                <span className="mr-2">🔮</span> Backend
              </h3>
              <p className="text-sm text-gray-400 transition-colors group-hover:text-gray-200">
                Node.js, PostgreSQL, GraphQL, Serverless, Docker
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-8">
          <div className="flex space-x-6">
            <GithubOutlined className="cursor-pointer text-2xl text-gray-500 transition-colors hover:scale-110 hover:text-white" />
            <LinkedinOutlined className="cursor-pointer text-2xl text-gray-500 transition-colors hover:scale-110 hover:text-[#0077b5]" />
            <a
              href={`mailto:${email}`}
              className="group flex items-center text-gray-500 transition-colors hover:text-[#00f3ff]"
            >
              <MailOutlined className="text-2xl transition-transform group-hover:scale-110" />
              <span className="ml-3 translate-x-[-10px] text-sm opacity-0 transition-opacity duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                {email}
              </span>
            </a>
          </div>
          <Button
            type="primary"
            ghost
            size="large"
            icon={<ArrowLeftOutlined />}
            onClick={() => router.back()}
            className="!border-[#00f3ff] !text-[#00f3ff] transition-all hover:!border-[#00f3ff] hover:!bg-[#00f3ff] hover:!text-black hover:!shadow-[0_0_20px_rgba(0,243,255,0.5)]"
          >
            RETURN
          </Button>
        </div>
      </div>

      <style jsx global>{`
        .shadow-cyan {
          text-shadow: 0 0 10px rgba(0, 243, 255, 0.5);
        }
        .shadow-magenta {
          text-shadow: 0 0 10px rgba(188, 19, 254, 0.5);
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(-5%);
          }
          50% {
            transform: translateY(5%);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  )
}
