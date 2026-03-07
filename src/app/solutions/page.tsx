export default function Solutions() {
  return (
    <main className="min-h-screen pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Solutions</span> I Provide
        </h1>
        <p className="text-gray-400 text-lg mb-12">
          Custom solutions tailored for your business needs
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 border border-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">For Startups</h2>
            <p className="text-gray-400 mb-4">
              MVP development, scalable architecture, and rapid deployment to get your product to market fast.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Full-stack web applications</li>
              <li>• API development</li>
              <li>• Database design</li>
              <li>• Cloud deployment</li>
            </ul>
          </div>

          <div className="p-8 border border-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">For Industries</h2>
            <p className="text-gray-400 mb-4">
              Automation systems, AI integration, and custom tools to optimize operations and reduce costs.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Process automation</li>
              <li>• AI-powered search</li>
              <li>• Data analytics dashboards</li>
              <li>• Legacy system modernization</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
