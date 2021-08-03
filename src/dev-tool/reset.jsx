import React from 'react'
import { Button } from 'antd'

export const Reset = () => {
  function clear() {
    const confirmed = window.confirm(
      "Clean all data (including account data), are you sure?"
    );
    if (confirmed) {
      window.localStorage.clear();
      window.location.replace(window.location.origin);
    }
  }
  return <Button size={'small'} onClick={clear}>Clean Database</Button>;
};
