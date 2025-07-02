import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">
        Contact Me
      </h2>
      <div className="flex flex-col gap-6 text-black dark:text-neutral-300">
        <a
          href="https://www.linkedin.com/in/christianjeremy/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-blue-600 transition-colors"
        >
          <Linkedin className="h-6 w-6" />
          <span>linkedin.com/in/christianjeremy</span>
        </a>
        <a
          href="https://github.com/christianary"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-gray-700 dark:hover:text-white transition-colors"
        >
          <Github className="h-6 w-6" />
          <span>github.com/christianary</span>
        </a>
        <a
          href="mailto:christianary.personal@gmail.com"
          className="flex items-center gap-3 hover:text-red-600 transition-colors"
        >
          <Mail className="h-6 w-6" />
          <span>christianary.personal@gmail.com</span>
        </a>
      </div>
    </section>
  );
}
