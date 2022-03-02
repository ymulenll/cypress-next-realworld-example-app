import Link from "next/link";
import React from "react";

interface CustomLinkProps {
  href: string;
  as: string;
  className?: string;
  children: React.ReactNode;
  dataCy?: string;
}

const CustomLink = ({
  className,
  href,
  as,
  children,
  dataCy,
}: CustomLinkProps) => (
  <Link href={href} as={as} passHref>
    <a className={className || ""} data-cy={dataCy}>
      {children}
    </a>
  </Link>
);

export default CustomLink;
