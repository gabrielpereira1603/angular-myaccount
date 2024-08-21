import { Component, AfterViewInit } from '@angular/core';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import * as AOS from 'aos';

@Component({
  selector: 'app-clients-choose',
  standalone: true,
  imports: [],
  templateUrl: './clients-choose.component.html',
  styleUrl: './clients-choose.component.css'
})
export class ClientsChooseComponent implements AfterViewInit{

  ngAfterViewInit() {
    AOS.init({
      duration: 1200,
    });
  }

  openDialog(): void {
    Swal.fire({
      title: 'Participe do Teste Gratuito',
      html: `
        <form id="contactForm">
          <div class="swal2-input-group">
            <input id="name" class="swal2-input" placeholder="Nome Completo" />
            <input id="email" class="swal2-input" placeholder="Email" type="email" />
            <input id="phone" class="swal2-input" placeholder="Telefone" type="tel" />
          </div>
        </form>
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;

        if (!name || !email || !phone) {
          Swal.showValidationMessage('Por favor, preencha todos os campos');
          return false; // Impede o fechamento do modal
        }

        return { name, email, phone };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const { name, email, phone } = result.value;
        console.log('Nome Completo:', name);
        console.log('Email:', email);
        console.log('Telefone:', phone);
        Swal.fire('Enviado!', 'Sua inscrição foi recebida.', 'success');
      }
    });
  }
}
