type TimeLineProps = {
  monthsSpent: number;
  monthsRemaining: number;
};

export default function Timeline({
  monthsSpent,
  monthsRemaining,
}: TimeLineProps) {
  const renderCircles = () => {
    const circles = [];
    const timeline = monthsSpent + monthsRemaining;

    for (let i = 1; i <= timeline; i++) {
      circles.push(
        <div
          key={i}
          className="w-[8px] md:w-[10px] h-[8px] md:h-[10px] border m-1 border-black "
          style={{
            backgroundColor: `${i <= monthsSpent ? "#0088FE" : ""}`,
          }}
        ></div>
      );
    }
    return circles;
  };
  const spentCircles = renderCircles();
  return <>{spentCircles}</>;
}
