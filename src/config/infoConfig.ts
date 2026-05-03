export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'


// personal info
export const name = 'Ily1606'
export const headline = 'Software engineer, Full-Stack web developer.'
export const introduction = 'I’m Tuong Nguyen, a software engineer based in Da Nang, Viet Nam. I like coding, and building interesting things'
export const email = 'no1.tuongnguyen@gmail.com'
export const githubUsername = 'Ily1606'

// about page
export const aboutMeHeadline = "I'm Tuong Nguyen, a software engineer based in Da Nang, Viet Nam."
export const aboutParagraphs = [
  "I love coding. I learned programming when I in college. I wrote my first website in PHP when I was 16.",
  "I have a lot of hobbies, such as travelling, photography, watching movies, music and so on.",
  "I'm working as a software develop engineer in Da Nang, Viet Nam now. And I'm building a lot of side projects in my spare time."
]


// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro = "I've written something about AI, programming and life."


// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string,
  external?: boolean
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Facebook',
    icon: 'facebook',
    href: 'https://www.facebook.com/Ily1606',
    external: true
  },
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/Ily1606',
    external: true
  },
  {
    name: 'Discord',
    icon: 'discord',
    href: 'https://discord.gg/Jrhx4qGx',
    external: true
  },
]

// https://simpleicons.org/
export const techIcons = [
  "typescript",
  "javascript",
  "laravel",
  "cloudflare",
  "vuedotjs",
  'tailwindcss',
  'electron',
  "mariadb",
  "mysql",
  "react",
  "nodedotjs",
  "nextdotjs",
  'wordpress',
  "prisma",
  "postgresql",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
];



