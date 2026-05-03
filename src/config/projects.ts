// projects
export const projectHeadLine = "What I've done and what I'm doing."
export const projectIntro = "I've worked on a variety of projects, from simple websites to complex web applications. And many of them are open-source. Here are a few of my favorites."

export type ProjectItemType = {
    name: string
    description: string
    link?: { href: string, label: string }
    date?: string
    logo?: string,
    category?: string[],
    tags?: string[],
    image?: string,
    techStack?: string[],
    gitStars?: number,
    gitForks?: number
  }
  
  // projects 
  export const projects: Array<ProjectItemType> = [
    {
      name: 'PerGPT Manager',
      description:
        'Is a website that allows company to manage perspectives, including uploading, editing, and deleting perspectives.',
      category: ['Website'],
      techStack: [],
      tags: ['VueJs', 'Laravel', 'Ant Design', 'AWS', 'Cloudflare'],
    },
    {
      name: 'Sithuochapu',
      description:
        'A pharmacy e-commerce website that allows customers to order medicines, apply discount codes, and calculate shipping fees.',
      category: ['Website'],
      techStack: [],
      tags: ['Nodejs', 'TailwindCSS', 'Reactjs', 'Ant Design', 'Self-hosted', 'Cloudflare']
    },
    {
      name: 'File Explorer',
      description:
        'An internal enterprise file management website with role-based access control, sharing, and high security.',
      category: ['Website'],
      techStack: [],
      tags: ['VueJs', 'Laravel', 'Ant Design', 'AWS', 'Cloudflare']
    },
    {
      name: 'Unimono',
      description:
        'A website that supports international payment processing through payment gateways including Stripe, PayPal, Clover, and Paybybankful.',
      category: ['Website'],
      techStack: [],
      tags: ['PHP', 'Cloudflare', 'Hosting']
    },
    {
      name: 'ROK BOT',
      description:
        'A Rise of Kingdoms game automation tool that lets players schedule runs on Discord.',
      category: ['Automation'],
      techStack: [],
      tags: ['Python', 'Discord Bot', 'Game Automation']
    },
  ]
  
  export const githubProjects: Array<ProjectItemType> = [
    {
      name: 'Laratype Framework',
      link: {
        href: 'github.com/Laratypes/laratype',
        label: 'Laratype Framework'
      },
      description: 'The Laravel framework with built-in support for TypeScript, designed to help developers build modern web applications quickly and efficiently.',
      gitStars: 3,
    },
    {
      name: 'Rok-botgiverTitle',
      description:
        'A Rise of Kingdoms game automation tool that lets players run some tasks automatically.',
      link: {
        href: 'github.com/Ily1606/Rok-BotgiverTitle',
        label: 'Rok-BotgiverTitle'
      },
      gitStars: 19,
      gitForks: 7,
    },
  ]
  