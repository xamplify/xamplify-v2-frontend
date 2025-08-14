     import { NgModule } from '@angular/core';
     import { RouterModule, Routes } from '@angular/router';
     import { SearchPageComponent } from './search-page/search-page.component';
      
      export const admin: Routes = [
       {path:'pages',children:[
      {
        path: 'chat',
        loadComponent: () =>
          import('./chat/chat.component').then(
            (m) => m.ChatComponent
          ),
          title: 'xAmplify - Chat'
      },
      {
        path: 'empty',
        loadComponent: () =>
          import('./emptypage/emptypage.component').then((m) => m.EmptypageComponent),
          title: 'xAmplify - Empty'
      },
      {
        path: 'faqs',
        loadComponent: () =>
          import('./faqs/faqs.component').then((m) => m.FaqsComponent),
          title: 'xAmplify - Faqs'
      },
      {
        path: 'file-manager',
        loadComponent: () =>
          import('./file-manager/file-manager.component').then((m) => m.FileManagerComponent),
          title: 'xAmplify - File-Manager'
      },
      {
        path: 'timeline',
        loadComponent: () =>
          import('./timeline/timeline.component').then((m) => m.TimelineComponent),
          title: 'xAmplify - Timeline'
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('./notifications/notifications.component').then((m) => m.NotificationsComponent),
          title: 'xAmplify - Notifications'
      },
      {
        path: 'pricing',
        loadComponent: () =>
          import('./pricing/pricing.component').then((m) => m.PricingComponent),
          title: 'xAmplify - Pricing'
      },
      {
        path: 'team',
        loadComponent: () =>
          import('./team/team.component').then((m) => m.TeamComponent),
          title: 'xAmplify - Team'
      },
      {
        path: 'terms-conditions',
        loadComponent: () =>
          import('./terms-conditions/terms-conditions.component').then((m) => m.TermsConditionsComponent),
          title: 'xAmplify - Terms Conditions'
      },
      {
        path: 'todolist',
        loadComponent: () =>
          import('./todolist/todolist.component').then((m) => m.TodolistComponent),
          title: 'xAmplify - Todolist'
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./profile/profile.component').then((m) => m.ProfileComponent),
          title: 'xAmplify - Profile'
      },
      {
        path: 'profile-settings',
        loadComponent: () =>
          import('./profile-settings/profile-settings.component').then((m) => m.ProfileSettingsComponent),
          title: 'xAmplify - Profile Settings'
      },
      {
        path: 'profile-settings',
        loadComponent: () =>
          import('./profile-settings/profile-settings.component').then((m) => m.ProfileSettingsComponent),
          title: 'xAmplify - Profile Settings'
      },
      {
        path: 'reviews',
        loadComponent: () =>
          import('./reviews/reviews.component').then((m) => m.ReviewsComponent),
          title: 'xAmplify - Reviews'
      },
      {
        path: 'search-page',
        loadComponent: () =>
          import('./search-page/search-page.component').then((m) => SearchPageComponent),
          title: 'xAmplify - Search Page'
      },
      ]}
      ];

      @NgModule({
        imports: [RouterModule.forChild(admin)],
        exports: [RouterModule],
      })

      export class pagesRoutingModule {
        static routes = admin;
      }