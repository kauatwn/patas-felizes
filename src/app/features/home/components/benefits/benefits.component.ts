import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HeartIcon, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-benefits',
  imports: [MatCardModule, LucideAngularModule],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BenefitsComponent {
  readonly benefits = [
    {
      title: 'Adoção Responsável',
      description:
        'Todos os pets são avaliados por veterinários e passam por processo de adaptação antes da adoção.',
      icon: HeartIcon,
    },
    {
      title: 'Parceria com ONGs',
      description:
        'Trabalhamos com as melhores ONGs da região para resgatar e cuidar dos animais.',
      icon: HeartIcon,
    },
    {
      title: 'Processo Simples',
      description:
        'Documentação facilitada e acompanhamento pós-adoção para garantir que tudo corra bem.',
      icon: HeartIcon,
    },
    {
      title: 'Pets Saudáveis',
      description:
        'Todos os animais são vacinados, vermifugados e castrados antes da adoção.',
      icon: HeartIcon,
    },
  ];
}
