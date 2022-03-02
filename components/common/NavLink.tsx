import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps {
  href: string;
  as: string;
  children: React.ReactNode;
  dataCy?: string;
}

const NavLink = ({ href, as, children, dataCy }: NavLinkProps) => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <Link href={href} as={as} passHref>
      <a
        className={`nav-link ${
          encodeURIComponent(asPath) === encodeURIComponent(as) && `active`
        }`}
        data-cy={dataCy}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
