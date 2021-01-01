import React from 'react';
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubble';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import PublishIcon from '@material-ui/icons/Publish';



function Post({
  displayName, 
  userName,
  verified,
  timestamp,
  text,
  image, 
  avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
              <Avatar src="" />
            </div>
            <div className="post__body">
              <div className="post__header">
                  <div className="post__headerText">
                    <h3>
                        Hayashi Shunya{""} <span className="post__headerSpecial">
                          <VerifiedUserIcon className="post__badge" />
                          @hayashi
                        </span>
                    </h3>
                  </div>
                  <div className="post__headerDescription">
                      <p>hi, my name is hayashi</p>
                  </div>
              </div>
              <img 
                   src="https://www.pakutaso.com/shared/img/thumb/penfan_KP_2783_TP_V.jpg" 
                   alt=""
              />
              <div className="post__footer">
                <ChatBubbleOutlineIcon fontSize="small" />
                <RepeatIcon fontSize="small" />
                <FavoriteBorderIcon fontSize="small" />
                <PublishIcon fontSize="small" />
              </div>
            </div>
        </div>
    );
};

export default Post;
