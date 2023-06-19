import React, { useEffect, useState } from "react";
import WpImage from "./wpimage";
import { fetchLogoData } from "../api";
import { data } from "autoprefixer";

const Logo: React.FC = () => {
  const [logoData, setLogoData] = useState(null);

  useEffect(() => {
    fetchLogoData()
      .then((data: any) => {
        setLogoData(data);
      })
      .catch((error) => {
        console.error("Error fetching logo data:", error);
      });
  }, []);

  if (!logoData || !logoData.site_logo) {
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
      <span>David M. Coleman</span>
    </>
  );
};

export default Logo;
