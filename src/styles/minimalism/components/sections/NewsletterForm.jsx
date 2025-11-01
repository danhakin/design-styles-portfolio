import styled from 'styled-components';
import BaseNewsletterForm from '../../../../components/sections/NewsletterForm';
import Button from '../common/Button';
import Input from '../common/Input';
import Dropdown from '../common/Dropdown';
import { minimalismTheme as theme } from '../../theme';

// Create a wrapper component that passes styled components as props
const NewsletterFormWithStyledComponents = (props) => (
  <BaseNewsletterForm {...props} Button={Button} Input={Input} Dropdown={Dropdown} />
);

const StyledNewsletterForm = styled(NewsletterFormWithStyledComponents)`
  max-width: 600px;
  margin: 0 auto;
  padding: ${theme.spacing[20]} ${theme.spacing[6]};

  .section-heading {
    text-align: center;
    margin-bottom: ${theme.spacing[12]};
  }

  h2 {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize['4xl']};
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.text.primary};
    line-height: ${theme.typography.lineHeight.tight};
    margin-bottom: ${theme.spacing[4]};
  }

  .section-description {
    font-size: ${theme.typography.fontSize.lg};
    color: ${theme.colors.text.secondary};
  }

  .newsletter-form {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[6]};
  }

  .checkbox-wrapper {
    display: flex;
    align-items: flex-start;
    gap: ${theme.spacing[3]};
    margin-top: ${theme.spacing[2]};

    input[type="checkbox"] {
      margin-top: 4px;
      width: auto;
      cursor: pointer;
    }

    label {
      font-size: ${theme.typography.fontSize.sm};
      color: ${theme.colors.text.secondary};
      line-height: ${theme.typography.lineHeight.relaxed};
      cursor: pointer;
    }
  }

  .form-success {
    padding: ${theme.spacing[4]};
    background-color: ${theme.colors.gray[100]};
    border: ${theme.borderWidth.thin} solid ${theme.colors.gray[300]};
    border-radius: ${theme.borderRadius.md};
    text-align: center;
    color: ${theme.colors.text.primary};
  }

  /* Responsive */
  @media (max-width: 768px) {
    padding: ${theme.spacing[12]} ${theme.spacing[4]};

    h2 {
      font-size: ${theme.typography.fontSize['3xl']};
    }
  }
`;

export default StyledNewsletterForm;
