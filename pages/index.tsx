import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";
// import heading from "./components/heading";
import Heading from "./components/Heading";
import Dropdown from "./components/Dropdown";
import Button from "./components/Button";
import Card from "./components/Card";
import Footer from "./components/Footer";


export default function Home() {

  let items = ["Kaski", "Syangja", "Baglung", "Parbat", "Kathmandu"];
  let items1 = ["Pokhara", "Kathmandu", "Dharan", "Chitwan", "Butwal"];
  let items2 = ["Land" , "Appartment" , "Room"];
  let items3 = ["1000" , "2000"];
  return (
    <>
      <Navbar />
      <Heading />
      <div className="dropdown-ml"><Dropdown items={items} /> <Dropdown items={items1} /> <Dropdown items={items2} /> <Dropdown items={items3} /> <Button /></div>
      <div className='card-container'>

        <Card imageSrc="123.png" destination="#" />
        <Card imageSrc="234.png" destination="#" />
        <Card imageSrc="345.png" destination="#" />
        <Card imageSrc="456.png" destination="#" />
        <Card imageSrc="567.png" destination="#" />
        <Card imageSrc="123.png" destination="#" />
        <Card imageSrc="789.png" destination="#" />
        <Card imageSrc="345.png" destination="#" />
      </div>
      <Footer />
    </>
  );
}
