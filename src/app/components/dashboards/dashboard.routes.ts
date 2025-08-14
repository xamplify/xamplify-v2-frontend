import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'dashboards',children:[ {
  path: 'crm',
  loadComponent: () =>
    import('./crm/crm.component').then((m) => m.CrmComponent),
    title: 'xAmplify - Crm'
},
{
  path: 'analytics',
  loadComponent: () =>
    import('./analytics/analytics.component').then(
      (m) => m.AnalyticsComponent
    ),
    title: 'xAmplify - Analytics'
},
{
  path: 'ecommerce',
  loadComponent: () =>
    import('./ecommerce/ecommerce.component').then(
      (m) => m.EcommerceComponent
    ),
    title: 'xAmplify - Ecommerce'
},
{
  path: 'hrm',
  loadComponent: () =>
    import('./hrm/hrm.component').then((m) => m.HrmComponent),
    title: 'xAmplify - HRM'
},
{
  path: 'nft',
  loadComponent: () =>
    import('./nft/nft.component').then((m) => m.NftComponent),
    title: 'xAmplify - NFT'
},
{
  path: 'crypto',
  loadComponent: () =>
    import('./crypto/crypto.component').then((m) => m.CryptoComponent),
    title: 'xAmplify - Crypto'
},
{
  path: 'jobs',
  loadComponent: () =>
    import('./jobs/jobs.component').then((m) => m.JobsComponent),
    title: 'xAmplify - Jobs'
},
{
  path: 'projects',
  loadComponent: () =>
    import('./projects/projects.component').then((m) => m.ProjectsComponent),
    title: 'xAmplify - Projects'
},
{
  path: 'courses',
  loadComponent: () =>
    import('./courses/courses.component').then((m) => m.CoursesComponent),
    title: 'xAmplify - Courses'
},
{
  path: 'stocks',
  loadComponent: () =>
    import('./stocks/stocks.component').then((m) => m.StocksComponent),
    title: 'xAmplify - Stocks'
},
{
  path: 'medical',
  loadComponent: () =>
    import('./medical/medical.component').then((m) => m.MedicalComponent),
    title: 'xAmplify - Medical'
},
{
  path: 'pos-system',
  loadComponent: () =>
    import('./pos-system/pos-system.component').then((m) => m.PosSystemComponent),
    title: 'xAmplify - Pos System'
},
{
  path: 'podcast',
  loadComponent: () =>
    import('./podcast/podcast.component').then((m) => m.PodcastComponent),
    title: 'xAmplify - Podcast'
},
{
  path: 'school',
  loadComponent: () =>
    import('./school/school.component').then((m) => m.SchoolComponent),
    title: 'xAmplify - School'
},
{
  path: 'social-media',
  loadComponent: () =>
    import('./social-media/social-media.component').then((m) => m.SocialMediaComponent),
    title: 'xAmplify - Social Media'
},
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class dashboardRoutingModule {  
  static routes = admin;
}