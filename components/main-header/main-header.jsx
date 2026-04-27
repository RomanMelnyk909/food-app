import Link from "next/link";
import NavLink from "@/components/main-header/nav-link/nav-link";
import Image from "next/image";

import MainHeaderBackground from "@/components/main-header/main-header-background/main-header-background";

import logoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImg} alt="Food app" priority />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies comunity</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
