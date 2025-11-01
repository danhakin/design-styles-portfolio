const Features = ({ className }) => {
  const features = [
    {
      id: 1,
      icon: '🤝',
      title: 'Real-time Collaboration',
      description: 'Work together simultaneously on designs with your team members. See changes instantly as they happen.',
    },
    {
      id: 2,
      icon: '🧩',
      title: 'Component Library',
      description: 'Create, store, and reuse components across all your projects. Maintain consistency with ease.',
    },
    {
      id: 3,
      icon: '💬',
      title: 'Contextual Feedback',
      description: 'Provide and receive feedback directly on designs. Resolve discussions without switching tools.',
    },
    {
      id: 4,
      icon: '🔗',
      title: 'Seamless Integrations',
      description: 'Connect with your favorite tools. DesignSync works with Figma, Sketch, Adobe XD and more.',
    },
  ];

  return (
    <section className={className || "features"}>
      <h2 className="section-heading">Why teams choose DesignSync</h2>
      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-item">
            <div className="feature-icon" aria-hidden="true">
              {feature.icon}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
