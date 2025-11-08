import React from 'react';
import { Button } from 'shared/ui/Button';

export const App: React.FC = () => {
  return <div>
    <Button onClick={() => alert("Primary")} variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button disabled>Disabled</Button>
  </div>;
};
