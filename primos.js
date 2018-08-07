class Primos
	{
        constructor()
        {

        }
         añadir(n1,n2,n3)
         {
          if(isNaN(n1))
          {
              return "N1 no es numero";
          }
          if(isNaN(n2))
          {
              return "N2 no es un numero";
          }
          if(isNaN(n3))
          {
              return "N3 no es un numero";
          }
            {
	            if(n1==(n2+n3))
	        {
            
                console.log("El numero 'N1'",n1,"Es la suma de",n2,"+",n3);
        
            
                return "N1 es la suma de N2 + N3";
	        }
            
            if(n2===(n1+n3))
            
            {
            
                console.log("El numero 'N2'",n2,"Es la suma de ",n1,"+",n3);
         
            
                return "N2 es la suma de N1 + N3";
        	}
            
            if(n3===(n1+n2))
            
            {
         
            console.log("El numero 'N3'",n3,"Es la suma de ",n1,"+",n2);
         
            return "N3 es la suma de N2 + N1";
            }
            
	    if((n1!==(n2+n3))&& (n2!==(n1+n3)) && (n3!==(n1+n2)))
        
            {
                    console.log("Ningun numero es la suma de los otros 2");
                
                    return "Ningun numero es el resultado de la suma de los otros 2";
            }
        
        }
       
    }
}


    module.exports=Primos;