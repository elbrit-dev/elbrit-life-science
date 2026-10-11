"use client";

import type { ComponentProps, MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* Links to these pages jump straight to their form. */
const FORMS: Record<string, string> = {
  "/contact": "contact-form",
  "/pharmacovigilance": "report-form",
};

type Props = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

/* A Link that never does nothing on its own page: it scrolls to the page's form, or reloads. */
export default function ActionLink({ href, onClick, ...rest }: Props) {
  const pathname = usePathname();
  const id = FORMS[href];

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (pathname !== href) return;
    e.preventDefault();
    const form = id ? document.getElementById(id) : null;
    if (form) form.scrollIntoView({ behavior: "smooth" });
    else window.location.reload();
  }

  return <Link href={id ? `${href}#${id}` : href} onClick={handleClick} {...rest} />;
}
