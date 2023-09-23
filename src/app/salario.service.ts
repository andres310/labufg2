import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalarioService {

  constructor() { }

  calcularDescuentoRenta(salario: number): number {
    // TODO: Calcular renta en base a salario y tabla de hacienda
    return 0;
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
