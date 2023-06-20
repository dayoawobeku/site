import React, { useEffect, useState } from "react";
import WpImage from "./wpimage";
import { fetchLogo } from "../api";

interface LogoData {
  site_logo: number;
  name: string;
}

const Logo = () => {
  const [logoData, setLogoData] = useState<LogoData | null>(null);

  useEffect(() => {
    fetchLogo()
      .then((data) => {
        setLogoData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching logo data:", error);
      });
  }, []);

  if (!logoData) {
    return null;
  }

  return (
    <>
      <WpImage
        id={logoData.site_logo}
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
