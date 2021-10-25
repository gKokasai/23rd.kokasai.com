const Static = {
  twitter: {
    icon: "/img/twitter-icon.svg",
    url: "https://twitter.com/nitgc_kokasai",
  },
  instagram: {
    icon: "/img/instagram-icon.svg",
    url: "https://instagram.com/nitgc_kokasai",
  },
  youtube: {
    icon: "/img/youtube.png",
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
  googleMap: {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2708.458921419906!2d139.02010350336255!3d36.37627653385497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601e8cc32e0daf8d%3A0x207d7e6356e87ed8!2z576k6aas5bel5qWt6auY562J5bCC6ZaA5a2m5qCh!5e0!3m2!1sja!2sjp!4v1634367380548!5m2!1sja!2sjp",
  },
  greetingImage: {
    src: (name: string): string => `/img/greeting/${name}.webp`,
    alt: (name: string): string => `${name}の写真`,
  },
  cautionImage: {
    src: (name: string): string => `/img/caution/${name}.png`,
    alt: (name: string): string => `${name}のアイコン`,
  },
  stageImage: {
    src: (name: string): string => `/img/timetable/${name}.webp`,
    alt: (name: string): string => `${name}のアイコン`,
  },
  stageLink: {
    src: (day: "day1" | "day2", name: string): string =>
      `https://live.kokasai.com/${day}/${name}`,
  },
};

export default Static;
