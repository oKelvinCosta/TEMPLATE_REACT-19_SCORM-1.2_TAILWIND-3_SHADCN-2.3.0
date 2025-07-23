import Img from "./Img";

interface DivisorProps {
    place: "top" | "bottom";
    marginDistance?: string;
    src: string;
}

// Add image to divider a section
// If the place of divisor is top, it'll have a margin-bottom to create a space between content
export default function Divisor({ place = "top", marginDistance = "80px", src }:DivisorProps) {
  const placeType = place === "top" ? false : true;

  return (
    <>
      <div
      style={{
        marginTop: placeType ?  marginDistance : "",
        marginBottom: !placeType ? marginDistance : "",
        lineHeight: 0
      }}
        className={`overflow-hidden`}
      >
        <Img
          src={`${src}`}
          className={`w-auto sm:w-full${placeType ? "-mb-[3px]" : "-mt-[3px]"}`}
          alt="Imagem de divisão"
        />
      </div>
    </>
  );
}


// Example:
{/* <Divisor place="top" src="./imgs/divisor_1.webp" /> */}