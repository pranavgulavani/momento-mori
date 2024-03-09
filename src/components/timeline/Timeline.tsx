type TimeLineProps = {
  weeksSpent: number;
  weeksRemaining: number;
};

type CircleProps = {
  cx: string;
  cy: string;
  r: string;
  fill?: string;
  id: string;
};

function Circle({ cx, cy, r, fill, id }: CircleProps) {
  return <circle cx={cx} cy={cy} r={r} fill={fill} id={id} />;
}
export default function Timeline({
  weeksSpent,
  weeksRemaining,
}: TimeLineProps) {
  const renderCircles = () => {
    const circles = [];
    let initialCx = 10;
    let rowIndex = 10;
    const timeline = weeksSpent + weeksRemaining;
    console.log(timeline, weeksSpent, weeksRemaining);
    for (let i = 1; i <= timeline; i++) {
      circles.push(
        <Circle
          key={i}
          id={`${i}`}
          cx={`${initialCx}`}
          cy={`${rowIndex}`}
          r="3"
          fill={`${i <= weeksSpent ? "black" : "gray"}`}
        />
      );
      initialCx = initialCx + 10;
      if (i % 52 === 0) {
        initialCx = 10;
        rowIndex += 10;
      }
    }
    return circles;
  };
  const spentCircles = renderCircles();
  return (
    <>
      <svg
        viewBox="0 0 100% 100%"
        className="w-full md:w-[40%] md:mx-auto  h-full border border-red-400"
      >
        {spentCircles}
      </svg>
    </>
  );
}
