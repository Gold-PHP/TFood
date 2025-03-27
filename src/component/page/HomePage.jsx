import Carousel from "../cpn/Carousel";
import Contact from "../cpn/Contact";
import Pagelayout from "../cpn/Pagelayout";
import Service from "../cpn/Services";
import Step from "../cpn/Step";
import MenuLayout from "./Menu/MenuLayout/MenuLayout";

function HomePage() {
  const foodList = [
    {
      "id": 1,
      "img": "https://shop.drinkizz.com/wp-content/uploads/2023/10/Banh-Mi-Drinkizz-ONE-Cup-550_550.jpg",
      "name": "Drinkizz Mocktail Slim Magic Breadstick",
      "price": 8,
      "size": "chicken breasts",
      "category": "ChickenRecipes",
      "description": "I made these using up some sliced cheese from my fridge. My family loved the chicken with the green sauce. I will make again; it's easy, cheap and tastes great."
    },
    {
      "id": 2,
      "img": "https://shop.drinkizz.com/wp-content/uploads/2023/10/combo-Wakeup-2.jpg",
      "name": "Drinkizz O.N.E Breadstick",
      "price": 8,
      "size": "medium",
      "category": "ChickenRecipes",
      "description": "This is a Rachel Ray recipe I had in my file for quite awhile, and had to try it recently to satisfy a craving. It turned out really well."
    },
    {
      "id": 3,
      "img": "https://shop.drinkizz.com/wp-content/uploads/2023/10/tra-sua-2-300x300.jpg",
      "name": "Drinkizz Mocktail Speed Up Breadstick",
      "price": 9,
      "size": "medium",
      "category": "ChickenRecipes",
      "description": "Ready, Set, Cook! Hidden Valley Contest Entry. I love creating my own recipes and menus for people. I have been doing this since I was about 12 years old."
    },
    {
      "id": 4,
      "img": "https://shop.drinkizz.com/wp-content/uploads/2021/12/1-1-600x600.png",
      "name": "Eo thon",
      "price": 12,
      "size": "medium",
      "category": "ChickenRecipes",
      "description": "I have found that it works great to make the filling up a head of time. Just prep and put in the refrigerator until needed. This is one of our favorite meals."
    }
   

]

  return (
    <Pagelayout>
      <Carousel />
      <MenuLayout name='New Product' data={foodList}/>
      <Service/>
      <Step/>
      <Contact/>
    </Pagelayout>
  );
}

export default HomePage;
