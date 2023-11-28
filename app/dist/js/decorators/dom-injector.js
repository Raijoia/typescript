export function domInjector(seletor) {
    return function (target, propertyKey) {
        let elemento;
        const getter = function () {
            if (!elemento) {
                console.log(`buscando ${seletor} para injetar em ${propertyKey}`);
                elemento = document.querySelector(seletor);
                console.log(`retornando elemento do dom para injetar em ${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    };
}
