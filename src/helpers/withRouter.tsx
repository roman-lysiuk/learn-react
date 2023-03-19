import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export interface WithRouterProps {
  location?: ReturnType<typeof useLocation>;
  params?: Record<string, unknown>;
  navigate?: ReturnType<typeof useNavigate>;
}
export function withRouter(Component: React.ComponentType<WithRouterProps>) {
  function ComponentWithRouterProp(props: WithRouterProps) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return <Component {...props} location={location} params={params} navigate={navigate} />;
  }

  return ComponentWithRouterProp;
}
