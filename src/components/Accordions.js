import Accordion from "./Accordion";

const Accordions = () => {
  const data = [
    {
      id: "0001",
      type: "donut",
      name: "Cake",
      ppu: 0.55,
    },
    {
      id: "0002",
      type: "donut",
      name: "Raised",
      ppu: 0.55,
    },
    {
      id: "0003",
      type: "donut",
      name: "Old Fashioned",
      ppu: 0.55,
    },
  ];
  return (
    <div>
      {data.map(data => (
        <Accordion name={data} />
      ))}
    </div>
  );
};

export default Accordions;
