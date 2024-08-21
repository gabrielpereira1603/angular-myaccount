import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-testimones',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './testimones.component.html',
  styleUrls: ['./testimones.component.css']
})
export class TestimonesComponent {
  testimonials = [
    {
      image: 'assets/testimones/clients-testimonials-2.jpg',
      name: 'Dennis Lewis',
      role: 'Top Manager',
      title: 'Verdadeiros especialistas em gestão de investimentos',
      text: 'Esses caras são eficientes! Desde o primeiro momento em que lidei com a Investment Smart, eu sabia que eles eram verdadeiros profissionais. Eles estão fazendo as perguntas certas e, quando recebem as respostas, estão sempre atentos, prestando um serviço excelente!',
      reverse: true
    },
    {
      image: 'assets/testimones/clients-testimonials-1.jpg',
      name: 'Emily Wilson',
      role: 'Civil Servant',
      title: 'Equipe altamente profissional',
      text: 'Trabalhar com a MyAccount tem sido uma ótima experiência. Um grupo excepcional de pessoas que são bem versadas em todos os aspectos legais, contábeis e de conformidade da administração de fundos para fundos onshore ou offshore. Eu os recomendo fortemente.',
      reverse: false
    },
    {
      image: 'assets/testimones/clients-testimonials-3.jpg',
      name: 'Jill Miller',
      role: 'Regional Manager',
      title: 'A Melhor Empresa de Gestão de Investimentos',
      text: 'Foi um prazer trabalhar com a MyAccount e sua equipe de especialistas em investimentos. Eles me ofereceram uma solução rápida e fácil para minha estratégia de investimento empresarial que certamente me ajudará a lidar com meus gastos futuros. Estou feliz em cooperar com esta equipe qualificada.',
      reverse: true
    }
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}
