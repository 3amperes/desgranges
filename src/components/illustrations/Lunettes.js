import React from 'react';

const Lunettes = ({ title, ...props }) => (
  <svg viewBox="0 0 386 160" {...props}>
    <g fill="none" fillRule="evenodd">
      <ellipse cx={193} cy={128} fill="#F99E78" rx={193} ry={32} />
      <path
        fill="#D98765"
        d="M219.297 126c11.64-1.804 32.014-3 55.203-3 12.495 0 24.173.347 34.108.95L256 107.312l7.21-4.312 71.87 24.024c3.17.763 4.92 1.6 4.92 2.476 0 3.59-29.325 6.5-65.5 6.5-27.247 0-50.61-1.651-60.48-4h-47.04c-9.87 2.349-33.233 4-60.48 4-36.175 0-65.5-2.91-65.5-6.5 0-.877 1.75-1.713 4.92-2.476L117.79 103l7.21 4.312-52.608 16.638c9.935-.603 21.613-.95 34.108-.95 23.19 0 43.564 1.196 55.203 3h57.594z"
      />
      <path
        fill="#296972"
        d="M37 20l68.034 11.541a12.35 12.35 0 0 1 10.132 10.244l9.786 61.778a3.837 3.837 0 0 1-3.79 4.437 5.06 5.06 0 0 1-5.024-4.461l-5.853-49.086a12.35 12.35 0 0 0-11.49-10.864L45.93 40.275 37 20zM345 20l-68.034 11.541a12.35 12.35 0 0 0-10.132 10.244l-9.786 61.778a3.837 3.837 0 0 0 3.79 4.437 5.06 5.06 0 0 0 5.024-4.461l5.853-49.086a12.35 12.35 0 0 1 11.49-10.864l52.864-3.314L345 20z"
      />
      <path
        fill="#327F89"
        d="M64.493 13.515C76.421 5.036 91.325 0 107.493 0c25.364 0 47.618 12.395 60.151 31.032 4.299-4.346 13.366-7.438 23.856-7.438 10.49 0 19.557 3.092 23.856 7.438C227.889 12.395 250.143 0 275.506 0c16.169 0 31.073 5.036 43.001 13.515l-.066-.124c7.383 4.11 29.786.984 33.439 3.674 3.653 2.69 5.582 12.347 2.791 15.85-2.791 3.504-13.182.175-11.213 10.86.406 2.205.686 4.255.841 6.15A61.808 61.808 0 0 1 346.417 66c0 36.45-31.747 66-70.91 66s-70.91-29.55-70.91-66c0-7.585 1.374-14.87 3.904-21.654-4.043-4.885-10.158-7.998-17.001-7.998-6.843 0-12.958 3.113-17 7.998A61.796 61.796 0 0 1 178.403 66c0 36.45-31.748 66-70.91 66-39.164 0-70.911-29.55-70.911-66 0-5.545.734-10.93 2.118-16.075.155-1.895.435-3.945.841-6.15 1.969-10.685-8.422-7.356-11.213-10.86-2.791-3.503-.862-13.16 2.791-15.85 3.653-2.69 26.056.436 33.439-3.674l-.066.124zM275.507 121.16c32.46 0 58.773-24.553 58.773-54.84 0-30.288-26.314-54.84-58.773-54.84-32.46 0-58.773 24.552-58.773 54.84 0 30.287 26.313 54.84 58.773 54.84zm-168.014 0c32.46 0 58.773-24.553 58.773-54.84 0-30.288-26.313-54.84-58.773-54.84-32.46 0-58.773 24.552-58.773 54.84 0 30.287 26.314 54.84 58.773 54.84z"
      />
      <path
        fill="#F3F0F0"
        fillOpacity={0.54}
        d="M100.455 121a61.253 61.253 0 0 1-14.62-3.492L114.105 12a61.307 61.307 0 0 1 14.649 3.388L100.455 121zm16.98-.394l26.078-97.326c4.727 3.468 8.87 7.604 12.27 12.255l-21.359 79.715a60.76 60.76 0 0 1-16.99 5.356zM71.11 109.489c-4.997-3.729-9.33-8.208-12.802-13.257L79.13 18.527a60.646 60.646 0 0 1 17.964-6.007L71.11 109.489zm69.517 2.266l18.865-70.407c4.16 7.54 6.508 16.1 6.508 25.176 0 18.77-10.048 35.337-25.373 45.23zM54.677 90.13C51.036 82.981 49 74.976 49 66.524c0-18.14 9.385-34.224 23.849-44.213l-18.173 67.82zM268.454 121a61.253 61.253 0 0 1-14.62-3.492L282.105 12a61.307 61.307 0 0 1 14.649 3.388L268.455 121zm16.98-.394l26.078-97.326c4.727 3.468 8.87 7.604 12.27 12.255l-21.359 79.715a60.76 60.76 0 0 1-16.99 5.356zm-46.325-11.117c-4.997-3.729-9.33-8.208-12.802-13.257l20.821-77.705a60.646 60.646 0 0 1 17.964-6.007l-25.983 96.969zm69.517 2.266l18.865-70.407c4.16 7.54 6.508 16.1 6.508 25.176 0 18.77-10.048 35.337-25.373 45.23zm-85.95-21.624c-3.64-7.15-5.677-15.155-5.677-23.607 0-18.14 9.385-34.224 23.849-44.213l-18.173 67.82z"
      />
      <circle cx={40.5} cy={25.5} r={2.5} fill="#A7D3D1" fillRule="nonzero" />
      <circle cx={341.5} cy={25.5} r={2.5} fill="#A7D3D1" fillRule="nonzero" />
    </g>
  </svg>
);

export default Lunettes;
