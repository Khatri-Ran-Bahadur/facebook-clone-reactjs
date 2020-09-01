import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
const Feed = () => {
  return (
    <div class="feed">
      {/* storeReel */}
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://avatars1.githubusercontent.com/u/33364806?s=460&u=3ff45b2096ffc98bc94348dfe9706788650f8192&v=4"
        message="Hello Friends Good morning"
        timestamp="This is timestamp"
        username="RN kHATRI"
        image="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
      />
      <Post
        profilePic="https://avatars1.githubusercontent.com/u/33364806?s=460&u=3ff45b2096ffc98bc94348dfe9706788650f8192&v=4"
        message="Hello Friends Good morning"
        timestamp="This is timestamp"
        username="RN kHATRI"
        image="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
      />
      <Post
        profilePic="https://avatars1.githubusercontent.com/u/33364806?s=460&u=3ff45b2096ffc98bc94348dfe9706788650f8192&v=4"
        message="Hello Friends Good morning"
        timestamp="This is timestamp"
        username="RN kHATRI"
        image="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
      />
      <Post
        profilePic="https://avatars1.githubusercontent.com/u/33364806?s=460&u=3ff45b2096ffc98bc94348dfe9706788650f8192&v=4"
        message="Hello Friends Good morning"
        timestamp="This is timestamp"
        username="RN kHATRI"
        image="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
      />
    </div>
  );
};

export default Feed;
