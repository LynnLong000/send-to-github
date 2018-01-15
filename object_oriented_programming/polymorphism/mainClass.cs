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
        
        public void count(int number) 
        { 
            if (Total == null)
            {
                Total = 0;
            }
            
            Total = Total + Convert.ToSingle( number);
            Console.WriteLine(Total.ToString());
        }
        
        public void count(float number) 
        { 
            if (Total == null)
            {
                Total = 0;
            }
            
            Total = Total + number;
            Console.WriteLine(Total.ToString());
        }
        
        public float Total { get; set;}
    }
    
}