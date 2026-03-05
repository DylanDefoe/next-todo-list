'use client'

import React from 'react'
import { Avatar, message, Modal } from 'antd'
import {
  BookOutlined,
  FileProtectOutlined,
  DeleteOutlined,
  LogoutOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '../store/useAuthStore'
import useStore from '../hooks/useStore'
import MyBottomNav from './components/MyBottomNav'

const MyPage = () => {
  const router = useRouter()
  const username = useStore(useAuthStore, (state) => state.username)
  const logout = useAuthStore((state) => state.logout)

  const handleLogout = () => {
    Modal.confirm({
      title: '退出登录',
      content: '确定要退出登录吗？',
      okText: '确定',
      cancelText: '取消',
      onOk: () => {
        logout()
        message.success('已退出登录')
        router.replace('/login')
      },
      centered: true,
    })
  }

  const menuItems = [
    {
      icon: <BookOutlined className="text-3xl" />,
      label: '使用协议',
      onClick: () => message.info('点击了使用协议'),
    },
    {
      icon: <FileProtectOutlined className="text-3xl" />,
      label: '隐私协议',
      onClick: () => message.info('点击了隐私协议'),
    },
    {
      icon: <DeleteOutlined className="text-3xl" />,
      label: '清除缓存',
      onClick: () => {
        message.success('缓存已清除')
      },
    },
    {
      icon: <LogoutOutlined className="text-3xl" />,
      label: '退出登录',
      onClick: handleLogout,
    },
  ]

  return (
    <div className="flex flex-1 flex-col bg-gray-50 dark:bg-gray-950">
      {/* Header Section */}
      <div className="flex flex-col items-center bg-[#101848] pt-16 pb-24 text-white">
        <div className="mb-4 rounded-full p-1 ring-4 ring-white/10">
          <Avatar
            size={80}
            icon={<UserOutlined />}
            className="bg-blue-100 text-[#101848]"
            src="/avatar-placeholder.png"
          />
        </div>
        <h2 className="mb-1 text-lg font-medium">重庆辣妹科技有限公司</h2>
        <p className="text-base opacity-90">{username || '彭辣妹'}</p>
      </div>

      {/* Content Section - Floating Card */}
      <div className="z-10 -mt-15 flex-1 rounded-t-4xl bg-white shadow-sm">
        <div className="px-6 py-10">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            {menuItems.map((item, index) => (
              <div
                key={index}
                onClick={item.onClick}
                className="flex cursor-pointer flex-col items-center justify-center gap-4 active:opacity-70"
              >
                <div className="text-[#101848] dark:text-blue-400">
                  {item.icon}
                </div>
                <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <MyBottomNav />
    </div>
  )
}

export default MyPage
