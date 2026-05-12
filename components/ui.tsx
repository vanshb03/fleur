import type { ReactNode, InputHTMLAttributes, ComponentType } from 'react';
import type { IconProps as PhosphorIconProps } from '@phosphor-icons/react';

// ─── Icon ────────────────────────────────────────────────────────────────────
// Tiny wrapper so we don't sprinkle size={14} everywhere

type IconSize = 'xs' | 'sm' | 'md' | 'lg';

const ICON_SIZES: Record<IconSize, number> = {
  xs: 11,
  sm: 13,
  md: 16,
  lg: 20,
};

export function Icon({
  as: PhosphorIcon,
  size = 'md',
  weight = 'regular',
  className = '',
}: {
  as: ComponentType<PhosphorIconProps>;
  size?: IconSize;
  weight?: PhosphorIconProps['weight'];
  className?: string;
}) {
  return <PhosphorIcon size={ICON_SIZES[size]} weight={weight} className={className} />;
}

// ─── Tag ────────────────────────────────────────────────────────────────────

type TagVariant = 'default' | 'accent' | 'purple' | 'warn';

const TAG_VARIANTS: Record<TagVariant, string> = {
  default: 'bg-bg-3 border border-line text-text-2',
  accent:  'bg-accent-dim text-accent-2',
  purple:  'bg-purple-dim text-purple',
  warn:    'bg-warn-dim text-warn',
};

export function Tag({ children, variant = 'default', className = '' }: {
  children: ReactNode; variant?: TagVariant; className?: string;
}) {
  return (
    <span className={`px-2.5 py-0.5 font-mono text-2xs rounded ${TAG_VARIANTS[variant]} ${className}`}>
      {children}
    </span>
  );
}

// ─── Pill ────────────────────────────────────────────────────────────────────

type PillVariant = 'default' | 'accent';

const PILL_VARIANTS: Record<PillVariant, string> = {
  default: 'bg-bg-3 border border-line-2 text-text-2',
  accent:  'bg-accent-dim border border-accent/30 text-accent-2',
};

export function Pill({ children, variant = 'default', className = '' }: {
  children: ReactNode; variant?: PillVariant; className?: string;
}) {
  return (
    <span className={`px-3.5 py-1.5 text-xs font-mono tracking-ui-sm rounded-full ${PILL_VARIANTS[variant]} ${className}`}>
      {children}
    </span>
  );
}

// ─── SectionLabel ────────────────────────────────────────────────────────────

export function SectionLabel({ children, className = '' }: {
  children: ReactNode; className?: string;
}) {
  return (
    <div className={`font-mono text-2xs tracking-ui-2xl uppercase text-accent mb-4 ${className}`}>
      {children}
    </div>
  );
}

// ─── FieldLabel ──────────────────────────────────────────────────────────────

export function FieldLabel({ children, className = '' }: {
  children: ReactNode; className?: string;
}) {
  return (
    <div className={`font-mono text-3xs tracking-ui-lg uppercase text-text-3 ${className}`}>
      {children}
    </div>
  );
}

// ─── SectionHeading ──────────────────────────────────────────────────────────

export function SectionHeading({ label, title, sub, align = 'left', className = '' }: {
  label: string; title: ReactNode; sub?: ReactNode; align?: 'left' | 'center'; className?: string;
}) {
  const subAlign = align === 'center' ? 'mx-auto' : '';
  return (
    <div className={className}>
      <SectionLabel>{label}</SectionLabel>
      <h2 className="font-serif font-normal mb-4 text-section-h2">{title}</h2>
      {sub && <p className={`max-w-lg text-base text-text-2 leading-7 ${subAlign}`}>{sub}</p>}
    </div>
  );
}

// ─── NavLogo ─────────────────────────────────────────────────────────────────

export function NavLogo({ size = 'md' }: { size?: 'sm' | 'md' }) {
  return (
    <div className={`flex items-center gap-1.5 font-serif text-text no-underline ${size === 'md' ? 'text-xl tracking-wide' : 'text-lg'}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block flex-shrink-0" />
      Fleur
    </div>
  );
}

// ─── IconBox ─────────────────────────────────────────────────────────────────

export function IconBox({ children, size = 'md', className = '' }: {
  children: ReactNode; size?: 'sm' | 'md'; className?: string;
}) {
  const dim = size === 'sm' ? 'w-7 h-7' : 'w-9 h-9';
  return (
    <div className={`${dim} border border-line-2 rounded-lg flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
}

// ─── StatCard ────────────────────────────────────────────────────────────────

export function StatCard({ value, label }: { value: ReactNode; label: string }) {
  return (
    <div className="bg-bg-2 p-8 text-center">
      <div className="font-serif text-4xl text-text leading-none mb-1.5">{value}</div>
      <div className="text-xs text-text-2">{label}</div>
    </div>
  );
}

// ─── EmptyState ──────────────────────────────────────────────────────────────

export function EmptyState({ icon, label, className = '' }: {
  icon: ReactNode; label: string; className?: string;
}) {
  return (
    <div className={`flex flex-col items-center justify-center gap-2 text-text-3 ${className}`}>
      <IconBox>{icon}</IconBox>
      <span className="font-mono text-xs">{label}</span>
    </div>
  );
}

// ─── PrimaryButton ───────────────────────────────────────────────────────────

export function PrimaryButton({ children, onClick, disabled, className = '', href }: {
  children: ReactNode; onClick?: () => void; disabled?: boolean; className?: string; href?: string;
}) {
  const cls = `flex items-center gap-1.5 bg-accent text-black rounded-lg font-medium hover:opacity-88 hover:-translate-y-px transition-all disabled:opacity-40 disabled:cursor-not-allowed ${className}`;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button onClick={onClick} disabled={disabled} className={cls}>{children}</button>;
}

// ─── GhostButton ─────────────────────────────────────────────────────────────

export function GhostButton({ children, onClick, className = '', href }: {
  children: ReactNode; onClick?: () => void; className?: string; href?: string;
}) {
  const cls = `border border-line-2 text-text-2 rounded-lg hover:text-text hover:border-line-3 transition-colors ${className}`;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}

// ─── FormLabel ───────────────────────────────────────────────────────────────

export function FormLabel({ children, htmlFor }: { children: ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="block font-mono text-2xs tracking-ui-lg uppercase text-text-3 mb-2">
      {children}
    </label>
  );
}

// ─── FormInput ───────────────────────────────────────────────────────────────

type FormInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> & {
  error?: boolean;
  className?: string;
};

export function FormInput({ error, className = '', onFocus, onBlur, ...props }: FormInputProps) {
  return (
    <input
      {...props}
      className={`w-full bg-bg-2 border rounded-lg text-text px-3.5 py-3 text-sm outline-none transition-all ${error ? 'border-error' : 'border-line-2'} ${className}`}
      onFocus={e => {
        e.target.style.boxShadow = '0 0 0 3px color-mix(in srgb, var(--color-accent) 10%, transparent)';
        onFocus?.(e);
      }}
      onBlur={e => {
        e.target.style.boxShadow = 'none';
        if (!error) e.target.style.borderColor = '';
        onBlur?.(e);
      }}
    />
  );
}
