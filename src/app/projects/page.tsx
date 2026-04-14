import type { Metadata } from "next";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Real production projects by iTechFlow — Tamil AI receptionist, WhatsApp bots, enterprise ERP, and scalable backend systems.",
};

export default function Projects() {
  return (
    <main className="min-h-screen pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          My <span className="gradient-text">Projects</span>
        </h1>
        <p className="text-gray-400 text-lg mb-12">
          Real projects I've built and deployed in production
        </p>

        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`border rounded-xl p-8 transition-all
                ${project.isAIAgent
                  ? "border-[#06b6d4]/40 bg-gradient-to-br from-[#06b6d4]/5 to-transparent hover:border-[#06b6d4]"
                  : "border-gray-800 hover:border-[#06b6d4]"
                }`}
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between mb-6">
                <div>
                  {project.isAIAgent && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-[#06b6d4]/20 text-[#06b6d4] border border-[#06b6d4]/30">
                        🤖 AI Agent
                      </span>
                      <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                        ● Live
                      </span>
                    </div>
                  )}
                  <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                  <p className="text-[#06b6d4] text-lg">{project.category}</p>
                </div>
                <div className="flex gap-3 mt-4 md:mt-0">
                  <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg text-sm font-semibold">
                    {project.status}
                  </span>
                  <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {project.longDescription}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6 p-6 bg-[#0a0e17] rounded-lg">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-[#06b6d4] mb-1">{value}</div>
                    <div className="text-xs text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-[#06b6d4] mt-1">✓</span>
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Architecture Highlights</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                  {project.architecture.map((item, index) => (
                    <div
                      key={index}
                      className="p-3 bg-[#0a0e17] border border-gray-800 rounded-lg text-sm text-gray-400"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Architecture Diagram */}
                <div className="bg-[#0a0e17] border border-gray-800 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-4 text-[#06b6d4]">System Architecture</h4>
                  <pre className="text-xs md:text-sm text-gray-300 overflow-x-auto">
                    {project.id === 1 && `
┌──────────────────────────────────────────────────┐
│          Tamil AI Receptionist                   │
└───────────────┬──────────────────────────────────┘
                │ Incoming Call / WhatsApp Message
    ┌───────────▼───────────┐
    │   Twilio              │
    │   Voice & WhatsApp    │
    └───────────┬───────────┘
                │
    ┌───────────▼───────────┐
    │   Sarvam AI           │
    │   Tamil STT + AI      │
    └───────────┬───────────┘
                │
    ┌───────────▼───────────┐
    │   FastAPI Backend     │
    │   Conversation Logic  │
    └───────┬───────────────┘
            │
    ┌───────▼───────┐    ┌──────────────────┐
    │   Supabase    │    │  WhatsApp Alert  │
    │   Lead Store  │    │  to Business     │
    └───────────────┘    └──────────────────┘`}
                    {project.id === 2 && `
┌──────────────────────────────────────────────────┐
│          WhatsApp AI Bot                         │
└───────────────┬──────────────────────────────────┘
                │ Customer WhatsApp Message
    ┌───────────▼───────────┐
    │   Twilio Webhook      │
    │   WhatsApp Business   │
    └───────────┬───────────┘
                │
    ┌───────────▼───────────┐
    │   FastAPI + Sarvam AI │
    │   Session Manager     │
    └───────┬───────────────┘
            │
    ┌───────▼───────┐    ┌──────────────────┐
    │   Supabase    │    │  Real-time Alert  │
    │   Sessions    │    │  to Owner        │
    └───────────────┘    └──────────────────┘`}
                    {project.id === 3 && `
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React Native  │    │   React Web     │    │   Admin Panel   │
│   Mobile Apps   │    │   Dashboard     │    │   (Django)      │
└────────┬────────┘    └────────┬────────┘    └────────┬────────┘
         │                      │                      │
         └──────────────────────┴──────────────────────┘
                                │
                    ┌───────────▼───────────┐
                    │   Django REST API     │
                    │   + JWT Auth          │
                    └───────────┬───────────┘
                                │
                ┌───────────────┼───────────────┐
                │               │               │
        ┌───────▼──────┐ ┌─────▼─────┐ ┌──────▼──────┐
        │ PostgreSQL   │ │   Redis   │ │   Celery    │
        │ (150+ tables)│ │  (Cache)  │ │  (Tasks)    │
        └──────────────┘ └───────────┘ └─────────────┘
                                │
                        ┌───────▼────────┐
                        │  TensorFlow    │
                        │  (AI Models)   │
                        └────────────────┘`}
                    {project.id === 4 && `
┌─────────────────┐    ┌─────────────────┐
│   React PWA     │    │  Admin Panel    │
│   (Offline)     │    │  (Dashboard)    │
└────────┬────────┘    └────────┬────────┘
         │                      │
         └──────────┬───────────┘
                    │
        ┌───────────▼────────────┐
        │  Django Channels       │
        │  WebSocket Server      │
        └───────────┬────────────┘
                    │
        ┌───────────▼────────────┐
        │  Django REST API       │
        │  + JWT Auth            │
        └───────────┬────────────┘
                    │
    ┌───────────────┼───────────────┐
    │               │               │
┌───▼────┐   ┌─────▼─────┐   ┌────▼─────┐
│ PostgreSQL│   │   Redis   │   │  Celery  │
│ (10+ mods)│   │ (Pub/Sub) │   │  Beat    │
└───────────┘   └───────────┘   └──────────┘`}
                    {project.id === 5 && `
┌─────────────────┐    ┌─────────────────┐
│  React Frontend │    │  Admin Panel    │
│  (TypeScript)   │    │  (Management)   │
└────────┬────────┘    └────────┬────────┘
         │                      │
         └──────────┬───────────┘
                    │
        ┌───────────▼────────────┐
        │   FastAPI Backend      │
        │   + JWT (httpOnly)     │
        └───────────┬────────────┘
                    │
        ┌───────────▼────────────┐
        │   SQLAlchemy ORM       │
        └───────────┬────────────┘
                    │
    ┌───────────────┼───────────────┐
    │               │               │
┌───▼────┐   ┌─────▼─────┐   ┌────▼─────┐
│PostgreSQL│   │   Redis   │   │  Gmail   │
│(100+ NSE)│   │  (Cache)  │   │  SMTP    │
└──────────┘   └───────────┘   └──────────┘`}
                    {project.id === 6 && `
┌─────────────────┐    ┌─────────────────┐
│  Technician     │    │  Manager        │
│  Dashboard      │    │  Dashboard      │
└────────┬────────┘    └────────┬────────┘
         │                      │
         └──────────┬───────────┘
                    │
        ┌───────────▼────────────┐
        │   WebSocket Server     │
        │   (Real-time Sync)     │
        └───────────┬────────────┘
                    │
        ┌───────────▼────────────┐
        │   FastAPI Backend      │
        │   + JWT Auth           │
        └───────────┬────────────┘
                    │
        ┌───────────▼────────────┐
        │   SQLite/PostgreSQL    │
        │   (Equipment Data)     │
        └────────────────────────┘`}
                    {project.id === 7 && `
┌─────────────────┐    ┌─────────────────┐
│   Browser A     │    │   Browser B     │
│   (Peer 1)      │    │   (Peer 2)      │
└────────┬────────┘    └────────┬────────┘
         │                      │
         │    WebRTC P2P        │
         │◄────────────────────►│
         │                      │
         └──────────┬───────────┘
                    │
        ┌───────────▼────────────┐
        │  FastAPI Signaling     │
        │  WebSocket Server      │
        └───────────┬────────────┘
                    │
        ┌───────────▼────────────┐
        │  Web Speech API        │
        │  (Speech-to-Text)      │
        └────────────────────────┘`}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
