import { SpinnerCircularFixed } from "spinners-react";

export function Spinner() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SpinnerCircularFixed
        size={59}
        thickness={180}
        speed={100}
        color="rgba(57, 172, 65, 1)"
        secondaryColor="rgba(0, 0, 0, 0.44)"
      />
    </div>
  );
}
