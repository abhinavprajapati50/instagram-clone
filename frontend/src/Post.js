import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";

export const Post = ({ username, caption, imageUrl }) => {
    return (
        <div className="post">
            {/* header  --> avatar + username */}
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                />

                <h3>{username}</h3>
            </div>
            {/* image */}
            <img
                className="post__Image"
                src={imageUrl}
                alt=""
            />
            {/* username and caption */}
            <h4 className="post__text">
                <strong>{username}</strong>
                {caption}
            </h4>
        </div>
    );
};
