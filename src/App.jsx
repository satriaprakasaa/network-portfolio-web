import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Network, 
  Wifi, 
  Server, 
  Download, 
  ExternalLink, 
  Mail, 
  Copy, 
  Check, 
  ChevronRight, 
  GraduationCap, 
  Award, 
  Briefcase, 
  Code, 
  Menu, 
  X,
  Activity,
  Radio,
  FileText,
  Maximize2
} from 'lucide-react';

// Custom SVG Icons for LinkedIn & GitHub
const LinkedInIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GitHubIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState([
    { text: "systemctl start network-manager.service", type: "cmd" },
    { text: "CONNECTED: satriaprakasa.my.id [192.168.1.100]", type: "success" },
    { text: "STATUS: Open for Internships (Jakarta & Bandung)", type: "info" }
  ]);
  const [commandInput, setCommandInput] = useState('');

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (!commandInput.trim()) return;

    const cmd = commandInput.trim().toLowerCase();
    const newLogs = [...terminalLogs, { text: commandInput, type: "cmd" }];

    if (cmd === 'help') {
      newLogs.push({ text: "Available commands: help, status, skills, clear, contact, sudo", type: "info" });
    } else if (cmd === 'status') {
      newLogs.push({ text: "IPK: 3.10/4.00 | Semester: 5 | UPI Purwakarta | Ready for Internships", type: "success" });
    } else if (cmd === 'skills') {
      newLogs.push({ text: "Core: SDN (Ryu), Inter-VLAN, HSRP, ESP32 MQTT, Linux, GCP", type: "info" });
    } else if (cmd === 'contact') {
      newLogs.push({ text: "Email: satriaprakasaa19@gmail.com", type: "info" });
    } else if (cmd === 'clear') {
      setTerminalLogs([]);
      setCommandInput('');
      return;
    } else if (cmd === 'sudo' || cmd.startsWith('sudo')) {
      newLogs.push({ text: "Access granted! Satria Prakasa is ready to elevate your team.", type: "success" });
    } else {
      newLogs.push({ text: `Command not recognized: '${cmd}'. Type 'help' for commands.`, type: "error" });
    }

    setTerminalLogs(newLogs);
    setCommandInput('');
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('satriaprakasaa19@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0f18] text-slate-200 font-sans selection:bg-cyan-500 selection:text-black relative overflow-x-hidden">
      
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#101929_1px,transparent_1px),linear-gradient(to_bottom,#101929_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none z-0" />

      {/* Radial Gradient Ambient Lights */}
      <div className="fixed top-0 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed top-1/3 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f18]/80 backdrop-blur-md border-b border-cyan-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollTo('home')}>
            <div className="w-8 h-8 rounded bg-cyan-500/10 border border-cyan-400/50 flex items-center justify-center text-cyan-400 font-mono text-sm font-bold shadow-[0_0_10px_rgba(6,182,212,0.3)]">
              SP
            </div>
            <span className="font-mono text-sm font-semibold tracking-wider text-slate-100">
              satriaprakasa<span className="text-cyan-400">.my.id</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6 font-mono text-xs">
            {[
              { id: 'home', label: '// 01. Beranda' },
              { id: 'about', label: '// 02. Tentang' },
              { id: 'skills', label: '// 03. Keahlian' },
              { id: 'projects', label: '// 04. Proyek' },
              { id: 'experience', label: '// 05. Sertifikasi' },
              { id: 'contact', label: '// 06. Kontak' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`transition-all duration-200 hover:text-cyan-400 ${
                  activeTab === item.id 
                    ? 'text-cyan-400 font-bold border-b-2 border-cyan-400 pb-1' 
                    : 'text-slate-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-2" />
            <span>Open for Internships</span>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-cyan-400 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0f18]/95 border-b border-cyan-900/50 px-4 pt-2 pb-6 space-y-3 font-mono text-sm">
            {[
              { id: 'home', label: '01. Beranda' },
              { id: 'about', label: '02. Tentang Saya' },
              { id: 'skills', label: '03. Keahlian Teknis' },
              { id: 'projects', label: '04. Proyek Akademik' },
              { id: 'experience', label: '05. Sertifikasi & Organisasi' },
              { id: 'contact', label: '06. Kontak' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left py-2 px-3 rounded hover:bg-cyan-950/40 text-slate-300 hover:text-cyan-400"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* MAIN CONTAINER */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-24 sm:space-y-32">
        
        {/* 1. HERO SECTION */}
        <section id="home" className="min-h-[85vh] flex flex-col lg:flex-row items-center justify-between gap-12 pt-8">
          
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
              <Network size={14} className="animate-pulse text-cyan-400" />
              <span>Network Engineer & Telecommunication System Student</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Satria Prakasa <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                Simbolon
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold text-cyan-200/90 font-mono flex items-center gap-2">
              <span className="text-emerald-400">&gt;</span> Mahasiswa Sistem Telekomunikasi & Calon Network Engineer
            </h2>

            <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              Memiliki fokus kuat pada <span className="text-cyan-300 font-medium">Network Engineering</span>, <span className="text-cyan-300 font-medium">Software-Defined Networking (SDN)</span>, <span className="text-cyan-300 font-medium">Network Security</span>, dan <span className="text-cyan-300 font-medium">Internet of Things (IoT)</span>.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold font-mono text-sm flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] cursor-pointer"
              >
                <span>Lihat Proyek Saya</span>
                <ChevronRight size={18} />
              </button>

              <a
                href="/CV-Satria Prakasa Simbolon.pdf"
                download="CV_Satria_Prakasa_Simbolon.pdf"
                className="px-6 py-3.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 font-mono text-sm flex items-center gap-2 transition-all cursor-pointer"
              >
                <Download size={18} />
                <span>Unduh CV</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 max-w-lg">
              <div>
                <p className="text-xs text-slate-500 font-mono">IPK</p>
                <p className="text-xl font-bold text-white font-mono">3.10 <span className="text-xs text-slate-400 font-normal">/ 4.00</span></p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-mono">SEMESTER</p>
                <p className="text-xl font-bold text-white font-mono">5 <span className="text-xs text-slate-400 font-normal">(UPI)</span></p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-mono">STATUS</p>
                <p className="text-xl font-bold text-emerald-400 font-mono">Ready</p>
              </div>
            </div>
          </div>

          {/* Interactive Terminal Widget */}
          <div className="w-full lg:w-[480px] bg-[#070b12] border border-cyan-500/30 rounded-xl overflow-hidden shadow-2xl font-mono text-xs">
            <div className="bg-[#0f172a] px-4 py-2.5 border-b border-cyan-900/50 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="text-slate-400 text-xs flex items-center gap-1.5">
                <Terminal size={14} className="text-cyan-400" />
                <span>satria@net-sec-node:~</span>
              </div>
              <Maximize2 size={12} className="text-slate-500" />
            </div>

            <div className="p-4 space-y-3 min-h-[260px] max-h-[300px] overflow-y-auto bg-black/40">
              <div className="text-slate-500 font-mono text-[11px]">
                [System Initialized - Satria Prakasa Portfolio Node v2026.1]
              </div>
              <div className="text-cyan-400/90 font-mono text-[11px]">
                Type <span className="text-emerald-400">'help'</span> for list of available interactive terminal commands.
              </div>

              {terminalLogs.map((log, index) => (
                <div key={index} className="space-y-0.5">
                  {log.type === 'cmd' ? (
                    <div className="flex items-center space-x-2 text-slate-300">
                      <span className="text-emerald-400">satria@router:~$</span>
                      <span>{log.text}</span>
                    </div>
                  ) : (
                    <div className={`pl-4 ${
                      log.type === 'success' ? 'text-emerald-400' :
                      log.type === 'error' ? 'text-red-400' : 'text-cyan-300'
                    }`}>
                      {log.text}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleCommandSubmit} className="border-t border-slate-800 bg-[#0b101d] px-4 py-2.5 flex items-center space-x-2">
              <span className="text-emerald-400 font-bold">&gt;</span>
              <input
                type="text"
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                placeholder="try 'status', 'skills', 'contact'..."
                className="bg-transparent flex-1 focus:outline-none text-slate-200 font-mono text-xs placeholder:text-slate-600"
              />
              <button type="submit" className="text-cyan-400 hover:text-cyan-300 font-semibold text-xs">
                EXEC
              </button>
            </form>
          </div>

        </section>

        {/* 2. TENTANG SAYA (ABOUT ME) */}
        <section id="about" className="scroll-mt-24 space-y-8">
          
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-cyan-950/60 rounded-lg border border-cyan-500/30 text-cyan-400">
              <GraduationCap size={22} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-mono">
              // 02. Tentang Saya
            </h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-500/30 to-transparent ml-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <div className="lg:col-span-8 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none" />
              
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                Saya adalah mahasiswa <span className="text-white font-semibold">Sistem Telekomunikasi semester 5</span> di <span className="text-white font-semibold">Universitas Pendidikan Indonesia</span> dengan fokus pada <span className="text-cyan-300 font-medium">Network Engineering</span>, <span className="text-cyan-300 font-medium">Software-Defined Networking (SDN)</span>, dan <span className="text-cyan-300 font-medium">Network Security</span>.
              </p>
              
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                Berpengalaman melakukan riset evaluasi performa SDN berbasis Ryu Controller yang diajukan ke jurnal Sinta 3, merancang arsitektur jaringan enterprise Cisco (Inter-VLAN & HSRP), serta membangun sistem pemantauan IoT real-time berbasis MQTT dan Node-RED.
              </p>

              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                Selain keterampilan teknis, saya memiliki pengalaman kepemimpinan dalam mengelola tim operasional dan kegiatan organisasi. Saat ini saya aktif mendalami komputasi awan dan keamanan jaringan, serta terbuka untuk peluang magang di bidang <span className="text-cyan-400 font-medium underline underline-offset-4 decoration-cyan-500/40">Network Engineer</span>, <span className="text-cyan-400 font-medium underline underline-offset-4 decoration-cyan-500/40">Network Security</span>, maupun <span className="text-cyan-400 font-medium underline underline-offset-4 decoration-cyan-500/40">IT Infrastructure</span> untuk wilayah <span className="text-emerald-400 font-semibold">Jakarta dan Bandung</span>.
              </p>

              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-cyan-900/40 text-center text-cyan-300">
                  Network Architecture
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-cyan-900/40 text-center text-cyan-300">
                  SDN & Ryu Controller
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-cyan-900/40 text-center text-cyan-300">
                  Network Security
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-cyan-900/40 text-center text-cyan-300">
                  Cloud IoT Systems
                </div>
              </div>

            </div>

            <div className="lg:col-span-4 bg-gradient-to-b from-cyan-950/30 to-slate-900/60 border border-cyan-500/30 rounded-2xl p-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs font-mono text-cyan-400 mb-2">// INSTITUSI PENDIDIKAN</div>
                <h3 className="text-xl font-bold text-white">Universitas Pendidikan Indonesia</h3>
                <p className="text-slate-400 text-sm">UPI Kampus Purwakarta</p>
                <p className="text-xs text-cyan-300/80 font-mono mt-1">S1 Sistem Telekomunikasi</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-cyan-900/40 font-mono">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">IPK Kumulatif:</span>
                  <span className="text-emerald-400 font-bold bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-500/30">3.10 / 4.00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Status Akademik:</span>
                  <span className="text-cyan-300">Aktif (Semester 5)</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Lokasi Magang:</span>
                  <span className="text-emerald-400 font-bold">Jakarta / Bandung</span>
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* 3. KEAHLIAN TEKNIS */}
        <section id="skills" className="scroll-mt-24 space-y-8">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-cyan-950/60 rounded-lg border border-cyan-500/30 text-cyan-400">
              <Cpu size={22} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-mono">
              // 03. Keahlian Teknis
            </h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-500/30 to-transparent ml-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 rounded-xl p-6 space-y-4 group">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center space-x-2 text-cyan-400 font-mono text-sm font-semibold">
                  <ShieldCheck size={18} />
                  <span>Networking & Security</span>
                </div>
                <span className="text-xs font-mono text-slate-500">01</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "SDN (OpenFlow v1.3)", "Ryu Controller", "OpenSSL", "GnuPG", 
                  "SSH Hardening", "Inter-VLAN Routing", "HSRP", "ACL", 
                  "Wireshark", "Risk Assessment"
                ].map((skill, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-md bg-slate-950/80 border border-cyan-900/40 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/60 text-xs font-mono transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 rounded-xl p-6 space-y-4 group">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center space-x-2 text-emerald-400 font-mono text-sm font-semibold">
                  <Radio size={18} />
                  <span>IoT & Cloud</span>
                </div>
                <span className="text-xs font-mono text-slate-500">02</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Protokol MQTT", "Node-RED", "ESP32 / C++", 
                  "Google Cloud Platform (GCP)", "JSON Telemetry", "Sensors Integration"
                ].map((skill, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-md bg-slate-950/80 border border-emerald-900/40 text-slate-300 hover:text-emerald-300 hover:border-emerald-500/60 text-xs font-mono transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 rounded-xl p-6 space-y-4 group">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center space-x-2 text-blue-400 font-mono text-sm font-semibold">
                  <Server size={18} />
                  <span>OS & Tools</span>
                </div>
                <span className="text-xs font-mono text-slate-500">03</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Linux (Ubuntu)", "Kali Linux", "VirtualBox", 
                  "Cisco Packet Tracer", "Mininet", "Bash Scripting", "Git"
                ].map((skill, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-md bg-slate-950/80 border border-blue-900/40 text-slate-300 hover:text-blue-300 hover:border-blue-500/60 text-xs font-mono transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. PROYEK AKADEMIK & TEKNIS (BAGIAN PERBARUAN 6 PROYEK) */}
        <section id="projects" className="scroll-mt-24 space-y-8">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-cyan-950/60 rounded-lg border border-cyan-500/30 text-cyan-400">
              <Code size={22} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-mono">
              // 04. Proyek Akademik & Teknis
            </h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-500/30 to-transparent ml-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* PROYEK 1: Personal Portfolio */}
            <div className="bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 flex flex-col justify-between space-y-4 group transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-[11px]">
                    PERSONAL PROJECT
                  </span>
                  <span className="text-slate-500 font-mono text-xs">Production Ready</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Personal Portfolio Website & Custom Domain Integration
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Proyek ini bertujuan untuk membangun platform portofolio web yang responsif, cepat, dan aman. Selain berfokus pada pengalaman pengguna (UI/UX), proyek ini menjadi bukti praktik langsung dalam manajemen domain, konfigurasi record DNS Anycast, dan penerbitan sertifikat SSL/TLS di Edge Network.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="flex flex-wrap gap-2 font-mono text-xs text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-slate-950">React.js</span>
                  <span className="px-2 py-0.5 rounded bg-slate-950">Tailwind CSS</span>
                  <span className="px-2 py-0.5 rounded bg-slate-950">DNS Anycast</span>
                  <span className="px-2 py-0.5 rounded bg-slate-950">Vercel</span>
                </div>
              </div>
            </div>

            {/* PROYEK 2: Enterprise Network Simulation */}
            <div className="bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 flex flex-col justify-between space-y-4 group transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-[11px]">
                    PERSONAL PROJECT
                  </span>
                  <span className="text-slate-500 font-mono text-xs">High Availability</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Enterprise Network Simulation & HSRP Failover
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Merancang topologi jaringan SME pada <span className="text-slate-200">Cisco Packet Tracer</span> mengimplementasikan Inter-VLAN Routing serta redundant HSRP untuk failover otomatis di bawah 2 detik.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="flex flex-wrap gap-2 font-mono text-xs text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-slate-950">Cisco Packet Tracer</span>
                  <span className="px-2 py-0.5 rounded bg-slate-950">HSRP</span>
                  <span className="px-2 py-0.5 rounded bg-slate-950">Inter-VLAN</span>
                </div>
              </div>
            </div>

            {/* PROYEK 3: Real-Time River Water Level IoT */}
            <div className="bg-slate-900/40 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 flex flex-col justify-between space-y-4 group transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 font-mono text-[11px]">
                    PERSONAL PROJECT
                  </span>
                  <span className="text-slate-500 font-mono text-xs">Real-Time Telemetry</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Real-Time River Water Level IoT Monitoring System
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Sistem pemantauan tinggi muka air sungai (Flood Early Warning System) berbasis Internet of Things (IoT). Sistem ini mengukur jarak permukaan air menggunakan sensor ultrasonik HC-SR04 dan mikrokontroler ESP32 pada titik IoT Edge, melakukan kalkulasi ketinggian air riil secara real-time, lalu mempublikasikan payload JSON via broker MQTT untuk diproses dan divisualisasikan pada Node-RED Dashboard (Cyber Aqua Monitoring UI).
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="flex flex-wrap gap-2 font-mono text-xs text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-slate-950">ESP32</span>
                  <span className="px-2 py-0.5 rounded bg-slate-950">HC-SR04</span>
                  <span className="px-2 py-0.5 rounded bg-slate-950">MQTT</span>
                  <span className="px-2 py-0.5 rounded bg-slate-950">Node-RED</span>
                </div>
              </div>
            </div>

            {/* PROYEK 4: SDN Research */}
            <div className="bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 flex flex-col justify-between space-y-4 group transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-[11px]">
                    ACADEMIC PROJECT
                  </span>
                  <span className="text-slate-500 font-mono text-xs">Sinta 3 Draft</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  SDN vs. Conventional Network Performance
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Evaluasi performa jaringan membandingkan latency dan throughput menggunakan <span className="text-slate-200">Ryu Controller & Mininet</span>, serta menyusun naskah jurnal ilmiah terakreditasi Sinta 3.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="flex flex-wrap gap-2 font-mono text-xs text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-slate-950">Ryu Controller</span>
                  <span className="px-2 py-0.5 rounded bg-slate-950">Mininet</span>
                  <span className="px-2 py-0.5 rounded bg-slate-950">OpenFlow v1.3</span>
                </div>
              </div>
            </div>

            {/* PROYEK 5: Campus Network Security Investigation */}
            <div className="bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 flex flex-col justify-between space-y-4 group transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-[11px]">
                    ACADEMIC PROJECT
                  </span>
                  <span className="text-slate-500 font-mono text-xs">Risk Assessment</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Campus Network Security Investigation & Risk Assessment
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Proyek ini merupakan investigasi audit keamanan infrastruktur jaringan kampus (simulated file sharing service files.kelb03.tl455.test). Berperan sebagai Lead Technical Reviewer & Risk Analyst, tugas utama meliputi validasi silang independen (independent cross-validation) terhadap tiga domain keamanan: Otentikasi/SSH, Kriptografi OpenPGP, serta PKI/TLS Certificate & DNSSEC.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="flex flex-wrap gap-2 font-mono text-xs text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-slate-950">SSH Hardening</span>
                  <span className="px-2 py-0.5 rounded bg-slate-950">OpenPGP</span>
                  <span className="px-2 py-0.5 rounded bg-slate-950">TLS / DNSSEC</span>
                </div>
              </div>
            </div>

            {/* PROYEK 6: Real-Time IoT Environmental Monitoring */}
            <div className="bg-slate-900/40 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 flex flex-col justify-between space-y-4 group transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 font-mono text-[11px]">
                    ACADEMIC PROJECT
                  </span>
                  <span className="text-slate-500 font-mono text-xs">IoT Telemetry</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Real-Time IoT Environmental Monitoring System (ESP32 + MQTT + Node-RED)
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Proyek ini mengimplementasikan sistem pemantauan suhu dan kelembapan lingkungan secara real-time berbasis Internet of Things (IoT). Simulasi mikrokontroler ESP32 membaca data telemetri dari sensor DHT22, mengirimkan payload berformat JSON ke broker MQTT publik HiveMQ, dan menampilkan visualisasi data pada Dashboard Node-RED berdesain Dark Theme / Modern UI.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="flex flex-wrap gap-2 font-mono text-xs text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-slate-950">ESP32</span>
                  <span className="px-2 py-0.5 rounded bg-slate-950">DHT22</span>
                  <span className="px-2 py-0.5 rounded bg-slate-950">MQTT</span>
                  <span className="px-2 py-0.5 rounded bg-slate-950">Node-RED</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 5. SERTIFIKASI & PENGALAMAN ORGANISASI */}
        <section id="experience" className="scroll-mt-24 space-y-8">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-cyan-950/60 rounded-lg border border-cyan-500/30 text-cyan-400">
              <Award size={22} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-mono">
              // 05. Sertifikasi & Organisasi
            </h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-500/30 to-transparent ml-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-200 font-mono flex items-center gap-2">
                <Award size={18} className="text-cyan-400" /> Sertifikasi Teknis & Pelatihan
              </h3>
              
              <div className="space-y-3">
                {[
                  {
                    title: "Google Cloud Computing Foundations",
                    issuer: "Google Cloud & Bangkit Academy",
                    date: "2024",
                    desc: "Memahami konsep dasar GCP, Virtual Machines, Cloud Storage, dan Dasar Jaringan Awan."
                  },
                  {
                    title: "Cisco Networking Essentials",
                    issuer: "Cisco Networking Academy",
                    date: "2023",
                    desc: "Routing, Switching, Subnetting IP, Protokol Jaringan OSI Layer, dan Konfigurasi Dasar Router."
                  }
                ].map((cert, idx) => (
                  <div key={idx} className="bg-slate-900/40 border border-slate-800 rounded-xl p-5 space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-white text-base">{cert.title}</h4>
                      <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/40">{cert.date}</span>
                    </div>
                    <p className="text-xs font-mono text-slate-400">{cert.issuer}</p>
                    <p className="text-sm text-slate-400 leading-relaxed pt-1">{cert.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-200 font-mono flex items-center gap-2">
                <Briefcase size={18} className="text-emerald-400" /> Kepemimpinan & Organisasi
              </h3>

              <div className="space-y-3">
                {[
                  {
                    role: "Pengurus & Staf Operasional",
                    org: "Himpunan Mahasiswa Sistem Telekomunikasi (HMA ST)",
                    date: "2023 - Sekarang",
                    desc: "Mengkoordinasikan logistik teknis acara, manajemen tim, dan komunikasi antar divisi akademik."
                  },
                  {
                    role: "Panitia Pelaksana Kegiatan Akademik",
                    org: "Universitas Pendidikan Indonesia",
                    date: "2023 - 2024",
                    desc: "Bertanggung jawab atas kelancaran infrastruktur teknis dan jaringan selama kegiatan workshop laboratorium."
                  }
                ].map((exp, idx) => (
                  <div key={idx} className="bg-slate-900/40 border border-slate-800 rounded-xl p-5 space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-white text-base">{exp.role}</h4>
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">{exp.date}</span>
                    </div>
                    <p className="text-xs font-mono text-slate-400">{exp.org}</p>
                    <p className="text-sm text-slate-400 leading-relaxed pt-1">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. KONTAK */}
        <section id="contact" className="scroll-mt-24 space-y-8">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-cyan-950/60 rounded-lg border border-cyan-500/30 text-cyan-400">
              <Mail size={22} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-mono">
              // 06. Kontak
            </h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-500/30 to-transparent ml-4" />
          </div>

          <div className="bg-gradient-to-b from-slate-900/60 to-cyan-950/20 border border-cyan-500/30 rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6 relative overflow-hidden">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Mari Berkolaborasi & Terhubung
              </h3>
              <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
                Saya selalu terbuka untuk berdiskusi mengenai posisi magang <span className="text-cyan-300">Network Engineer</span>, peluang riset jaringan, maupun proyek infrastruktur IT.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <div className="flex items-center space-x-2 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm font-mono text-slate-200">
                <Mail size={18} className="text-cyan-400" />
                <span>satriaprakasaa19@gmail.com</span>
                <button
                  onClick={copyEmail}
                  className="ml-2 p-1 text-slate-400 hover:text-cyan-400 transition-colors"
                  title="Salin Email"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              <a
                href="https://linkedin.com/in/satria-prakasa-simbolon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-mono text-sm font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)]"
              >
                <LinkedInIcon size={18} />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href="https://github.com/satriaprakasaa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 px-6 py-3 rounded-xl font-mono text-sm font-bold transition-all"
              >
                <GitHubIcon size={18} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-[#070b12] py-8 text-center text-xs font-mono text-slate-500 relative z-10">
        <p>© 2026 Satria Prakasa Simbolon. Built with React & Tailwind CSS. Deployed on Vercel Edge Network.</p>
      </footer>

    </div>
  );
}