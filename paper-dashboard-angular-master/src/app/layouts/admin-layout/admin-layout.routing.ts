import { PartsComponent } from './../../parts/parts.component';
import { CompanyComponent } from './../../company/company.component';
import { MenuComponent } from './../../menu/menu.component';
import { SignupComponent } from './../../signup/signup.component';
import { Routes } from '@angular/router';

import { LoginComponent } from "app/login/login.component";
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { RestaurantComponent } from 'app/pages/restaurant/restaurant.component';
import { ItemComponent } from 'app/pages/item/item.component';
import { CategoryComponent } from "app/pages/category/category.component";

export const AdminLayoutRoutes: Routes = [
    { path: 'signup',         component:SignupComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'rest',           component: RestaurantComponent },
    { path: 'item',           component: ItemComponent},
    { path: 'category',       component: CategoryComponent},
    { path: 'menu',       component: MenuComponent},
    { path: 'company',       component: CompanyComponent},
    { path: 'parts',       component: PartsComponent}

  ];
