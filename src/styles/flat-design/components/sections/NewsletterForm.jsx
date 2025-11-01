import styled from 'styled-components';
import BaseNewsletterForm from '../../../../components/sections/NewsletterForm';
import { flatDesignTheme as theme } from '../../theme';

const StyledNewsletterForm = styled(BaseNewsletterForm)`
  max-width: 600px;
  margin: 0 auto;
  padding: ${theme.spacing[20]} ${theme.spacing[8]};

  .section-heading {
    text-align: center;
    margin-bottom: ${theme.spacing[4]};
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSize['4xl']};
    font-weight: ${theme.typography.fontWeight.extrabold};
    color: ${theme.colors.text.primary};
    line-height: ${theme.typography.lineHeight.tight};
  }

  .form-description {
    text-align: center;
    font-size: ${theme.typography.fontSize.lg};
    color: ${theme.colors.text.secondary};
    margin-bottom: ${theme.spacing[8]};
  }

  .newsletter-form {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[5]};
    background-color: ${theme.colors.white};
    padding: ${theme.spacing[8]};
    border-radius: ${theme.borderRadius.xl};
    border: ${theme.borderWidth.thick} solid ${theme.colors.primary.main};
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
      accent-color: ${theme.colors.primary.main};
    }

    label {
      font-size: ${theme.typography.fontSize.sm};
      color: ${theme.colors.text.secondary};
      line-height: ${theme.typography.lineHeight.relaxed};
      cursor: pointer;
    }
  }

  .form-success {
    padding: ${theme.spacing[5]};
    background-color: ${theme.colors.secondary.main};
    border-radius: ${theme.borderRadius.md};
    text-align: center;
    color: ${theme.colors.white};
    font-weight: ${theme.typography.fontWeight.semibold};
  }

  /* Responsive */
  @media (max-width: 768px) {
    padding: ${theme.spacing[10]} ${theme.spacing[4]};

    .section-heading {
      font-size: ${theme.typography.fontSize['3xl']};
    }

    .newsletter-form {
      padding: ${theme.spacing[6]};
    }
  }
`;

export default StyledNewsletterForm;
