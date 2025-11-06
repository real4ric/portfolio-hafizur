
import Head from 'next/head'

export default function Home() {
  const projects = [
    {
      title: 'Pickaboo',
      desc: 'E-commerce website',
      tech: ['React', 'JavaScript', 'TailwindCSS'],
      github: '#',
      live: 'https://www.pickaboo.com/'
    },
    {
      title: 'BD Budget Beauty',
      desc: 'Beauty care shop',
      tech: ['WordPress', 'PHP', 'MySQL'],
      github: '#',
      live: 'https://bdbudgetbeauty.com/'
    },
    {
      title: 'IT Link',
      desc: 'Broadband Internet Provider',
      tech: ['PHP', 'HTML', 'CSS', 'MySQL'],
      github: '#',
      live: 'https://www.itlinkbd.net/'
    },
    {
      title: 'Obokash Tours',
      desc: 'Tours and Travel Management',
      tech: ['WordPress', 'PHP', 'MySQL'],
      github: '#',
      live: 'https://www.obokash.com/'
    }
  ];
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Head><title>Hafizur Rahman — Portfolio</title></Head>
      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold">Hafizur Rahman</h1>
        <p className="text-slate-600 mt-2">Développeur Web Full-Stack</p>

        <section id="projets" className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p,i)=>(
              <div key={i} className="bg-white p-5 rounded-lg shadow">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{p.desc}</p>
                <p className="text-xs text-slate-500 mt-2">Tech: {p.tech.join(', ')}</p>
                <a href={p.live} className="inline-block mt-3 text-blue-600 underline">Visiter le site</a>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>Email: <a href="mailto:hafizur.rick@gmail.com" className="underline">hafizur.rick@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/real4ric" className="underline">github.com/real4ric</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/hafizur-rick" className="underline">linkedin.com/in/hafizur-rick</a></p>
        </section>
      </main>
    </div>
  )
}
