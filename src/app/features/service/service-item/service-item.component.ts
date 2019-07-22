import { Component, OnInit, Input } from '@angular/core';

import { Service } from '../../../_model/service';
import { ServiceOfService } from '../service.service';

@Component({
  selector: 'service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss']
})
export class ServiceItemComponent implements OnInit {
  @Input() service: Service;
  constructor(private serviceOfService: ServiceOfService) { }

  ngOnInit() {
  }

  deleteService(id: number) {
    console.log(id)
    this.serviceOfService.delete(id);
  }
}
