type DepositionProps = {
  video: string;
  name: string;
  rating: string;
};

const Deposition = function ({ video, name, rating }: DepositionProps) {
  return (
    <div className="flex flex-col items-center gap-2 flex-1">
        <iframe
          title="YouTube video player"
          className="border-none h-64 w-full rounded-xl"
          src={video}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        >
        </iframe>
      <div className="text-blue-text text-xl font-bold h-14 items-center flex"> {name} </div>
      <div className="text-justify text-blue-text text-sm"> {rating} </div>
    </div>
  );
};

export default Deposition;