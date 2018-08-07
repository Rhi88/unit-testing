var assert = require ('chai').assert;

var primo =require('../primos');

var primos =new primo();

describe ('primo',function (){
    
    it('N1=N2+N3',function()
    {       
        var expected ="N1 es la suma de N2 + N3";
    
        var actual= primos.añadir(4 ,2 ,2);
    
        assert.equal(expected,actual);
            
    });

    it('N2=N1+N3',function()
    {       
        var expected ="N2 es la suma de N1 + N3";
    
        var actual= primos.añadir(2 ,4 ,2);
    
        assert.equal(expected,actual);
            
    });

    it('N3=N2+N3',function()
    {       
        var expected ="N3 es la suma de N2 + N1";
           
        var actual= primos.añadir(2 ,2 ,4);
        
        assert.equal(expected,actual);
            
    });
    it('N1, N2 , N3  ninguno es resultado de la suma de los otros 2',function()
    {
        var expected ="Ningun numero es el resultado de la suma de los otros 2";
        
        var actual= primos.añadir(5,13,7);

        assert.equal(expected,actual);
    });

    it ('El primer dato es numero',function()
    {
        assert.typeOf(primos.añadir(5,3,'n3'),'number');
    });
});