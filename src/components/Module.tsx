import { Icon } from "@phosphor-icons/react";

type ModuleProps = {
  count: number;
  Icon: Icon;
  name: string;
  description: string;
};

const Module = function ({ count, Icon, name, description }: ModuleProps) {
  return (
    <div className="flex flex-col items-center gap-2 w-[280px]">
      <div className="text-blue-mind"> Módulo 0{count} </div>
      <Icon size={48} weight="light" />
      <div className="text-blue-text text-xl font-bold h-14 items-center flex"> {name} </div>
      <div className="text-justify text-blue-text text-sm"> {description} </div>
    </div>
  );
};

export default Module;