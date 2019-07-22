import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ServiceOfService } from '../service.service';
import { Service } from '../../../_model/service';

@Component({
  selector: 'service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {
  data: Service[];
  service: Service;
  addServiceForm: FormGroup;
  constructor(private serviceOfService: ServiceOfService) { }

  ngOnInit() {
    if (!this.data) {
      this.data = this.serviceOfService.getAll();
    }
    this.addServiceForm = new FormGroup({
      serviceName: new FormControl('', Validators.required),
    })
  }

  onSubmit() {
    this.addServiceForm.getRawValue();
    this.service = { name: this.addServiceForm.controls.serviceName.value };
    if (this.addServiceForm.controls.serviceName.valid) {
      this.serviceOfService.add(this.service);
      this.addServiceForm.controls.serviceName.setValue('');
    }
  }
}
