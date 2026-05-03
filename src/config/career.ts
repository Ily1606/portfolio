
// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const careerList: Array<CareerItemType> = [
    {
      company: 'Paracel Inc.',
      title: 'Software Engineer',
      logo: 'bank',
      start: '2021',
      end: '2025'
    },
    {
      company: 'Kaopiz Holding.',
      title: 'Software Engineer',
      logo: 'bank',
      start: '2026',
      end: 'Present'
    },
  ]