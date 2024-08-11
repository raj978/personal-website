import React, { useEffect, useState, ReactNode } from "react";
import { RoughNotation } from "react-rough-notation";
import {useTheme} from "@/context/theme-context";

interface HighlightedTextProps {
  children: ReactNode;
  animationStep: number;
  step: number;
  lightColor: string;
  darkColor: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ children, animationStep, step, lightColor, darkColor }) => {
  const { theme } = useTheme();
  const [highlightColor, setHighlightColor] = useState(lightColor);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 700);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setHighlightColor(theme === "dark" ? darkColor : lightColor);
  }, [theme, lightColor, darkColor]);


  if (isSmallScreen) {
    return <>{children}</>;
  }
  return (
    <RoughNotation type="highlight" color={highlightColor} show={animationStep >= step} animationDuration={800}>
      {children}
    </RoughNotation>
  );
};

export default HighlightedText;
