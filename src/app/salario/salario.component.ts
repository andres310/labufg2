import { Component } from '@angular/core';
import { SalarioService } from '../salario.service';

@Component({
  selector: 'app-salario',
  templateUrl: './salario.component.html',
  styleUrls: ['./salario.component.css']
})
export class SalarioComponent {
  salarioInput: number = 0;

  // Para mostrar detalle de calculo
  descuentoRenta: number = 0;
  descuentoAFP: number = 0;
  descuentoISSS: number = 0;

  salarioLiquido: number = 0; // Resultado del calculo

  constructor(private salarioService: SalarioService) {}

  calcularSalario() {
    this.salarioLiquido = this.salarioService.calcularSalarioLiquido(this.salarioInput);
  }

  calcularSalarioDetalle() {
    this.descuentoRenta = this.salarioService.calcularDescuentoRenta(this.salarioInput);
    this.descuentoAFP = this.salarioService.calcularDescuentoAFP(this.salarioInput);
    this.descuentoISSS = this.salarioService.calcularDescuentoISSS(this.salarioInput);
  }
}
