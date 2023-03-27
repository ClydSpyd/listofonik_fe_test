import ConnectLogo from "../../components/ui/ConnectLogo";
import styles from "./LandingLayout.module.scss";
import {
  Outlet,
  NavLink,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import { useRef } from "react";

type Props = {};

function LandingLayout({}: Props) {
  const [search] = useSearchParams();
  const navigate = useNavigate();
  const id = search.get("id");
  const logoRef = useRef<HTMLDivElement>(null);
  return (
    <div className={`${styles.landingContainer}`}>
      <div
        ref={logoRef}
        onClick={() => navigate("/")}
        className={`${styles.logoWrapper} ${id && styles.hide}`}
      >
        <ConnectLogo fill={"#6E2DFF"} />
        <ConnectLogo fill={"#DD0AFE"} className={`${styles.echo}`} />
        <h1>Listofonik</h1>
        <p>Join the party</p>
      </div>
      <Outlet />
      <div className={`${styles.flare1}`} />
      <div className={`${styles.flare2}`} />
    </div>
  );
}

export default LandingLayout;
