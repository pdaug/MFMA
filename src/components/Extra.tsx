type ExtraProps = {
  photo: string;
  name: string;
  content: string;
  exclusive?: boolean;
};

const Extra = function ({ photo, name, content, exclusive }: ExtraProps) {
  return (
    <div className="relative w-[300px] flex flex-col gap-4 bg-gray-100 p-4 rounded-xl">
      { (exclusive) &&
        <div className="absolute -top-0 -left-2 -rotate-6 px-3 bg-green-life font-bold text-blue-mind rounded-lg animate-pulse"> Exclusivo </div>
      }
      <div className="w-full h-48 overflow-hidden rounded-xl">
        <img src={photo} alt="foto" className="h-full w-full object-cover" />
      </div>
      <div className="font-bold text-xl text-blue-text"> {name} </div>
      <div className="text-sm text-justify text-blue-text"> {content} </div>
    </div>
  );
};

export default Extra;