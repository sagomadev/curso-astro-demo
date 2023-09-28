import { useState } from "react";

export const Like = () => {
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = (evt: Event) => {
    evt.preventDefault();
    setIsLiked(!isLiked);
  };

  return (
    <svg
      className={isLiked ? "fill-red-900" : "fill-white"}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      onClick={() => handleLike(event as Event)}
    >
      <path
        d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z"
        stroke-width="0"
      ></path>
    </svg>
  );
};
