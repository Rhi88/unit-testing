class Promedio{

    constructor()
    {

    }
    verificar(p1,p2,p3,trabajo_fin)
    {
        if(isNaN(p1))
        {
            console.log("P1 no es numero");
            return "error";
        
        }
        if(isNaN(p2))
        {
            console.log("P2 no es un numero")
            return "error";
        }
        if(isNaN(p3))
        {
            console.log("P3 no es un numero");
            return "error";
        }
        if(isNaN(trabajo_fin))
        {
            console.log("Trabajo final no es un numero");
            return "error";
        }
        if(p1<0 || p1>10)
        {
            console.log("P1 no esta en rango");
            return 0;
        }
        if(p2<0 || p2>10)
        {
            console.log("P2 no esta en rango");
            return 0;
        }
        if(p3<0 || p3>10)
        {
            console.log("P3 no esta en rango");
            return 0;
        }
        if(trabajo_fin<0 || trabajo_fin>10)
        {
            console.log("Trabajo final no esta en rango");
            return 0;
        }
    }
    calcular(p1,p2,p3,trabajo_fin)
    {
        
        var exam=p1+p2+p3;
        var prom=((exam)/3)*0.55;
        console.log(prom);
        console.log(trabajo_fin*0.15);
        console.log(exam*0.30);
        var prom_final=(prom+((exam/3)*0.30)+(trabajo_fin*0.15));
        console.log("Tu promedio es",prom_final);
        return prom_final;

    }

}
module.exports=Promedio;