using System;

namespace Bulldozer
{
    class MainClass
    {
        public static void Main (string[] args)
        {
            var man =  new Man ();
            var kart =  new Kart ();
            var alien =  new Alien ();
        }
    }
    
    public class GeneralObject
    {
        //constructor 
        public GeneralObject () 
        {
        }
        
        public string color { get; set;}
        public bool moves { get; set;}
    }
    
    public class Human : GeneralObject
    {
        //constructor 
        public Human () 
        {
        }
        
        public string name { get; set;}
    }
    
    public class Man : Human
    {
        //constructor 
        public Man () 
        {
        }
    }
    
    public class Woman : Human
    {
        //constructor 
        public Woman () 
        {
        }
    }
    
    public class Kart : GeneralObject
    {
        //constructor 
        public Kart () 
        {
        }
        
        public string manufacturer { get; set;} 
    }
    
    public class Alien : GeneralObject
    {
        //constructor 
        public Alien () 
        {
        }
        
        public string planet { get; set;} 
    }
}