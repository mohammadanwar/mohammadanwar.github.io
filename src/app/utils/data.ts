export const navigationLinks = [
  { label: 'Info', path: '#home' },
  { label: 'About', path: '#about' },
  { label: 'Projects', path: '#projects' },
  { label: 'Skills', path: '#skills' },
  { label: 'Contact', path: '#contact' }
]

export type projectType = {
  name: string,
  repo: string,
  isDeploy:boolean,
  url: string,
  image: string,
  description: string,
  tags: string[],
}

export const projectsData: projectType[] = [
  {
    name: 'ACS - National Breast Cancer Round Table',
    repo: 'https://nbcrt.org/',
    isDeploy: false,
    url: '',
    image:
      '/nbcrt.jpeg',
    description:
      'A National Breast Cancer Round Table Website',
    tags: ['WordPress', 'NodeJS', 'Bootstrap', 'JavaScript', 'CSS', 'HTML', 'WP Engine', 'Local WP']
  },  
  {
    name: 'ACS - National Cervical Cancer Round Table',
    repo: 'https://cervicalroundtable.org/',
    isDeploy: false,
    url: '',
    image:
      '/nrtcc.jpeg',
    description: 'A National Cervical Cancer Round Table Website',
    tags: ['WordPress', 'NodeJS', 'Bootstrap', 'JavaScript', 'CSS', 'HTML', 'WP Engine', 'Local WP']
  },
  {
    name: 'ACS - National HPV Round Table',
    repo: 'https://hpvroundtable.org/',
    isDeploy: false,
    url: '',
    image:
      '/nhvrt.jpeg',
    description: 'A National HPV Round Table Website',
    tags: ['WordPress', 'NodeJS', 'Bootstrap', 'JavaScript', 'CSS', 'HTML', 'WP Engine', 'Local WP']
  }
]

export const skillsData = [
  {
    img: 'linux/linux-original.svg',
    name: 'Linux'
  },
  {
    img: 'bash/bash-original.svg',
    name: 'Bash'
  },
  {
    img: 'nginx/nginx-original.svg',
    name: 'Nginx'
  },
  {
    img: 'docker/docker-original.svg',
    name: 'Docker'
  },
  {
    img: 'jenkins/jenkins-original.svg',
    name: 'Jenkins'
  },
  {
    img: 'kubernetes/kubernetes-original.svg',
    name: 'Kubernetes'
  },
  {
    img: 'amazonwebservices/amazonwebservices-original-wordmark.svg',
    name: 'AWS'
  },
  {
    img: 'azure/azure-original-wordmark.svg',
    name: 'Azure'
  },
  {
    img: 'mongodb/mongodb-original.svg',
    name: 'MongoDB'
  },
  {
    img: 'express/express-original.svg',
    name: 'ExpressJS'
  },
  {
    img: 'react/react-original.svg',
    name: 'React'
  },
  {
    img: 'nodejs/nodejs-original.svg',
    name: 'NodeJS'
  },
  {
    img: 'html5/html5-original.svg',
    name: 'HTML'
  },
  {
    img: 'css3/css3-original.svg',
    name: 'CSS'
  },
  {
    img: 'javascript/javascript-original.svg',
    name: 'JavaScript'
  },
  {
    img: 'typescript/typescript-original.svg',
    name: 'TypeScript'
  },
  {
    img: 'tailwindcss/tailwindcss-original.svg',
    name: 'Tailwindcss'
  },
  {
    img: 'bootstrap/bootstrap-original.svg',
    name: 'Bootstrap'
  },
  {
    img: 'angular/angular-original.svg',
    name: 'Angular'
  },
  {
    img: 'nextjs/nextjs-original.svg',
    name: 'NextJs'
  },
  {
    img: 'php/php-original.svg',
    name: 'PHP'
  },
  {
    img: 'mysql/mysql-original.svg',
    name: 'MySQL'
  },
  {
    img: 'mariadb/mariadb-original.svg',
    name: 'MariaDB'
  },
  {
    img: 'elasticsearch/elasticsearch-original.svg',
    name: 'Elasticsearch'
  },
  {
    img: 'git/git-original.svg',
    name: 'GIT'
  },
  {
    img: 'githubactions/githubactions-original.svg',
    name: 'GitHub Actions'
  },
  {
    img: 'postman/postman-original.svg',
    name: 'Postman'
  },
  {
    img: 'redis/redis-original.svg',
    name: 'Redis'
  }
]
