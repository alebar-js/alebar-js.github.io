import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header
      style={{ borderBottom: "1px solid #30363d" }}
      className="bg-[#010409] text-white"
    >
      <nav className={styles.navbar}>
        <div className={styles.brand}>
          <Link className={styles.item} href="/">
            <FaGithub className={styles.logo} />
          </Link>
        </div>
        <div className={styles.menu}>
          <div className={styles.end}>
            <Link className={styles.item} href="/">
              Why GitHub?
            </Link>
            <Link className={styles.item} href="/">
              Team
            </Link>
            <Link className={styles.item} href="/">
              Enterprise
            </Link>
            <Link className={styles.item} href="/">
              Explore
            </Link>
            <Link className={styles.item} href="/">
              Marketplace
            </Link>
            <Link className={styles.item} href="/">
              Pricing
            </Link>
            <Link className={styles.item} href="/">
              Blog
            </Link>
            <Link className={styles.item} href="/">
              Sign in
            </Link>
            <Link className={styles.item} href="/">
              Sign up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
