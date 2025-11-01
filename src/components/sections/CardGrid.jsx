import Card from '../common/Card';
import Button from '../common/Button';

const CardGrid = () => {
  const templates = [
    {
      id: 1,
      title: 'Mobile App UI Kit',
      description: 'A comprehensive kit for designing modern mobile applications.',
    },
    {
      id: 2,
      title: 'SaaS Website Template',
      description: 'Everything you need to design a professional SaaS website.',
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Data visualization components for creating intuitive dashboards.',
    },
    {
      id: 4,
      title: 'E-commerce Store',
      description: 'Complete e-commerce design system with shopping cart flow.',
    },
    {
      id: 5,
      title: 'Designer Portfolio',
      description: 'Showcase your work with this elegant portfolio template.',
    },
    {
      id: 6,
      title: 'User Onboarding',
      description: 'Onboarding flows and screens to welcome new users.',
    },
  ];

  return (
    <section className="card-grid-section">
      <h2 className="section-heading">Explore design templates</h2>
      <div className="card-grid">
        {templates.map((template) => (
          <Card key={template.id} title={template.title}>
            <div className="card-image-placeholder" style={{ width: '100%', height: '200px', background: '#e0e0e0', marginBottom: '1rem' }}>
              Template Image
            </div>
            <p>{template.description}</p>
            <Button variant="secondary" size="small">
              View Template
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CardGrid;
