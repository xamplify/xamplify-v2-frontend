import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'advanced-ui',children:[ {
  path: 'accordions',
  loadComponent: () =>
    import('./accordions/accordions.component').then((m) => m.AccordionsComponent),
    title: 'xAmplify - Accordions'
},
{
  path: 'carousel',
  loadComponent: () =>
    import('./carousel/carousel.component').then(
      (m) => m.CarouselComponent
    ),
    title: 'xAmplify - Carousel'
},
{
  path: 'draggable-cards',
  loadComponent: () =>
    import('./draggable-cards/draggable-cards.component').then(
      (m) => m.DraggableCardsComponent
    ),
    title: 'xAmplify - Draggable Cards'
},
{
  path: 'media-player',
  loadComponent: () =>
    import('./media-player/media-player.component').then(
      (m) => m.MediaPlayerComponent
    ),
    title: 'xAmplify - Media Player'
},
{
  path: 'modals-closes', 
  loadComponent: () =>
    import('../advancedui/modals-closes/modals-closes.component').then(
      (m) => m.ModalsClosesComponent
    ),    
    title: 'xAmplify - Modals Closes'
},
{
  path: 'placeholders',
  loadComponent: () =>
    import('../advancedui/placeholders/placeholders.component').then(
      (m) => m.PlaceholdersComponent
    ),
    title: 'xAmplify - Placeholders'
},
{
  path: 'navbar',
  loadComponent: () =>
    import('./navbar/navbar.component').then((m) => m.NavbarComponent),
    title: 'xAmplify - Navbar'
},
{
  path: 'offcanvas',
  loadComponent: () =>
    import('./offcanvas/offcanvas.component').then((m) => m.OffcanvasComponent),
    title: 'xAmplify - Offcanvas'
},
{
  path: 'ratings',
  loadComponent: () =>
    import('./ratings/ratings.component').then((m) => m.RatingsComponent),
    title: 'xAmplify - Ratings'
},
{
  path: 'ribbons',
  loadComponent: () =>
    import('./ribbons/ribbons.component').then((m) => m.RibbonsComponent),
    title: 'xAmplify - Ribbons'
},
{
  path: 'scrollspy',
  loadComponent: () =>
    import('./scrollspy/scrollspy.component').then((m) => m.ScrollspyComponent),
    title: 'xAmplify - Scrollspy'
},
{
  path: 'sortable-js',
  loadComponent: () =>
    import('./sortable-js/sortable-js.component').then((m) => m.SortableJsComponent),
    title: 'xAmplify - Sortable JS'
},
{
  path: 'swiperjs',  
  loadComponent: () =>
    import('./swiperjs/swiperjs.component').then((m) => m.SwiperjsComponent),
    title: 'xAmplify - Swiperjs'
},
{
  path: 'tour', 
  loadComponent: () =>
    import('./tour/tour.component').then((m) => m.TourComponent),
    title: 'xAmplify - Tour'
}, 
{
  path: 'treeview', 
  loadComponent: () =>
    import('./treeview/treeview.component').then((m) => m.TreeviewComponent),
    title: 'xAmplify - treeview'
}, 
]}
]; 
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class advanceduiRoutingModule {
  static routes = admin;
}