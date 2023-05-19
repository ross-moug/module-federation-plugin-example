import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {loadRemoteModule} from '@angular-architects/native-federation';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },

    {
      path: 'flights',
      loadChildren: () => loadRemoteModule({
        remoteName: 'mfe1',
        exposedModule: './Module'
      }).then(m => m.FlightsModule)
    },

    {
      path: '**',
      component: NotFoundComponent
    }

    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.

];

