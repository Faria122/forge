import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Text, Em, Strong, Lozenge, Inline } from '@forge/react';
import { invoke } from '@forge/bridge';

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    invoke('getText', { example: 'my-invoke-variable' }).then(setData);
  }, []);


  return (
    <>
      <Inline alignBlock='baseline' space='space.100'>
        <Lozenge appearance='removed'>NOO</Lozenge>
        <Text>This issue has a valid assignee that is different from the reporter</Text>
      </Inline>
      <Inline alignBlock='baseline' space='space.100'>
        <Lozenge appearance='success'>YES</Lozenge>
        <Text>The issue has description</Text>
      </Inline>
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
