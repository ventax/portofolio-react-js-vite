/**
 * @copyright 2025 xeynacode
 * @license Apache-2.0
 */

// components
import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/porto-irmas.png',
      title: 'Desain Website IRMAS',
      tags: ['Desain', 'Landing Page', 'Development','Prototypes'],
      projectLink: 'https://www.figma.com/design/K7l8WKdtSrgHMsb9GnSv28/irmas?node-id=83-10&p=f&t=572SZ2h04FvOCqij-0'
    },
    {
      imgSrc: '/images/porto-dashboard.png',
      title: 'Dashboard Ecomerce',
      tags: ['Desain', 'Dashboard','Ecomerce'],
      projectLink: 'https://www.figma.com/design/58aE3uRJZLfV6z2puxufdy/Untitled?node-id=1-3&p=f&t=LbQw51HoycWx1adk-0'
    },
    {
      imgSrc: '/images/porto-wisata.png',
      title: 'Destination Website Desain',
      tags: ['Web Desain', 'Landing Page'],
      projectLink: 'https://www.figma.com/design/MWSyn04V3F2sk9dWECAts5/Destinasi-Wisata-dijepara?node-id=2-2&t=q9jylZzdRfPXb5Q1-0'
    },
    {
      imgSrc: '/images/porto-freelance.png',
      title: 'Freelance Web Desain',
      tags: ['Web-design', 'Development','Landing Page'],
      projectLink: 'https://www.figma.com/design/Fm6FEa4yR1E8aDulhNR1TW/Freeelance-Web?node-id=0-1&p=f&t=h0Q0XCeOZazSaLnt-0'
    },
    {
      imgSrc: '/images/porto-codingmtk.png',
      title: 'Website Penghitung Luas jajar Genjang',
      tags: ['Education', 'Development','Website'],
      projectLink: 'https://ventax.github.io/PENGHITUNG-JAJAR-GENJANG/'
    },
    {
      imgSrc: '/images/porto-airplane.png',
      title: 'Traveling Apps',
      tags: ['Mobile App', 'Development','Web Desain'],
      projectLink: 'https://www.figma.com/design/KlHJKc8YLbqIesJRVDpD90/Adventrip?node-id=0-1&p=f&t=hfYMccxksA1CxJij-0'
    },
    {
      imgSrc: '/images/porto-gameabc.png',
      title: 'Website Game Angka',
      tags: ['Game', 'Development','Education'],
      projectLink: 'https://ventax.github.io/GAME-ABC/'
    },
    {
      imgSrc: '/images/crudsimple.png',
      title: 'CRUD Simple',
      tags: ['Game', 'Development','Laravel'],
      projectLink: 'https://github.com/ventax/LARAVEL-CRUD'
    },
    {
      imgSrc: '/images/portofolio-web.png',
      title: 'Portofolio Website',
      tags: ['Website', 'Development','React','Tailwindcss','Vite'],
      projectLink: 'https://github.com/ventax/portofolio-react-js-vite'
    },
  ];

const Work = () => {
  return (
    <section 
    className="section"
    id="work"
    >
        <div className="container">

            <h2 className="headline-2 mb-8 reveal-up">
                My portfolio highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 
            grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, tags, projectLink}, key) => (
                    <ProjectCard
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    classes="reveal-up"
                    />
                ))}
            </div>

        </div>
    </section>
  )
}

export default Work