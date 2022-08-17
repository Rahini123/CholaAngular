import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { FormsModule } from '@angular/forms';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuModule } from 'primeng/menu';
import { HeaderComponent } from './components/header/header.component';
import { InputTextModule } from 'primeng/inputtext';
import { DockModule } from 'primeng/dock';
import { TooltipModule } from 'primeng/tooltip';
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent],
  imports: [
    SidebarModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    PanelMenuModule,
    FormsModule,
    MenuModule,
    DockModule,
    TabMenuModule,
    NgDynamicBreadcrumbModule,
    TooltipModule,
    BadgeModule,
  ],
  providers: [],
  exports: [SidebarComponent, HeaderComponent],
})
export class SharedModule {}
