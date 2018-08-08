var assert = require ('chai').assert;

var promedio =require('../promedio');

var promedios =new promedio();

describe ('Promedio',function (){
    
    it('Calculo',function()
    {       
        var expected =10;
    
        var actual=  promedios.calcular(10,10,10,10);
    
        assert.equal(expected,actual);
            
    });
});


describe ('Verificar',function (){

    it('P1  debe ser un numero',function()
    {       
    
        assert.isNotNumber(promedios.verificar('S',3,4,6),'String');
            
    });
    it('P2  debe ser un numero',function()
    {       
    
        assert.isNotNumber(promedios.verificar(8,'G',4,6),'String');
            
    });
    it('P3  debe ser un numero',function()
    {       
    
        assert.isNotNumber(promedios.verificar(8,9,'%',6),'String');
            
    });
    it('Trabajo final  no es un numero',function()
    {       
    
        assert.isNotNumber(promedios.verificar(8,9,9,'.'),'String');
            
    });
    it('P1  debe ser menor a 10',function()
    {       
    
        assert.isNumber(promedios.verificar(20,3,4,6),'Number');
            
    });
    it('P1  debe ser mayor a 0',function()
    {       
    
        assert.isNumber(promedios.verificar(-5,3,4,6),'Number');
            
    });
    it('P2  debe ser menor a 10',function()
    {       
    
        assert.isNumber(promedios.verificar(10,50,4,6),'Number');
            
    });
    it('P2  debe ser mayor a 0',function()
    {       
    
        assert.isNumber(promedios.verificar(10,-1,4,6),'Number');
            
    });
    it('P3  debe ser menor a 10',function()
    {       
    
        assert.isNumber(promedios.verificar(10,10,11,6),'Number');
            
    });
    it('P3  debe ser mayor a 0',function()
    {       
    
        assert.isNumber(promedios.verificar(10,10,-50,6),'Number');
            
    });
    it('Trabajo final  debe ser menor a 10',function()
    {       
    
        assert.isNumber(promedios.verificar(10,10,10,100),'Number');
            
    });
    it('Trabajo final  debe ser mayor a 0',function()
    {       
    
        assert.isNumber(promedios.verificar(10,10,10,-1),'Number');
            
    });

});