import ConnectLogo from "../../components/ui/ConnectLogo";
import styles from "./LandingLayout.module.scss";
import {
  Outlet,
  NavLink,
  useSearchParams
} from "react-router-dom";
import { useRef } from "react";

type Props = {};

function LandingLayout({}: Props) {
  const [search] = useSearchParams();
  const id = search.get("id");
  const logoRef = useRef<HTMLAnchorElement>(null);
  return (
    <div className={`${styles.landingContainer}`}>
      <NavLink
        ref={logoRef}
        to={"/"}
        className={`${styles.logoWrapper} ${id && styles.hide}`}
      >
        <ConnectLogo fill={"#6E2DFF"} />
        <ConnectLogo fill={"#DD0AFE"} className={`${styles.echo}`} />
        <h1>Listofonik</h1>
        <p>Join the party</p>
      </NavLink>
      <Outlet />
      <div className={`${styles.flare1}`} />
      <div className={`${styles.flare2}`} />
    </div>
  );
}

export default LandingLayout;
