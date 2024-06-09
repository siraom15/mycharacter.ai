export function StoryWaveTop() {
  return (
    <svg
      id="wave"
      //   style="transform:rotate(0deg); transition: 0.3s"
      style={{ transform: "rotate(0deg)", transition: "0.3s" }}
      viewBox="0 0 1440 190"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop stopColor="#2dd4bf" offset="0%"></stop>
          <stop stopColor="#fef08a" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        // style="transform:translate(0, 0px); opacity:1"
        style={{ transform: "translate(0, 0px)", opacity: 1 }}
        fill="url(#sw-gradient-0)"
        d="M0,133L34.3,123.5C68.6,114,137,95,206,88.7C274.3,82,343,89,411,101.3C480,114,549,133,617,142.5C685.7,152,754,152,823,129.8C891.4,108,960,63,1029,41.2C1097.1,19,1166,19,1234,34.8C1302.9,51,1371,82,1440,88.7C1508.6,95,1577,76,1646,85.5C1714.3,95,1783,133,1851,126.7C1920,120,1989,70,2057,53.8C2125.7,38,2194,57,2263,72.8C2331.4,89,2400,101,2469,95C2537.1,89,2606,63,2674,50.7C2742.9,38,2811,38,2880,31.7C2948.6,25,3017,13,3086,28.5C3154.3,44,3223,89,3291,101.3C3360,114,3429,95,3497,101.3C3565.7,108,3634,139,3703,136.2C3771.4,133,3840,95,3909,69.7C3977.1,44,4046,32,4114,41.2C4182.9,51,4251,82,4320,101.3C4388.6,120,4457,127,4526,136.2C4594.3,146,4663,158,4731,148.8C4800,139,4869,108,4903,91.8L4937.1,76L4937.1,190L4902.9,190C4868.6,190,4800,190,4731,190C4662.9,190,4594,190,4526,190C4457.1,190,4389,190,4320,190C4251.4,190,4183,190,4114,190C4045.7,190,3977,190,3909,190C3840,190,3771,190,3703,190C3634.3,190,3566,190,3497,190C3428.6,190,3360,190,3291,190C3222.9,190,3154,190,3086,190C3017.1,190,2949,190,2880,190C2811.4,190,2743,190,2674,190C2605.7,190,2537,190,2469,190C2400,190,2331,190,2263,190C2194.3,190,2126,190,2057,190C1988.6,190,1920,190,1851,190C1782.9,190,1714,190,1646,190C1577.1,190,1509,190,1440,190C1371.4,190,1303,190,1234,190C1165.7,190,1097,190,1029,190C960,190,891,190,823,190C754.3,190,686,190,617,190C548.6,190,480,190,411,190C342.9,190,274,190,206,190C137.1,190,69,190,34,190L0,190Z"
      ></path>
    </svg>
  );
}
