import React from 'react';

interface QnaydsLogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  imgClassName?: string;
  showText?: boolean;
  imageSrc?: string;
}

export const QnaydsLogoIcon: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} inline-block select-none shrink-0`}
    >
      {/* Graduation Cap (Mortarboard) - At Top Left */}
      <g fill="#0284C7">
        {/* Diamond top */}
        <path d="M 28 6 L 50 15 L 28 24 L 6 15 Z" />
        
        {/* Cap skull base */}
        <path d="M 17 19.5 C 17 25.5, 39 25.5, 39 19.5 L 39 21.5 C 39 27.5, 17 27.5, 17 21.5 Z" />
        
        {/* Tassel line & end bulb */}
        <path d="M 11 17.5 L 9.5 20 V 29" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
        <path d="M 8 29 H 11 L 9.5 34 Z" />
      </g>

      {/* Main Stylized 'Q' Symbol */}
      <g fill="#0284C7">
        <path
          d="
            M 33 30
            H 55
            C 67 30 75 38 75 50
            C 75 54 73.5 57.5 71 60.5
            L 83 72.5
            L 73 82.5
            L 60 69.5
            C 56.5 71.5 52.5 72.5 48 72.5
            H 35
            C 23 72.5 15 64.5 15 52.5
            V 38
            C 15 33.5 18.5 30 23 30
            H 33
            Z
            M 30 42.5
            V 52.5
            C 30 55.5 32.5 58 35.5 58
            H 48
            C 51 58 53.5 55.5 53.5 52.5
            V 48
            C 53.5 45 51 42.5 48 42.5
            H 30
            Z
          "
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export const QnaydsLogo: React.FC<QnaydsLogoProps> = ({
  className = "flex items-center gap-3.5 sm:gap-4",
  iconClassName = "w-16 h-16 sm:w-20 sm:h-20",
  textClassName = "font-black text-4xl sm:text-5xl tracking-tight text-slate-900",
  imgClassName = "h-18 sm:h-24 max-h-32 w-auto object-contain select-none shrink-0",
  showText = true,
  imageSrc = "/logo.png",
}) => {
  const [currentSrc, setCurrentSrc] = React.useState(imageSrc);
  const [imgError, setImgError] = React.useState(false);

  const handleError = () => {
    if (currentSrc === "/logo.png") {
      setCurrentSrc("/logo.png.png");
    } else {
      setImgError(true);
    }
  };

  return (
    <div className={className}>
      {!imgError ? (
        <img
          src={currentSrc}
          alt="Qnayds Logo"
          className={imgClassName}
          onError={handleError}
        />
      ) : (
        <>
          <QnaydsLogoIcon className={iconClassName} />
          {showText && <span className={textClassName}>Qnayds</span>}
        </>
      )}
    </div>
  );
};
