// Button variants for the design system
export type ButtonVariant = 'primary' | 'secondary' | 'cta';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

// Service card data structure
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price?: string;
}

// Testimonial data structure
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  petName?: string;
  image?: string;
}

// Navigation item structure
export interface NavItem {
  label: string;
  href: string;
}
