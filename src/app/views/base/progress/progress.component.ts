import { Component } from '@angular/core';
import { ApiClientesService } from '../../../service/api-clientes.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  data: any[] = [];

  constructor(private apiclientesservice: ApiClientesService) { }

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.apiclientesservice.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }
}


