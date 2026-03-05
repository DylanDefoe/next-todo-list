'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  AppstoreOutlined,
  CheckSquareOutlined,
  UserOutlined,
  PieChartOutlined,
} from '@ant-design/icons'

const MyBottomNav = () => {
  const pathname = usePathname()

  const navItems = [
    {
      label: '首页',
      path: '/home',
      icon: <PieChartOutlined className="text-xl" />,
    },
    {
      label: '我的案件',
      path: '/cases',
      icon: <AppstoreOutlined className="text-xl" />,
    },
    {
      label: '我的已办',
      path: '/tasks',
      icon: <CheckSquareOutlined className="text-xl" />,
    },
    {
      label: '我的',
      path: '/my',
      icon: <UserOutlined className="text-xl" />,
    },
  ]

  return (
    <div className="pb-safe w-full border-t border-gray-200 bg-white pt-2 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center justify-around pb-2">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.path)
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex flex-col items-center justify-center space-y-1 ${
                isActive
                  ? 'text-[#1a237e] dark:text-blue-400'
                  : 'text-gray-400 dark:text-gray-500'
              }`}
            >
              {item.icon}
              <span className="text-[10px]">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default MyBottomNav
