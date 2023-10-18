import React from "react";

export default function video() {
  return (
    <video className="w-full " autoPlay loop muted>
      <source
        // src="https://tecdn.b-cdn.net/img/video/Lines.mp4"
        src="/banner.mp4"
        type="video/mp4"
      />
    </video>
  );
}
