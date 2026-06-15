import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BookOpen,
  Globe2,
  HeartHandshake,
  Lightbulb,
  Mail,
  MapPin,
  Rocket,
  ShieldCheck,
  Stethoscope,
  Users,
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import './styles.css';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

function Header() {
  return (
    <header className="siteHeader">
      <a className="brand" href="#home" aria-label="The World Savers home">
        <img src="/world-savers-logo.svg" alt="The World Savers" className="brandLogo" />
      </a>

      <nav>
        <a href="#programs">Programs</a>
        <a href="#impact">Impact</a>
        <a href="#founder">Founder</a>
        <a href="#contact">Contact</a>
        <a className="navButton" href="https://openvol.theworldsavers.org">
          Openvol
        </a>
      </nav>
    </header>
  );
}

function Hero({ stats }) {
  return (
    <section id="home" className="hero">
      <div className="heroContent">
        <span className="eyebrow">
          <Globe2 size={16} />
          Student-led service, research, and innovation
        </span>

        <h1>Empowering students to create real-world impact.</h1>

        <p>
          The World Savers connects students with meaningful opportunities in healthcare,
          volunteering, research, leadership, and community service.
        </p>

        <div className="heroActions">
          <a className="primaryButton" href="#programs">
            Explore Programs <ArrowRight size={18} />
          </a>

          <a className="secondaryButton" href="#contact">
            Join Our Mission
          </a>
        </div>

        <div className="quickStats">
          <div>
            <strong>{stats.clinics}</strong>
            <span>Clinics Listed</span>
          </div>

          <div>
            <strong>{stats.opportunities}</strong>
            <span>Research & Shadowing</span>
          </div>

          <div>
            <strong>{stats.counties}</strong>
            <span>Counties Covered</span>
          </div>
        </div>
      </div>

      <div className="heroCard">
        <div className="orb orbOne"></div>
        <div className="orb orbTwo"></div>

        <div className="impactCard large">
          <HeartHandshake />
          <h3>Service</h3>
          <p>Helping students find ways to serve their communities.</p>
        </div>

        <div className="impactCard small">
          <BookOpen />
          <h3>Research</h3>
          <p>Connecting curiosity with real opportunities.</p>
        </div>

        <div className="impactCard small">
          <Rocket />
          <h3>Innovation</h3>
          <p>Building tools that solve practical problems.</p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about">
      <div>
        <span className="sectionLabel">About The World Savers</span>
        <h2>A student-led platform for service and leadership.</h2>
      </div>

      <p>
        The World Savers was created to help students turn ambition into action.
        Through technology, research, and community partnerships, the organization
        helps young people discover opportunities that build skills while serving others.
      </p>
    </section>
  );
}

