import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type TypeFullLogoType = {
  dimensions?: string;

  /** Style props */
  typeFullLogoPosition?: CSSProperties["position"];
  typeFullLogoTop?: CSSProperties["top"];
  typeFullLogoLeft?: CSSProperties["left"];
  logoIconWidth?: CSSProperties["width"];
  logoIconHeight?: CSSProperties["height"];
};

const TypeFullLogo: FunctionComponent<TypeFullLogoType> = ({
  dimensions,
  typeFullLogoPosition,
  typeFullLogoTop,
  typeFullLogoLeft,
  logoIconWidth,
  logoIconHeight,
}) => {
  const typeFullLogoStyle: CSSProperties = useMemo(() => {
    return {
      position: typeFullLogoPosition,
      top: typeFullLogoTop,
      left: typeFullLogoLeft,
    };
  }, [typeFullLogoPosition, typeFullLogoTop, typeFullLogoLeft]);

  const logoIconStyle: CSSProperties = useMemo(() => {
    return {
      width: logoIconWidth,
      height: logoIconHeight,
    };
  }, [logoIconWidth, logoIconHeight]);

  return (
    <div
      className="overflow-hidden flex flex-col items-center justify-center pt-1 px-1 pb-0"
      style={typeFullLogoStyle}
    >
      <img
        className="w-[94px] relative h-[23px]"
        alt=""
        src={dimensions}
        style={logoIconStyle}
      />
    </div>
  );
};

export default TypeFullLogo;
