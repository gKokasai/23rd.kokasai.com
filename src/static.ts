const Static = {
  twitter: {
    icon: "/img/twitter-icon.svg",
    url: "https://twitter.com/nitgc_kokasai",
  },
  instagram: {
    icon: "/img/instagram-icon.svg",
    url: "https://instagram.com/nitgc_kokasai",
  },
  hamburgerMenu: {
    icon: "/img/hamburger-menu.svg",
  },
  kokasaiLogo: {
    icon: "/img/kokasai-logo.svg",
  },
  kokasaiIllust: {
    icon: "/img/kokasai-illust.png",
  },
  projectThumbnail: {
    path: (groupName: string): string => `/img/thumbnail/${groupName}.webp`,
    alt: (groupName: string): string => `${groupName}のサムネイル画像`,
  },
};

export default Static;
