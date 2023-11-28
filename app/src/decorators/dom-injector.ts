export function domInjector(seletor: string) {
  return function (
    target: any,
    propertyKey: string
  ) {
    let elemento: HTMLElement;
    const getter = function () {
      if(!elemento) {
        console.log(`buscando ${seletor} para injetar em ${propertyKey}`)
        elemento = <HTMLElement>document.querySelector(seletor)
        console.log(`retornando elemento do dom para injetar em ${propertyKey}`)
      }
      return elemento;
    }

    Object.defineProperty(target, propertyKey, {
      get: getter
    })
  }
}