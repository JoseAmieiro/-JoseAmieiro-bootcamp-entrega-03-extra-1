const empleado = {
    bruto: 10000,
    hijos: 1,
    pagas: 14,
  };

let retencion = 0;

switch (true) {
    case empleado.bruto < 12000:
      retencion = 0;
      break;
    case empleado.bruto < 24000:
      retencion = 0.08;
      break;
    case empleado.bruto < 34000:
      retencion = 0.16;
      break;
    case empleado.bruto >= 34000:
      retencion = 0.30;
      break;
  }
  
console.log("retencion " + retencion);

if (empleado.hijos > 0) {
    retencion = retencion - 0.02;
}

if (retencion < 0) {
    retencion = 0;
}

console.log("retencion hijos: " + retencion);

let sueldoNeto = empleado.bruto - empleado.bruto*retencion;

console.log("sueldo neto anual: " + sueldoNeto + " €");

let sueldoNetoMensual = sueldoNeto/empleado.pagas;

console.log("sueldo neto mensual: " + sueldoNetoMensual + " €")