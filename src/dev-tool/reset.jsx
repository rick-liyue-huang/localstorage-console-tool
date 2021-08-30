import React from 'react'
import { Button } from 'antd'

export const Reset = () => {
  function clear() {
    const confirmed = window.confirm(
      "All data will be cleared?"
    );
    if (confirmed) {
      window.localStorage.clear();
      window.location.replace(window.location.origin);
    }
  }
  return <Button size={'small'} onClick={clear}>Clear Database</Button>;
};
