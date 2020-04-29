import React, { createElement, useState } from "react";
import {  Tooltip,Row,Col } from "antd";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled
} from "@ant-design/icons";

export const Tags = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);
  
  const like = () => {
    setLikes(likes+1);
    setDislikes(dislikes);
    setAction("liked");
    
  };

  const dislike = () => {
    setLikes(likes);
    setDislikes(dislikes+1);
    setAction("disliked");
  };


  return(
      <Row>
        <Col span={11} >
            <span key="comment-basic-like" >
            <Tooltip title="Like">
            {createElement(action === "liked" ? LikeFilled : LikeOutlined, {
                onClick: like
            })}
            </Tooltip>
            <span className="comment-action">{likes}</span>
        </span>
        </Col>
        <Col span={2}/>
        <Col span={11}>
        <span key=' key="comment-basic-dislike"'>
            <Tooltip title="Dislike">
                {React.createElement(
                action === "disliked" ? DislikeFilled : DislikeOutlined,
                {
                    onClick: dislike
                }
                )}
            </Tooltip>
            <span className="comment-action">{dislikes}</span>
            </span>
        </Col>
  </Row>
  )
}
export default Tags