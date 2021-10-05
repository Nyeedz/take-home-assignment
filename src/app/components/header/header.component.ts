import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  template: `
    <div class="header">
      <img class="header-logo" src="assets/logo.svg" alt="" />
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}
