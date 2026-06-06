"use client";

import NodeLoader from "./components/NodeLoader";

export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#07040f",
        zIndex: 9999,
      }}
    >
      <NodeLoader />
      <span
        style={{
          position: "absolute",
          width: 1, height: 1,
          padding: 0, margin: -1,
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        Loading
      </span>
    </div>
  );
}
