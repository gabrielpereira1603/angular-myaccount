import { Component, AfterViewInit } from '@angular/core';

import * as AOS from 'aos';
import { ServicesComponent } from '../../components/services/services.component';
import { MissionComponent } from '../../components/mission/mission.component';
import { ClientsChooseComponent } from '../../components/clients-choose/clients-choose.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { TestimonesComponent } from '../../components/testimones/testimones.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ServicesComponent,
    MissionComponent,
    ClientsChooseComponent,
    FeaturesComponent,
    TestimonesComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {
    AOS.init({
      duration: 1200,
    });
  }
}
