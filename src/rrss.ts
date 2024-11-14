type RedSocial = {
  name: string;
  href: string;
  icon: string;
};

export type RRSS = RedSocial[];

export const rrss: RRSS = [
  {
    name: "Twitter",
    href: "https://twitter.com/astrodotbuild",
    icon: "social/twitter",
  },
  {
    name: "GitHub",
    href: "https://github.com/withastro/astro",
    icon: "social/github",
  },
];
