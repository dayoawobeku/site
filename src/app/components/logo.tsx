import { fetchLogo } from "../api";
import WpImage from "./wpimage";

const Logo = async () => {
  const logoData = await fetchLogo();

  return (
    <>
      <WpImage
        id={logoData.data.site_logo}
        width={32}
        height={32}
        alt={logoData.data.name}
        className="rounded-full outline outline-2 outline-black/25 dark:outline-white/25 mr-2"
      />
      <span>{logoData.data.name}</span>
    </>
  );
};

export default Logo;
