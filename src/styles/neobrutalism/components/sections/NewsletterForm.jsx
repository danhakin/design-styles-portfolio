import styled from 'styled-components';
import BaseNewsletterForm from '../../../../components/sections/NewsletterForm';
import Input from '../common/Input';
import Button from '../common/Button';
import { neobrutalismTheme as theme } from '../../theme';

// Create a wrapper component that passes styled components as props
const NewsletterFormWithStyledComponents = (props) => (
  <BaseNewsletterForm {...props} Input={Input} Button={Button} />
);

const StyledNewsletterForm = styled(NewsletterFormWithStyledComponents)`
  max-width: 800px;
  margin: ${theme.spacing[16]} auto;
  padding: ${theme.spacing[12]} ${theme.spacing[10]};
  background-color: ${theme.colors.white};
  border: ${theme.borderWidth.brutal} solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.brutal};
  text-align: center;
  position: relative;
  transform: rotate(-1deg);

  /* Add diagonal stripes background */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 15px,
        ${theme.colors.gray[100]} 15px,
        ${theme.colors.gray[100]} 16px
      );
    opacity: 0.5;
    pointer-events: none;
    border-radius: ${theme.borderRadius.lg};
  }

  .newsletter-content {
    position: relative;
    z-index: 1;
  }

  h2 {
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSize['3xl']};
    font-weight: ${theme.typography.fontWeight.black};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacing[4]};
    text-transform: uppercase;
    letter-spacing: ${theme.typography.letterSpacing.wide};
    text-shadow:
      2px 2px 0 ${theme.colors.secondary.main},
      4px 4px 0 ${theme.colors.border};
  }

  .newsletter-description {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.lg};
    font-weight: ${theme.typography.fontWeight.medium};
    color: ${theme.colors.text.primary};
    line-height: ${theme.typography.lineHeight.relaxed};
    margin-bottom: ${theme.spacing[8]};
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .newsletter-form {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[5]};
    max-width: 500px;
    margin: 0 auto;
  }

  .form-row {
    display: flex;
    gap: ${theme.spacing[4]};

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  /* Override Input styles for brutal aesthetics */
  ${Input} {
    input {
      background-color: ${theme.colors.white};
      border: ${theme.borderWidth.default} solid ${theme.colors.border};
      box-shadow: ${theme.shadows.DEFAULT};
      font-weight: ${theme.typography.fontWeight.medium};

      &:focus {
        border-color: ${theme.colors.focus};
        box-shadow: ${theme.shadows.blue};
        transform: translate(-2px, -2px);
      }
    }
  }

  /* Override Button styles */
  ${Button} {
    width: 100%;
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    border-color: ${theme.colors.border};
    box-shadow: ${theme.shadows.lg};
    padding: ${theme.spacing[4]} ${theme.spacing[8]};
    font-size: ${theme.typography.fontSize.lg};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.accent.red};
      transform: translate(-2px, -2px);
      box-shadow: ${theme.shadows.xl};
    }

    &:active:not(:disabled) {
      transform: translate(8px, 8px);
      box-shadow: none;
    }
  }

  .success-message {
    padding: ${theme.spacing[4]} ${theme.spacing[6]};
    background-color: ${theme.colors.success};
    color: ${theme.colors.black};
    border: ${theme.borderWidth.default} solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.md};
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.base};
    font-weight: ${theme.typography.fontWeight.bold};
    text-transform: uppercase;
    letter-spacing: ${theme.typography.letterSpacing.wide};
    box-shadow: ${theme.shadows.green};
    margin-top: ${theme.spacing[5]};
  }

  .error-message {
    padding: ${theme.spacing[4]} ${theme.spacing[6]};
    background-color: ${theme.colors.error};
    color: ${theme.colors.white};
    border: ${theme.borderWidth.default} solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.md};
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.base};
    font-weight: ${theme.typography.fontWeight.bold};
    text-transform: uppercase;
    letter-spacing: ${theme.typography.letterSpacing.wide};
    box-shadow: ${theme.shadows.red};
    margin-top: ${theme.spacing[5]};
  }

  /* Responsive */
  @media (max-width: 768px) {
    padding: ${theme.spacing[8]} ${theme.spacing[5]};
    margin: ${theme.spacing[10]} ${theme.spacing[4]};
    transform: rotate(0deg);

    h2 {
      font-size: ${theme.typography.fontSize.xl};
      text-shadow:
        1px 1px 0 ${theme.colors.secondary.main},
        2px 2px 0 ${theme.colors.border};
    }

    .newsletter-description {
      font-size: ${theme.typography.fontSize.base};
    }

    ${Button} {
      font-size: ${theme.typography.fontSize.base};
    }
  }
`;

export default StyledNewsletterForm;
