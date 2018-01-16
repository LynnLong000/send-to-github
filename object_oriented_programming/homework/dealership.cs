using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dealership
{
    class Program
    {
        static void Main(string[] args)
        {
            var saloon1 = new SaloonCar(2);
            var saloon2 = new SaloonCar(3,"Nissan");
            var saloon3 = new SaloonCar(3, "Ford","purple");
        }
    }

    public class Car
    {
        public Car()
        {
        }

        public Car(string _color , string _manufacturer)
        {

        }

        public string color { get; set; }
        public string manufacturer { get; set; }

    }

    public class SaloonCar : Car
    {

        public SaloonCar()
        {

        }

        public SaloonCar(int _numberOfSeats)
        {
            console.log("Number of seats :", _numberOfSeats);
        }

        public SaloonCar(int _numberOfSeats, string _manufacturer)
        {
            console.log("Number of seats : {0} Manufacturer : {1}", _numberOfSeats,_manufacturer);
        }

        public SaloonCar(int _numberOfSeats, string _manufacturer, string _color)
        {
            console.log("Number of seats in car : {0} Manufacturer of the car : {1} Color of the car: {2}", _numberOfSeats, _manufacturer,_color);
        }

        public int numberOfSeats { get; set; }
    }
}
