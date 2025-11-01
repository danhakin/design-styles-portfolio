import { useState } from 'react';
import Input from '../common/Input';
import Dropdown from '../common/Dropdown';
import Button from '../common/Button';

const NewsletterForm = ({ className }) => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    interest: '',
    updates: false,
  });

  const interestOptions = [
    { value: 'ui-design', label: 'UI Design' },
    { value: 'ux-design', label: 'UX Design' },
    { value: 'design-systems', label: 'Design Systems' },
    { value: 'collaboration-tools', label: 'Collaboration Tools' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for subscribing!');
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className={className || "newsletter-form-section"}>
      <div className="form-container">
        <h2 className="section-heading">Join our newsletter</h2>
        <p className="form-description">
          Get weekly design tips, resources, and updates about DesignSync delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="newsletter-form">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            required
          />

          <Input
            label="Name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            required
          />

          <Dropdown
            label="I'm interested in"
            options={interestOptions}
            value={formData.interest}
            onChange={(e) => handleChange('interest', e.target.value)}
            required
          />

          <div className="checkbox-wrapper">
            <label>
              <input
                type="checkbox"
                checked={formData.updates}
                onChange={(e) => handleChange('updates', e.target.checked)}
              />
              <span>Send me product updates and marketing communications</span>
            </label>
          </div>

          <Button type="submit" variant="primary" size="large">
            Subscribe Now
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterForm;
