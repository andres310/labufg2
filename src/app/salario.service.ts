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
    const descuentoAFP = salario * 0.0725; // 7.25% de descuento de AFP
    return descuentoAFP;
  }

  calcularDescuentoISSS(salario: number): number {
    const descuentoISSS = salario * 0.03; // 3% de descuento de ISSS
    return descuentoISSS;
  }

  calcularSalarioLiquido(salario: number): number {
    const descuentoRenta = this.calcularDescuentoRenta(salario);
    const descuentoAFP = this.calcularDescuentoAFP(salario);
    const descuentoISSS = this.calcularDescuentoISSS(salario);

    // Calcular salario neto restando los descuentos
    const salarioNeto = salario - descuentoRenta - descuentoAFP - descuentoISSS;

    return salarioNeto;
  }
}
