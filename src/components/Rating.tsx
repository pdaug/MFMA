import { Star, YoutubeLogo } from "@phosphor-icons/react";

type RatingProps = {
  photo: string;
  name: string;
  stars: number;
  content: string;
};

const Rating = function ({ photo, name, stars, content }: RatingProps) {
  return (
    <div className="bg-gray-100 flex flex-col gap-4 border border-gray-300 rounded-md p-4 max-w-64">
      <div className="flex gap-4">
        <img src={photo} alt="foto" className="h-10 w-10 rounded-full" />
        <div className="flex-1">
          <div className="text-cyan-500 text-left"> {name} </div>
          <div className="flex gap-1">
            {
              [...Array(5).keys()].map(function (index) {
                return (
                  <Star size={16} weight={(stars > index) ? "fill" : "regular"} className="text-yellow-400" />
                );
              })
            }
          </div>
        </div>
        <div>
          <YoutubeLogo size={24} weight="fill" className="text-red-500" />
        </div>
      </div>
      <div className="text-blue-text text-left text-sm"> {content} </div>
    </div>
  );
};

export default Rating;