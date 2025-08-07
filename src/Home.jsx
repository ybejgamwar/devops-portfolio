
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-100 via-white to-indigo-50 text-gray-800 font-sans">
      <header className="sticky top-0 bg-white shadow-md z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-indigo-600">Yogesh Bejgamwar</h1>
          <div className="space-x-6 text-gray-700 font-medium">
            <a href="#about" className="hover:text-indigo-500">About</a>
            <a href="#skills" className="hover:text-indigo-500">Skills</a>
            <a href="#services" className="hover:text-indigo-500">Services</a>
            <a href="#projects" className="hover:text-indigo-500">Projects</a>
            <a href="#contact" className="hover:text-indigo-500">Contact</a>
          </div>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center text-center py-20 bg-indigo-600 text-white">
        <h2 className="text-5xl font-extrabold mb-4">Hi, I'm Yogesh</h2>
        <p className="text-2xl mb-6">Lead DevOps Engineer | AWS & GCP Certified | Kubernetes Expert</p>
        <a href="#contact" className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow hover:bg-indigo-50 transition">Hire Me</a>
      </section>

      <section id="about" className="max-w-5xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold mb-6 text-indigo-700">About Me</h3>
        <p className="text-lg leading-relaxed">
          I'm a seasoned DevOps Engineer with 10+ years of experience working across cloud platforms like AWS and GCP,
          specializing in Kubernetes, CI/CD pipelines, Infrastructure as Code, and security automation. I lead migrations,
          optimize systems, and build modern cloud-native solutions that scale.
        </p>
      </section>

      <section id="skills" className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-indigo-700">Skills & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-lg">
            <div className="bg-indigo-50 p-4 rounded shadow">AWS & GCP</div>
            <div className="bg-indigo-50 p-4 rounded shadow">Kubernetes</div>
            <div className="bg-indigo-50 p-4 rounded shadow">Docker</div>
            <div className="bg-indigo-50 p-4 rounded shadow">Terraform</div>
            <div className="bg-indigo-50 p-4 rounded shadow">Ansible</div>
            <div className="bg-indigo-50 p-4 rounded shadow">Jenkins / GitLab</div>
            <div className="bg-indigo-50 p-4 rounded shadow">Python & Bash</div>
            <div className="bg-indigo-50 p-4 rounded shadow">Monitoring: Grafana / ELK</div>
          </div>
        </div>
      </section>

      <section id="services" className="max-w-5xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold mb-8 text-indigo-700">Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          <div className="p-6 bg-white shadow rounded">
            <h4 className="font-semibold mb-2">CI/CD Automation</h4>
            <p>Implement pipelines using Jenkins, GitLab, TeamCity for faster deployments.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <h4 className="font-semibold mb-2">Cloud Infrastructure</h4>
            <p>Design scalable infrastructure on AWS/GCP using Terraform and Ansible.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <h4 className="font-semibold mb-2">Kubernetes Management</h4>
            <p>Deploy and manage EKS & GKE clusters with Helm and GitOps practices.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <h4 className="font-semibold mb-2">Security & Compliance</h4>
            <p>Security scanning with Snyk, BlackDuck; AWS Security Hub integration.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-indigo-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-indigo-700">Featured Projects</h3>
          <ul className="space-y-4 text-lg">
            <li>🚀 Migrated Atlassian Suite (Jira/Confluence) to AWS EKS with disaster recovery.</li>
            <li>🔧 Automated GitLab CI with Kubernetes Executor on EKS/GKE.</li>
            <li>📊 Created cost optimization strategy using AWS Config and CloudWatch.</li>
            <li>🔒 Integrated threat modeling and vulnerability scanning into pipelines.</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="max-w-5xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold mb-6 text-indigo-700">Contact Me</h3>
        <ul className="text-lg space-y-2">
          <li>📧 Email: y.bejgamwar@gmail.com</li>
          <li>📞 Phone: +91 8412083909 / +91 9422932047</li>
          <li>🌍 Location: Kharadi, Pune, India</li>
          <li>🔗 LinkedIn: <a href="#" className="text-indigo-600 underline">[Your LinkedIn]</a></li>
          <li>💻 GitHub: <a href="#" className="text-indigo-600 underline">[Your GitHub]</a></li>
        </ul>
      </section>

      <footer className="bg-white border-t py-6 text-center text-gray-600">
        &copy; {new Date().getFullYear()} Yogesh Bejgamwar. All rights reserved.
      </footer>
    </main>
  );
}
