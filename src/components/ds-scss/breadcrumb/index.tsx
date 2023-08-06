import React from 'react';
import './breadcrumb.scss';

type RouteProps = {
  path: string;
  breadcrumbName: string;
  children: any[];
  index: number;
};

interface BreadcrumbProps {
  routes: RouteProps[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ routes }: BreadcrumbProps) => {
  return (
    <div className="breadcrumb">
      {routes.map((route, index) => (
        <span key={index}>
          {index > 0 && <span className="separator">/</span>}
          <a href={route.path}>{route.breadcrumbName}</a>
          {route.children && (
            <span className="dropdown">
              {route.children.map((childRoute, childIndex) => (
                <a key={childIndex} href={childRoute.path}>
                  {childRoute.breadcrumbName}
                </a>
              ))}
            </span>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
