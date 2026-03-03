import iconBack from '@/public/icon-back.png'
import { Button } from 'antd'
import Image from 'next/image'

interface SettingItem {
  title: string
  desc: string
  status: 0 | 1
}

const SETTING_LIST: SettingItem[] = [
  {
    title: '关闭省电模式',
    desc: '省电模式会限制应用在后台运行，可能导致录音、导航等功能无法正常使用',
    status: 1,
  },
  {
    title: '允许应用后台运行',
    desc: '为确保录音或其他功能不中断，请前往手机设置开启“允许后台运行”，确保应用在后台仍能保持运行状态',
    status: 0,
  },
  {
    title: '忽略省电优化',
    desc: '将应用加入白名单，避免系统自动优化关闭应用进程',
    status: 0,
  },
]

function SettingItemRow({ title, desc, status }: SettingItem) {
  const done = status === 1
  return (
    <div className="border-divider flex items-center justify-between gap-7.5 border-b py-7.5 pr-7.5">
      <div className="min-w-0 flex-1">
        <p className="text-font-color text-[1.0625rem]">{title}</p>
        <p className="text-muted mt-3 text-xs leading-4.25">{desc}</p>
      </div>
      <Button
        className={[
          'shrink-0 rounded-[1.0625rem]! border-0! text-[.875rem]!',
          done ? 'bg-btn-done-bg! text-muted!' : 'bg-font-color! text-white!',
        ].join(' ')}
      >
        {done ? '已完成' : '去设置'}
      </Button>
    </div>
  )
}

export default function SystemSetting() {
  return (
    <div className="flex-1 bg-white">
      <header className="border-divider relative flex items-center border-b px-5 py-4.25">
        <Image src={iconBack} alt="icon" className="size-5.5" />
        <span className="text-font-color absolute left-1/2 -translate-x-1/2 text-[1.0625rem] font-semibold">
          系统设置
        </span>
      </header>

      <div className="pl-7.5">
        {SETTING_LIST.map((item) => (
          <SettingItemRow key={item.title} {...item} />
        ))}

        <p className="text-muted mt-5 pr-7.5 text-[.75rem]">
          温馨提示：请连接电源或充电宝，尽量保持屏幕常亮
        </p>
      </div>
    </div>
  )
}
