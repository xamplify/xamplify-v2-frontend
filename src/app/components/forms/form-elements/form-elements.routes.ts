import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'forms/form-elements',children:[ {
  path: 'inputs',
  loadComponent: () =>
    import('./inputs/inputs.component').then((m) => m.InputsComponent),
    title: 'xAmplify - Inputs'
},
{
  path: 'checks-radios',
  loadComponent: () =>
    import('./checksradios/checksradios.component').then(
      (m) => m.ChecksradiosComponent
    ),
    title: 'xAmplify - Checks-radios'
},
{
  path: 'inputgroup',
  loadComponent: () =>
    import('./inputgroup/inputgroup.component').then(
      (m) => m.InputgroupComponent
    ),
    title: 'xAmplify - Input group'
},
{
    path: 'formselect',
    loadComponent: () =>
      import('./formselect/formselect.component').then(
        (m) => m.FormselectComponent
      ),
      title: 'xAmplify - Formselect'
  },
  {
    path: 'file-uploads',
    loadComponent: () =>
      import('./fileuploads/fileuploads.component').then(
        (m) => m.FileuploadsComponent
      ),
      title: 'xAmplify - File uploads'
  },
  
  {
    path: 'date&timepicker',
    loadComponent: () =>
      import('./datetimepicker/datetimepicker.component').then(
        (m) => m.DatetimepickerComponent
      ),
      title: 'xAmplify - Date & timepicker'
  },
  {
    path: 'color-pickers',
    loadComponent: () =>
      import('./colorpicker/colorpicker.component').then(
        (m) => m.ColorpickerComponent
      ),
      title: 'xAmplify - Color Pickers'
  },
  {
    path: 'inputs',
    loadComponent: () =>
      import('./inputs/inputs.component').then(
        (m) => m.InputsComponent
      ),
      title: 'xAmplify - Inputs'
  },
  {
    path: 'range-slider',
    loadComponent: () =>
      import('./rangeslider/rangeslider.component').then(
        (m) => m.RangesliderComponent
      ),
      title: 'xAmplify - Range Slider'
  },
  {
    path: 'inputmask',
    loadComponent: () =>
      import('./input-mask/input-mask.component').then(
        (m) => m.InputMaskComponent
      ),
      title: 'xAmplify - Range Slider'
  },
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class formelementsRoutingModule {
  static routes = admin;
}