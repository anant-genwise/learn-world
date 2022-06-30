import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Button, Popover } from 'antd';
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const buttonWidth = 70;

const ProfileDetails = () => (
  <div style = {{overflow: "auto"}} >
    <div
      style={{
        marginLeft: buttonWidth,
        clear: 'both',
        whiteSpace: 'nowrap',
      }}
    >
      <Popover placement="bottomRight" title={"title"} content={"profile"} trigger="click">
        <Button>BR</Button>
      </Popover>
    </div>
  </div>
);

export default ProfileDetails;