function Programs() {
  const programs = [
    {
      icon: <Stethoscope />,
      title: 'Openvol',
      status: 'Live',
      description:
        'A healthcare volunteering, clinic, shadowing, and research directory for students across Greater Atlanta.',
      link: 'https://openvol.theworldsavers.org',
      cta: 'Visit Openvol',
    },
    {
      icon: <Lightbulb />,
      title: 'Research Hub',
      status: 'Coming Soon',
      description:
        'A future resource for student research opportunities, publication guidance, and summer programs.',
      link: '#contact',
      cta: 'Get Updates',
    },
    {
      icon: <Users />,
      title: 'Student Leadership',
      status: 'Coming Soon',
      description:
        'A future program recognizing community projects, nonprofit leadership, and student service initiatives.',
      link: '#contact',
      cta: 'Learn More',
    },
  ];

  return (
    <section id="programs" className="section">
      <div className="sectionTitle">
        <span className="sectionLabel">Programs</span>
        <h2>Flagship initiatives</h2>
        <p>
          The World Savers is built as a parent organization for student-led projects
          that improve access to service, research, and leadership opportunities.
        </p>
      </div>

      <div className="programGrid">
        {programs.map((program) => (
          <article className="programCard" key={program.title}>
            <div className="programIcon">{program.icon}</div>
            <div className="programStatus">{program.status}</div>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
            <a href={program.link}>
              {program.cta} <ArrowRight size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Impact({ stats }) {
  return (
    <section id="impact" className="impactSection">
      <div className="sectionTitle">
        <span className="sectionLabel">Impact</span>
        <h2>Built to grow with student needs.</h2>
      </div>

      <div className="impactGrid">
        <div>
          <strong>{stats.clinics}</strong>
          <span>Healthcare clinics and volunteer sites tracked through Openvol</span>
        </div>

        <div>
          <strong>{stats.opportunities}</strong>
          <span>Shadowing, research, and healthcare exploration opportunities</span>
        </div>

        <div>
          <strong>{stats.counties}</strong>
          <span>Counties represented across Greater Atlanta and Georgia</span>
        </div>

        <div>
          <strong>1</strong>
          <span>Live flagship student impact project and more programs planned</span>
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section id="founder" className="section founder">
      <div className="founderCard">
        <div className="founderInitials">RL</div>

        <div>
          <span className="sectionLabel">Founder</span>
          <h2>Rithvik Lal</h2>
          <p className="founderSub">
            Lassiter High School • Student Researcher • Future Physician • Community Advocate
          </p>

          <p>
            Rithvik created The World Savers to help students find real ways to serve,
            lead, research, and make a measurable difference. Openvol is the first
            flagship project under this broader student-led initiative.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submitForm(event) {
    event.preventDefault();

    if (!form.email) {
      setStatus('Please enter your email address.');
      return;
    }

    if (!supabase) {
      setStatus('Database connection is not configured yet.');
      return;
    }

    setIsSubmitting(true);
    setStatus('');

    const submission = {
      name: form.name.trim(),
      email: form.email.trim(),
      role: form.role,
      message: form.message.trim(),
      source_page: 'theworldsavers.org',
    };

    const { error: insertError } = await supabase
      .from('world_savers_contacts')
      .insert(submission);

    if (insertError) {
      console.error(insertError);
      setStatus('Unable to submit right now. Please try again later.');
      setIsSubmitting(false);
      return;
    }

    const { error: emailError } = await supabase.functions.invoke('resend-email', {
      body: submission,
    });

    if (emailError) {
      console.error(emailError);
      setStatus(
        'Your message was saved, but the email notification could not be sent. We will still review it.'
      );
      setIsSubmitting(false);
      setForm({
        name: '',
        email: '',
        role: '',
        message: '',
      });
      return;
    }

    setStatus('Thank you. Your message has been received and emailed to The World Savers team.');
    setIsSubmitting(false);
    setForm({
      name: '',
      email: '',
      role: '',
      message: '',
    });
  }

  return (
    <section id="contact" className="section contact">
      <div className="contactInfo">
        <span className="sectionLabel">Contact</span>
        <h2>Join the mission.</h2>
        <p>
          Interested in volunteering, partnering, supporting Openvol, or starting a
          student-led project? Send a message and help grow The World Savers.
        </p>

        <div className="contactLine">
          <Mail size={18} />
          <span>contact@theworldsavers.org</span>
        </div>

        <div className="contactLine">
          <MapPin size={18} />
          <span>Marietta, Georgia</span>
        </div>

        <div className="privacyLine">
          <ShieldCheck size={18} />
          <span>Messages are stored securely and emailed to The World Savers team.</span>
        </div>
      </div>

      <form className="contactForm" onSubmit={submitForm}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
        />

        <input
          type="email"
          placeholder="Email *"
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
        />

        <select
          value={form.role}
          onChange={(event) => setForm({ ...form, role: event.target.value })}
        >
          <option value="">I am a...</option>
          <option>Student</option>
          <option>Parent</option>
          <option>School Counselor</option>
          <option>Volunteer Organization</option>
          <option>Community Partner</option>
          <option>Other</option>
        </select>

        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
        />

        <button className="primaryButton" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'} <ArrowRight size={18} />
        </button>

        {status && <p className="formStatus">{status}</p>}
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <img src="/world-savers-logo.svg" alt="The World Savers" />
      <p>A student-led nonprofit initiative focused on service, research, and innovation.</p>
      <div>
        <a href="https://openvol.theworldsavers.org">Openvol</a>
        <a href="#programs">Programs</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
}

function App() {
  const [stats, setStats] = useState({
    clinics: '30+',
    opportunities: '20+',
    counties: '10+',
  });

  useEffect(() => {
    async function loadStats() {
      if (!supabase) return;

      const [{ data: clinics }, { data: opportunities }] = await Promise.all([
        supabase.from('clinics').select('id, county').eq('active_status', true),
        supabase.from('opportunities').select('id').eq('active_status', true),
      ]);

      const counties = new Set((clinics || []).map((item) => item.county).filter(Boolean));

      setStats({
        clinics: clinics?.length || '30+',
        opportunities: opportunities?.length || '20+',
        counties: counties.size || '10+',
      });
    }

    loadStats();
  }, []);

  return (
    <>
      <Header />
      <Hero stats={stats} />
      <About />
      <Programs />
      <Impact stats={stats} />
      <Founder />
      <ContactForm />
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
