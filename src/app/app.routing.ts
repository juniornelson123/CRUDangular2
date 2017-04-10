import { ModuleWithProviders } from "@angular/core";

//Importar modulo de rotas
import { Routes, RouterModule } from "@angular/router";

//Importar Componente criado
import { ParkingsComponent } from './parkings/parkings.component'
import { LoginComponent } from './login/login.component'
import { ParkingFormComponent } from "./parkings/parking-form/parking-form.component"

//Cria minhas rotas
const appRoutes: Routes = [
	{ path: "", pathMatch: 'full', component: LoginComponent},
	{ path: "parkings",  component: ParkingsComponent},
	{ path: "parkings/new", component: ParkingFormComponent},
	{ path: 'parkings/:id', component: ParkingFormComponent},
	{ path: 'parkings/:id/edit', component: ParkingFormComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);