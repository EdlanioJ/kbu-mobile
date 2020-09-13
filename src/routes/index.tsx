import React, { useState } from 'react';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  const [signed] = useState(true);
  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
