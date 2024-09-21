function StarSvg({ size, color }: { size: number; color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      data-name="Layer 1"
      viewBox="0 0 64 64"
    >
      <path d="M1 32l25 6 6 25 6-25 25-6-25-6-6-25-6 25z" fill={color}></path>
    </svg>
  );
}

export default StarSvg;
