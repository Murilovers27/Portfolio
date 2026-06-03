import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About'
import Projects from '@/components/Projects/Projects';
import Skills from '@/components/Skills/Skills'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import Experience from '@/components/Experience/Experience'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      
    </main>
  );
}