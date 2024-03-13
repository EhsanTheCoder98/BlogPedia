import React from 'react';

const ArticleContainer = ({info}) => {
    console.log(info)
    return (
        <div>
            <h1>{info.title}</h1>
        </div>
    );
};

export default ArticleContainer;