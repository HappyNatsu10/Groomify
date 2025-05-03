import Button from "./components/button";

export default function Home() {
  return (
    <div className=" w-full h-[400px] flex items-center justify-center mt-20">
        <Button
          color="#fff"
          bgColor="#58655b"
          hoverBgColor="#58655w"
          hoverColor="#fff"
          content="Landing Page"
          borderColor='none'
          to="/landing"
          />
    </div>
  );
}
