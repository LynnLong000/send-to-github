using System;

namespace Bulldozer
{
    class MainClass
    {
        public static void Main (string[] args)
        {
            var worker =  new FactoryWorker ();

        }
    }
    
    public class FactoryWorker
    {
        //constructor 
        public FactoryWorker () 
        {
        }
        
        public int AddNumber(int num1, int num2) 
        { 
            var result  = num1 + num2;
            
            return result;
        }
    }
}