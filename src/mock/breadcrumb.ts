export interface RouteProps {
  path: string;
  breadcrumbName: string;
  children?: RouteProps[];
  index?: number;
}
export const routes: RouteProps[] = [
  {
    index: 0,
    path: '/home',
    breadcrumbName: 'Home'
  },
  {
    index: 1,
    path: '/user',
    breadcrumbName: 'User',
    children: [
      {
        index: 0,
        path: '/user1',
        breadcrumbName: 'User1'
      },
      {
        index: 1,
        path: '/user2',
        breadcrumbName: 'User2'
      }
    ]
  }
];
