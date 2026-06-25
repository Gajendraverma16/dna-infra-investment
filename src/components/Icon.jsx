const paths = {
  building: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16" />
      <path d="M13 9h5a1 1 0 0 1 1 1v11" />
      <path d="M8 8h1M8 12h1M8 16h1M16 13h0M16 17h0" />
    </>
  ),
  map: (
    <>
      <path d="m9 4 6 2 6-2v14l-6 2-6-2-6 2V6z" />
      <path d="M9 4v14M15 6v14" />
    </>
  ),
  tower: (
    <>
      <path d="M8 21V4l8-2v19" />
      <path d="M16 8h3a1 1 0 0 1 1 1v12" />
      <path d="M4 21V12l4-2" />
      <path d="M11 7h0M11 11h0M11 15h0" />
    </>
  ),
  shop: (
    <>
      <path d="M3 9 4 4h16l1 5" />
      <path d="M4 9v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9" />
      <path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
  leaf: (
    <>
      <path d="M11 20A7 7 0 0 1 4 13c0-6 7-9 16-9 0 9-3 16-9 16Z" />
      <path d="M4 21c2-5 6-9 11-11" />
    </>
  ),
  home: (
    <>
      <path d="m3 11 9-7 9 7" />
      <path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="m7 14 3-4 3 3 5-7" />
    </>
  ),
  cup: (
    <>
      <path d="M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" />
      <path d="M17 9h2a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-2" />
      <path d="M7 3v2M11 3v2" />
      <path d="M4 21h13" />
    </>
  ),
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  star: (
    <path d="m12 3 2.7 5.6 6.3.9-4.5 4.3 1.1 6.2L12 17.8 6.4 20l1.1-6.2L3 9.5l6.3-.9Z" />
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="m5 13 4 4 10-11" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
}

export default function Icon({ name, className = 'h-6 w-6', filled = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
