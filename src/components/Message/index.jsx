import Image from "next/image";

import {
  EnterOutlined,
  SmileFilled,
  EllipsisOutlined,
} from "@ant-design/icons";

import { Tooltip } from "antd";

export default function Message() {
  return (
    <div className="flex gap-3 hover:bg-[#383838] px-3 py-2 rounded-sm select-none relative group animate-slide_message">
      <div className="flex items-baseline justify-center">
        <Image
          className="rounded-3xl border-none min-w-10 m-h-10"
          src={`https://cdn.discordapp.com/avatars/409219043535355904/5c333b6fd660c08fb2b517a07844d8c4.webp?size=32`}
          width={40}
          height={40}
          alt="User Avatar"
        />
      </div>
      <div className="w-full flex flex-col whitespace-break-spaces">
        <span className="flex gap-2 items-end">
          <p className="text-slate-200">Lê Trực</p>
          <small className="text-xs font-light text-[#a4a4a4]">
            Today at 3:27 PM
          </small>
        </span>
        <p className="text-slate-300 text-sm font-light">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
          cumque labore quaerat possimus delectus minima. Voluptatum, provident!
          Quidem distinctio cum esse iste! Unde laudantium officiis perferendis
          vitae, quisquam aliquid culpa!
        </p>
      </div>
      <div className="flex bg-[#272727] rounded-md absolute -top-4 right-3 text-[#a4a4a4] translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-300">
        <Tooltip title="Add Reaction">
          <div className="flex items-center justify-center px-2 h-8 cursor-pointer hover:hover:bg-[#383838] rounded-md">
            <SmileFilled />
          </div>
        </Tooltip>

        <Tooltip title={"Reply"}>
          <div className="flex items-center justify-center px-2 h-8 cursor-pointer hover:hover:bg-[#383838] rounded-md">
            <EnterOutlined />
          </div>
        </Tooltip>

        <Tooltip title={"More"}>
          <div className="flex items-center justify-center px-2 h-8 cursor-pointer hover:hover:bg-[#383838] rounded-md">
            <EllipsisOutlined />
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
