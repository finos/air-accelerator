
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','870'),
  
  routes: [
{
  path: '/docs/development-infrastructure/code-validation/whitesource',
  component: ComponentCreator('/docs/development-infrastructure/code-validation/whitesource','88f'),
  exact: true,
},
{
  path: '/docs/development-infrastructure/continuous-integration/csharp',
  component: ComponentCreator('/docs/development-infrastructure/continuous-integration/csharp','84c'),
  exact: true,
},
{
  path: '/docs/team',
  component: ComponentCreator('/docs/team','811'),
  exact: true,
},
{
  path: '/docs/what-is-odp',
  component: ComponentCreator('/docs/what-is-odp','7e1'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
