import { Service } from '../../_model/service';

export class ServiceOfService {
    data: Service[];
    constructor() {
        this.data = [
            { id: 1, name: 'service 1' },
            { id: 2, name: 'service 2' },
            { id: 3, name: 'service 3' },
            { id: 4, name: 'service 4' },
            { id: 5, name: 'service 5' },
            { id: 6, name: 'service 6' },
        ]
    }

    getAll(): Service[] {
        return this.data;
    }

    add(service: Service) {
        const id = this.data.length + 1;
        service.id = id;
        this.data.push(service);
    }
    delete(id: number) {
        const i = this.data.findIndex(service => service.id === id);
        this.data.splice(i, 1);
    }
}