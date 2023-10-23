describe('Test on <Pagination/> component', () => {

    test('Esta prueba no debe de fallar', () => {
        // 1. Inicialización
        const message1 = 'Hola Mundo'; //variable expected
        //2. Estimulo
        const message2 = message1.trim(); //variable constrast
        //3. Observar el comportamiento... esperado
        expect(message1).toBe(message2);
    });
});
