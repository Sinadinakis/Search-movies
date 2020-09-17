import React from 'react';

const ClickableBox = ({ onClick, onDoubleClick }) => (
  <div style={{border: '1px solid white', borderRadius: '100px', padding: '10px', marginTop: '10px' }} onClick={onClick} onDoubleClick={onDoubleClick}>
    Click or double click
  </div>
);

const LikeButton = () => {
    return (
        <ClickableBox
            onClick={() => console.log("on click")}
            onDoubleClick={() => console.log("on double click")}
        />
    )
}

export default LikeButton;