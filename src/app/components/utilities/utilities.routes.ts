import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'utilities',children:[ {
  path: 'avatars',
  loadComponent: () =>
    import('./avatars/avatars.component').then((m) => m.AvatarsComponent),
 title: 'xAmplify - Avatars'
  },
{
  path: 'borders',
  loadComponent: () =>
    import('./borders/borders.component').then(
      (m) => m.BordersComponent
    ),
 title: 'xAmplify - Borders'
  },
{
  path: 'break-point',
  loadComponent: () =>
    import('./break-point/break-point.component').then(
      (m) => m.BreakPointComponent
    ),
 title: 'xAmplify - Break-point'
  },
{
  path: 'colors',
  loadComponent: () =>
    import('./colors/colors.component').then(
      (m) => m.ColorsComponent
    ),
 title: 'xAmplify - Colors'
  },
{
  path: 'columns',
  loadComponent: () =>
    import('./columns/columns.component').then((m) => m.ColumnsComponent),
 title: 'xAmplify - Columns'
  },
  {
    path: 'css-grid',
    loadComponent: () =>
      import('./css-grid/css-grid.component').then((m) => m.CssGridComponent),
   title: 'xAmplify - Css Grid'
    },
{
  path: 'flex',
  loadComponent: () =>
    import('./flex/flex.component').then((m) => m.FlexComponent),
 title: 'xAmplify - Flex'
  },
{
  path: 'gutters',
  loadComponent: () =>
    import('./gutter/gutter.component').then((m) => m.GutterComponent),
 title: 'xAmplify - Gutters'
  },
{  
  path: 'helpers',
  loadComponent: () =>
    import('./helper/helper.component').then((m) => m.HelperComponent),
 title: 'xAmplify - Helpers'
  },
{
  path: 'position',
  loadComponent: () =>
    import('./position/position.component').then((m) => m.PositionComponent),
 title: 'xAmplify - Position'
  },
{
  path: 'additional-content',
  loadComponent: () =>
    import('./additional-content/additional-content.component').then((m) => m.AdditionalContentComponent),
    title: 'xAmplify - Additional-content'
},


]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class utilitiesRoutingModule {
  static routes = admin;
}