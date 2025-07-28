import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  LucideAngularModule,
  LucideIconData,
  Menu,
  PawPrint,
} from 'lucide-angular';

@Component({
  selector: 'app-home',
  imports: [
    MatToolbarModule,
    LucideAngularModule,
    MatButtonModule,
    MatMenuModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly pawIcon: LucideIconData = PawPrint;
  readonly menuIcon: LucideIconData = Menu;
}
