import Hero from "@/components/Hero";
import DishSpotlight from "@/components/DishSpotlight";
import OrderDirectCTA from "@/components/OrderDirectCTA";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonials";
import InstagramPanel from "@/components/InstagramPanel";
import FAQAccordion from "@/components/FAQAccordion";
import LocationSection from "@/components/LocationSection";

export default function Home() {
  return (
    <>
      <Hero />

      <DishSpotlight
        eyebrow="Signature Pizza"
        title="Sweet Potato Gold Pizza"
        description="Our most-ordered pizza. A golden crust stuffed with real sweet potato, topped with white sauce, sausage, ham, pineapple, onion, bell pepper, corn, and cheese — sweet and savory in every slice."
        price="From $24.99"
        image="/images/dish-pizza.jpg"
        imageAlt="Cheesy pizza fresh from the oven"
      />

      <DishSpotlight
        eyebrow="Korean Fried Chicken"
        title="Fried Fresh, Sauced to Order"
        description="Double-fried for a shatter-crisp crust, then tossed in your choice of garlic soy, sweet chili, sweet & mild, lemon pepper, spicy, or buffalo sriracha. Comes with complimentary cabbage salad and pickled radish."
        price="8pc Wings $17.99"
        image="/images/dish-chicken.jpg"
        imageAlt="Overhead shot of Korean fried chicken wings"
        reverse
      />

      <DishSpotlight
        eyebrow="Fan Favorite"
        title="Sauced Wings, Extra Crispy"
        description="Reviewers keep coming back for the wings — well-coated, never soggy, with a flavor lineup built for sharing. Order them solo or as a half-and-half with two sauces."
        price="12pc Wings $23.99"
        image="/images/dish-wings.jpg"
        imageAlt="Glazed chicken wings on a black plate"
      />

      <OrderDirectCTA />
      <Story />
      <Testimonials />
      <InstagramPanel />
      <FAQAccordion />
      <LocationSection />
    </>
  );
}
