import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalarioService {

  constructor() { }

  calcularDescuentoRenta(salario: number): number {
    if (salario <= 487.60) {
      return 0;
    } else if (salario <= 642.85) {
      return salario * 0.1;
    } else if (salario <= 915.81) {
      return salario * 0.1;
    } else if (salario <= 2058.67) {
      return salario * 0.2;
    } else {
      return salario * 0.3;
    }
  }

  calcularDescuentoAFP(salario: number): number {
    // TODO: Calcular descuento de AFP
    return 0;
  }

  calcularDescuentoISSS(salario: number): number {
    // TODO: Calcular descuento de ISSS
    return 0;
  }

  calcularSalarioLiquido(salario: number): number {
    // TODO: Calcular descuentos
    return 0;
  }
}
