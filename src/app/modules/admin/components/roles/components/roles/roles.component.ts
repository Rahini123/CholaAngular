import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Role } from './modal/role';
import { RoleService } from './rolesservice';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  providers: [MessageService, RoleService, ConfirmationService],
})
export class RolesComponent implements OnInit {
  roles: any;

  role: any;

  roleDialog: boolean = false;

  selectedRoles: any;

  constructor(
    private roleService: RoleService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.roleService.getRoles().then((data) => (this.roles = data));
  }

  deleteSelectedRoles() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected Role?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.roles = this.roles.filter(
          (val: any) => !this.selectedRoles.includes(val)
        );
        this.selectedRoles = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Roles Deleted',
          life: 3000,
        });
      },
    });
  }

  editRole(role: Role) {
    this.role = { ...role };
    this.roleDialog = true;
  }

  deleteRole(role: Role) {
    alert('here');
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + role.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.roles = this.roles.filter(
          (val: { id: string | undefined }) => val.id !== role.id
        );
        this.role = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'role Deleted',
          life: 3000,
        });
      },
    });
  }
}
