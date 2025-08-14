import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'apps',children:[
  {
  path: 'full-calender',
  loadComponent: () =>
    import('./fullcalendar/fullcalendar.component').then((m) => m.FullcalendarComponent),
    title: 'xAmplify - full Calender'
},
{
    path: 'gallery',
    loadComponent: () =>
      import('./gallery/gallery.component').then((m) => m.GalleryComponent),
      title: 'xAmplify - Gallery'
},
  {
    path: 'sweetalerts',
    loadComponent: () =>
      import('./sweetalerts/sweetalerts.component').then((m) => m.SweetalertsComponent),
      title: 'xAmplify - Sweetalerts'
  },
  {
    path: 'ecommerce/add-product',
    loadComponent: () =>
      import('./ecommerce/add-product/add-product.component').then(
        (m) => m.AddProductComponent
      ),
      title: 'xAmplify - Add Product'
  },
{
  path: 'ecommerce/cart',
  loadComponent: () =>
    import('./ecommerce/cart/cart.component').then(
      (m) => m.CartComponent
    ),
    title: 'xAmplify - Cart'
},
{
  path: 'ecommerce/checkout',
  loadComponent: () =>
    import('./ecommerce/check-out/check-out.component').then(
      (m) => m.CheckOutComponent
    ),
    title: 'xAmplify - Checkout'
},
{
  path: 'ecommerce/edit-product',
  loadComponent: () =>
    import('./ecommerce/edit-product/edit-product.component').then(
      (m) => m.EditProductComponent
    ),
    title: 'xAmplify - Edit Products'
},
{
  path: 'ecommerce/order-details',
  loadComponent: () =>
    import('./ecommerce/order-details/order-details.component').then(
      (m) => m.OrderDetailsComponent
    ),
    title: 'xAmplify - Order Details'
},
{
  path: 'ecommerce/orders',
  loadComponent: () =>
    import('./ecommerce/orders/orders.component').then(
      (m) => m.OrdersComponent
    ),
    title: 'xAmplify - Orders'
},
{
  path: 'ecommerce/products',
  loadComponent: () =>
    import('./ecommerce/products/products.component').then(
      (m) => m.ProductsComponent
    ),
    title: 'xAmplify - Products'
},
{
  path: 'ecommerce/product-details',
  loadComponent: () =>
    import('./ecommerce/product-details/product-details.component').then((m) => m.ProductDetailsComponent),
    title: 'xAmplify - Product Details'
},
{
  path: 'ecommerce/products-list',
  loadComponent: () =>
    import('./ecommerce/product-list/product-list.component').then((m) => m.ProductListComponent),
    title: 'xAmplify - Products list'
},
{
  path: 'ecommerce/wishlist',
  loadComponent: () =>
    import('./ecommerce/wishlist/wishlist.component').then((m) => m.WishlistComponent),
    title: 'xAmplify - Wishlist'
},
  {
    path: 'crm/companies',
    loadComponent: () =>
      import('./crm/companies/companies.component').then((m) => m.CompaniesComponent),
      title: 'xAmplify - companies'
  },
  {
    path: 'crm/contacts',
    loadComponent: () =>
      import('./crm/contacts/contacts.component').then((m) => m.ContactsComponent),
      title: 'xAmplify - Contacts'
  },
  {
    path: 'crm/deals',
    loadComponent: () =>
      import('./crm/deals/deals.component').then((m) => m.DealsComponent),
      title: 'xAmplify - Deals'
  },
  {
    path: 'crm/leads',
    loadComponent: () =>
      import('./crm/leads/leads.component').then((m) => m.LeadsComponent),
      title: 'xAmplify - Leads'
  },
  {
    path: 'crypto/buy-sell',
    loadComponent: () =>
      import('./crypto/buy-sell/buy-sell.component').then((m) => m.BuySellComponent),
      title: 'xAmplify - Buy Sell'
  },
  {
    path: 'crypto/currency-exchange',
    loadComponent: () =>
      import('./crypto/currency-exchange/currency-exchange.component').then(
        (m) => m.CurrencyExchangeComponent
      ),
      title: 'xAmplify - Currency Exchange'
  },
  {
    path: 'crypto/marketcap',
    loadComponent: () =>
      import('./crypto/market-cap/market-cap.component').then(
        (m) => m.MarketCapComponent
      ),
      title: 'xAmplify - Marketcap'
  },
  {
    path: 'crypto/transactions',
    loadComponent: () =>
      import('./crypto/transactions/transactions.component').then((m) => m.TransactionsComponent),
      title: 'xAmplify - Transactions'
  },
  {
      path: 'crypto/wallet',
      loadComponent: () =>
        import('./crypto/wallet/wallet.component').then((m) => m.WalletComponent),
        title: 'xAmplify - Wallet'
    },
    {
      path: 'jobs/candidate-details',
      loadComponent: () =>
        import('./jobs/candidate-details/candidate-details.component').then((m) => m.CandidateDetailsComponent),
        title: 'xAmplify - Candidate Details'
    },
    {
      path: 'jobs/job-details',
      loadComponent: () =>
        import('./jobs/job-details/job-details.component').then(
          (m) => m.JobDetailsComponent
        ),
        title: 'xAmplify - Job Details'
    },
    {
      path: 'jobs/job-post',
      loadComponent: () =>
        import('./jobs/job-post/job-post.component').then(
          (m) => m.JobPostComponent
        ),
        title: 'xAmplify - Job Post'
    },
    {
        path: 'jobs/jobs-list',
        loadComponent: () =>
          import('./jobs/job-list/job-list.component').then(
            (m) => m.JobListComponent
          ),
           title: 'xAmplify - Jobs List'
      },
      {
        path: 'jobs/search-candidate',
        loadComponent: () =>
          import('./jobs/search-candidate/search-candidate.component').then(
            (m) => m.SearchCandidateComponent
          ),
          title: 'xAmplify - Search Candidate'
      },
      {
        path: 'jobs/search-jobs',
        loadComponent: () =>
          import('./jobs/search-jobs/search-jobs.component').then(
            (m) => m.SearchJobsComponent
          ),
          title: 'xAmplify - Search Jobs'
      },
      {
        path: 'jobs/search-company',
        loadComponent: () =>
          import('./jobs/search-company/search-company.component').then(
            (m) => m.SearchCompanyComponent
          ),
          title: 'xAmplify - Search Company'
      },
      {
        path: 'nft/create-nft',
        loadComponent: () =>
          import('./nft/create-nft/create-nft.component').then((m) => m.CreateNftComponent),
          title: 'xAmplify - Create Nft'
      },
      {
        path: 'nft/live-auction',
        loadComponent: () =>
          import('./nft/live-auction/live-auction.component').then(
            (m) => m.LiveAuctionComponent
          ),
          title: 'xAmplify - Live Auction'
      },
      {
        path: 'nft/market-place',
        loadComponent: () =>
          import('./nft/market-place/market-place.component').then(
            (m) => m.MarketPlaceComponent
          ),
          title: 'xAmplify - Market Place'
      },
      {
          path: 'nft/nft-details',
          loadComponent: () =>
            import('./nft/nft-details/nft-details.component').then(
              (m) => m.NftDetailsComponent
            ),
            title: 'xAmplify - Nft Details'
        },
        {
          path: 'nft/wallet-integration',
          loadComponent: () =>
            import('./nft/wallet-integration/wallet-integration.component').then(
              (m) => m.WalletIntegrationComponent
            ),
            title: 'xAmplify - Wallet Integration'
        },
        {
          path: 'projects/create-project',
          loadComponent: () =>
            import('./projects/create-project/create-project.component').then((m) => m.CreateProjectComponent),
            title: 'xAmplify - Create Project'
        },
        {
          path: 'projects/project-overview',
          loadComponent: () =>
            import('./projects/project-overview/project-overview.component').then(
              (m) => m.ProjectOverviewComponent
            ),
            title: 'xAmplify - Project Overview'
        },
        {
          path: 'projects/project-list',
          loadComponent: () =>
            import('./projects/project-list/project-list.component').then(
              (m) => m.ProjectListComponent
            ),
            title: 'xAmplify - Project List'
        },
        {
          path: 'tasks/kanban-board',
          loadComponent: () =>
            import('./tasks/kanban-board/kanban-board.component').then((m) => m.KanbanBoardComponent),
            title: 'xAmplify - Kanban Board'
        },
        {
          path: 'tasks/list-view',
          loadComponent: () =>
            import('./tasks/list-view/list-view.component').then(
              (m) => m.ListViewComponent
            ),
            title: 'xAmplify - Project Overview'
        },
        {
          path: 'tasks/task-details',
          loadComponent: () =>
            import('./tasks/task-details/task-details.component').then(
              (m) => m.TaskDetailsComponent
            ),
            title: 'xAmplify - Project List'
        }
        
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class appsRoutingModule {
  static routes = admin;
}