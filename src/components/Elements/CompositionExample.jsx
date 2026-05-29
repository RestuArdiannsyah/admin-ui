import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="#299D91" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="#299D91"
        strokeWidth={3}
      />
    </g>
  );
}

export default function CompositionExample(props) {
  const { data } = props;

  return (
    <GaugeContainer
      width={150}
      height={80}
      startAngle={-90}
      endAngle={90}
      value={data}
      sx={() => ({
        [`& .value-arc`]: {
          fill: "#299D91",
        },
      })}
    >
      <GaugeReferenceArc />
      <GaugeValueArc className="value-arc" />
      <GaugePointer />
    </GaugeContainer>
  );
}