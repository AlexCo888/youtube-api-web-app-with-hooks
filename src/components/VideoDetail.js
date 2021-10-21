import React from "react";

const VideoDetail = ({ video }) => {
  return !video ? (
    <div>Loading...</div>
  ) : (
    <div>
      <div className="ui embed">
        <iframe
          width={560}
          height={315}
          title={video.snippet.title}
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          autoPlay
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
