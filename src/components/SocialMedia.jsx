import React from "react";
import {  BsGithub, BsFacebook } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">

    <div>
      <a href="https://github.com/melkeno21" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>

    <div>
      <a href="https://web.facebook.com/keno.rivera.77" target="_blank" rel="noreferrer">
        <BsFacebook />
      </a>
    </div>
  </div>
);

export default SocialMedia;
