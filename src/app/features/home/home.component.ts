import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  LucideAngularModule,
  LucideIconData,
  Menu,
  PawPrint,
} from 'lucide-angular';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { HeroComponent } from './components/hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [
    MatToolbarModule,
    LucideAngularModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    HeroComponent,
    BenefitsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly pawIcon: LucideIconData = PawPrint;
  readonly menuIcon: LucideIconData = Menu;
}
