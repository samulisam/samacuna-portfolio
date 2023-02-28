import React from "react";
import {  BsGithub, BsFacebook } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">

    <div>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>

    <div>
      <a href="https://web.facebook.com/profile.php?id=100010831184841" target="_blank" rel="noreferrer">
        <BsFacebook />
      </a>
    </div>
  </div>
);

export default SocialMedia;
