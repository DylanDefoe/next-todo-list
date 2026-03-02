import iconBack from "/icon-back.png";
import { Button } from "antd";
import Image from "next/image";

interface SettingItem {
  title: string;
  desc: string;
  status: 0 | 1;
}

const SETTING_LIST: SettingItem[] = [
  {
    title: "关闭省电模式",
    desc: "省电模式会限制应用在后台运行，可能导致录音、导航等功能无法正常使用",
    status: 1,
  },
  {
    title: "允许应用后台运行",
    desc: "为确保录音或其他功能不中断，请前往手机设置开启“允许后台运行”，确保应用在后台仍能保持运行状态",
    status: 0,
  },
  {
    title: "忽略省电优化",
    desc: "将应用加入白名单，避免系统自动优化关闭应用进程",
    status: 0,
  },
];

function SettingItemRow({ title, desc, status }: SettingItem) {
  const done = status === 1;
  return (
    <div className="pr-7.5 py-7.5 flex justify-between items-center gap-7.5 border-b border-divider">
      <div className="flex-1 min-w-0">
        <p className="text-font-color text-[17px]">{title}</p>
        <p className="mt-3 text-muted text-xs leading-4.25">{desc}</p>
      </div>
      <Button
        className={[
          "shrink-0 border-0! rounded-[17px]! text-[14px]!",
          done ? "bg-btn-done-bg! text-muted!" : "bg-font-color! text-white!",
        ].join(" ")}
      >
        {done ? "已完成" : "去设置"}
      </Button>
    </div>
  );
}

export default function SystemSetting() {
  return (
    <div className="flex-1 bg-white">
      <header className="relative flex items-center py-4.25 px-5 border-b border-divider">
        <Image src={iconBack} alt="icon" className="size-5.5" />
        <span className="absolute left-1/2 -translate-x-1/2 text-font-color text-[17px] font-semibold">
          系统设置
        </span>
      </header>

      <div className="pl-7.5">
        {SETTING_LIST.map((item) => (
          <SettingItemRow key={item.title} {...item} />
        ))}

        <p className="mt-5 pr-7.5 text-[12px] text-muted">
          温馨提示：请连接电源或充电宝，尽量保持屏幕常亮
        </p>
      </div>
    </div>
  );
}
