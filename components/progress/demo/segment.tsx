import React from 'react';
import { Flex, Progress, Tooltip } from 'antd';

const App: React.FC = () => (
  <Flex gap="small" vertical>
    <Tooltip title="3 done / 3 in progress / 1 failed / 3 to do">
      <Progress percent={60} success={{ percent: 30 }} failed={{ percent: 10 }} />
    </Tooltip>
    <Flex gap="small" wrap>
      <Tooltip title="3 done / 3 in progress / 1 failed / 3 to do">
        <Progress percent={60} success={{ percent: 30 }} failed={{ percent: 10 }} type="circle" />
      </Tooltip>
      <Tooltip title="3 done / 3 in progress / 4 to do">
        <Progress percent={60} success={{ percent: 30 }} failed={{ percent: 10 }} type="dashboard" />
      </Tooltip>
    </Flex>
  </Flex>
);

export default App;
