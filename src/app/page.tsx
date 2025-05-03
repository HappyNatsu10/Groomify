import Button from "./components/button";

export default function Home() {
  return (
    <div className=" w-full h-full flex items-center justify-center">
        <Button
          color="#fff"
          bgColor="#58655b"
          hoverBgColor="#58655w"
          hoverColor="#fff"
          content="Landing Page"
          borderColor='none'
          to="./landing"
          />
    </div>
  );
}
