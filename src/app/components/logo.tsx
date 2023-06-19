import React, { useEffect, useState } from "react";
import WpImage from "./wpimage";
import { fetchLogoData } from "../api";

interface LogoData {
  site_logo: string;
  name: string;
}

const Logo: React.FC = () => {
  const [logoData, setLogoData] = useState<LogoData | null>(null);

  useEffect(() => {
    fetchLogoData()
      .then((data: LogoData) => {
        setLogoData(data);
      })
      .catch((error: Error) => {
        console.error("Error fetching logo data:", error);
      });
  }, []);

  if (!logoData || !logoData.site_logo) {
    return null;
  }

  const logoId: number = parseInt(logoData.site_logo, 10); // Parse the string as a number

  return (
    <>
      <WpImage
        id={logoId}
        width={32}
        height={32}
        alt={logoData.name}
        className="rounded-full outline outline-2 outline-black/25 dark:outline-white/25 mr-2"
      />
      <span>{logoData.name}</span>
    </>
  );
};

export default Logo;
