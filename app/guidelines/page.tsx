'use client';

import {
  Tag,
  Pill,
  SectionLabel,
  FieldLabel,
  SectionHeading,
  NavLogo,
  IconBox,
  StatCard,
  EmptyState,
  PrimaryButton,
  GhostButton,
  FormLabel,
  FormInput,
  Icon,
} from '@/components/ui';
import {
  Sparkle,
  ArrowRight,
  Plus,
  Check,
  PencilSimple,
  Eye,
  EyeSlash,
  Clock,
  CircleNotch,
  ListChecks,
  ArrowsOut,
  FileText,
  MagnifyingGlass,
} from '@phosphor-icons/react';

export default function Guidelines() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <div className="mx-auto w-full max-w-5xl px-8 py-16">

        {/* Header */}
        <header className="mb-16 text-center">
          <NavLogo />
          <h1 className="font-serif font-normal mt-6 mb-3 text-section-h2">Design system reference</h1>
          <p className="max-w-md text-base text-text-2 leading-relaxed mx-auto">
            Canonical examples of reusable components in Fleur. 
          </p>
          <p 
          className="max-w-md text-base text-text-2 leading-relaxed mx-auto">
            Reference this, we don&apos;t reinvent and double our workload. -Vansh
          </p>
        </header>

        {/* Typography */}
        <Section label="Typography: font sizes">
          <div className="space-y-3 rounded-lg border border-line bg-bg-2 p-6">
            <Sized cls="text-hero" sample="Hero: clamp(2.8rem, 6vw, 5rem)" serif />
            <Sized cls="text-section-h2" sample="Section H2: clamp(1.8rem, 3.5vw, 2.6rem)" serif />
            <Sized cls="text-4xl" sample="text-4xl: 2.5rem" serif />
            <Sized cls="text-3xl" sample="text-3xl: 1.8rem" serif />
            <Sized cls="text-2xl" sample="text-2xl: 1.6rem" serif />
            <Sized cls="text-xl" sample="text-xl: 1.3rem" serif />
            <Sized cls="text-lg" sample="text-lg: 1.1rem" />
            <Sized cls="text-base" sample="text-base: 0.95rem" />
            <Sized cls="text-sm" sample="text-sm: 0.85rem" />
            <Sized cls="text-xs" sample="text-xs: 0.78rem" />
            <Sized cls="text-2xs" sample="text-2xs: 0.7rem" mono />
            <Sized cls="text-3xs" sample="text-3xs: 0.6rem" mono />
          </div>
        </Section>

        <Section label="Typography: tracking (letter-spacing)">
          <div className="space-y-2 rounded-lg border border-line bg-bg-2 p-6 font-mono text-2xs uppercase text-text-2">
            <div className="tracking-tight">tracking-tight (-0.01em): for display headings</div>
            <div className="tracking-ui-sm">tracking-ui-sm (0.06em)</div>
            <div className="tracking-ui">tracking-ui (0.08em)</div>
            <div className="tracking-ui-md">tracking-ui-md (0.1em)</div>
            <div className="tracking-ui-lg">tracking-ui-lg (0.12em): most common label tracking</div>
            <div className="tracking-ui-xl">tracking-ui-xl (0.14em)</div>
            <div className="tracking-ui-2xl">tracking-ui-2xl (0.18em): section labels</div>
          </div>
        </Section>

        {/* Colors */}
        <Section label="Backgrounds">
          <div className="grid grid-cols-4 gap-2">
            <Swatch className="bg-bg" name="bg" hex="#111110" />
            <Swatch className="bg-bg-2" name="bg-2" hex="#171715" />
            <Swatch className="bg-bg-3" name="bg-3" hex="#1e1e1c" />
            <Swatch className="bg-bg-4" name="bg-4" hex="#252523" />
          </div>
        </Section>

        <Section label="Text colors">
          <div className="space-y-1 rounded-lg border border-line bg-bg-2 p-4">
            <p className="text-text">text: primary ink (#e8e4dc)</p>
            <p className="text-text-2">text-2: muted (#9a9690)</p>
            <p className="text-text-3">text-3: dim (#5a5752)</p>
          </div>
        </Section>

        <Section label="Accent palette">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Swatch className="bg-accent" name="accent" hex="#7c9e6b" />
            <Swatch className="bg-warn" name="warn" hex="#c4874a" />
            <Swatch className="bg-purple" name="purple" hex="#8b7ec8" />
            <Swatch className="bg-blue" name="blue" hex="#6a9fc0" />
          </div>
        </Section>

        <Section label="Borders">
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded border border-line p-3 text-center font-mono text-3xs uppercase tracking-ui-xl text-text-3">line</div>
            <div className="rounded border border-line-2 p-3 text-center font-mono text-3xs uppercase tracking-ui-xl text-text-3">line-2</div>
            <div className="rounded border border-line-3 p-3 text-center font-mono text-3xs uppercase tracking-ui-xl text-text-3">line-3</div>
          </div>
        </Section>

        {/* Labels */}
        <Section label="Labels">
          <div className="space-y-4 rounded-lg border border-line bg-bg-2 p-6">
            <div>
              <code className="font-mono text-2xs text-text-3 block mb-2">&lt;SectionLabel&gt;</code>
              <SectionLabel>Section label</SectionLabel>
            </div>
            <div>
              <code className="font-mono text-2xs text-text-3 block mb-2">&lt;FieldLabel&gt;</code>
              <FieldLabel>Field label</FieldLabel>
            </div>
            <div>
              <code className="font-mono text-2xs text-text-3 block mb-2">&lt;FormLabel&gt;</code>
              <FormLabel>Form label</FormLabel>
            </div>
          </div>
        </Section>

        {/* Tags */}
        <Section label="Tags">
          <div className="flex flex-wrap gap-1.5">
            <Tag>default</Tag>
            <Tag variant="accent">accent</Tag>
            <Tag variant="purple">purple</Tag>
            <Tag variant="warn">warn</Tag>
          </div>
        </Section>

        {/* Pills */}
        <Section label="Pills">
          <div className="flex flex-wrap gap-2">
            <Pill>default</Pill>
            <Pill variant="accent">accent</Pill>
          </div>
        </Section>

        {/* Buttons */}
        <Section label="Buttons">
          <div className="flex flex-wrap gap-3 items-start">
            <PrimaryButton className="px-5 py-2.5 text-sm">Primary</PrimaryButton>
            <PrimaryButton className="px-5 py-2.5 text-sm" disabled>Primary disabled</PrimaryButton>
            <GhostButton className="px-5 py-2.5 text-sm">Ghost</GhostButton>
            <PrimaryButton className="px-5 py-2.5 text-sm">
              <Icon as={ArrowRight} size="sm" weight="bold" />
              With icon
            </PrimaryButton>
          </div>
        </Section>

        {/* Inputs */}
        <Section label="Form inputs">
          <div className="space-y-4 max-w-md">
            <div>
              <FormLabel>Default input</FormLabel>
              <FormInput placeholder="Type something…" />
            </div>
            <div>
              <FormLabel>Error state</FormLabel>
              <FormInput placeholder="With error" error />
            </div>
          </div>
        </Section>

        {/* SectionHeading */}
        <Section label="Section heading">
          <div className="rounded-lg border border-line bg-bg-2 p-8">
            <SectionHeading
              label="Example label"
              title="Section heading title"
              sub="Sub text describing what the section is about. Defaults to left-aligned."
            />
          </div>
          <div className="rounded-lg border border-line bg-bg-2 p-8 mt-3 text-center">
            <SectionHeading
              align="center"
              label="Center-aligned"
              title="Section heading title"
              sub="Same component, with align='center'."
            />
          </div>
        </Section>

        {/* IconBox + Icon */}
        <Section label="Icons">
          <div className="flex flex-wrap gap-3 items-center">
            <Icon as={Sparkle} size="xs" weight="fill" />
            <Icon as={Sparkle} size="sm" weight="fill" />
            <Icon as={Sparkle} size="md" weight="fill" />
            <Icon as={Sparkle} size="lg" weight="fill" />
          </div>
          <p className="font-mono text-2xs text-text-3 mt-3">size: xs (11) / sm (13) / md (16) / lg (20)</p>

          <div className="flex flex-wrap gap-4 items-center mt-6 rounded-lg border border-line bg-bg-2 p-4">
            <IconBox><Icon as={ListChecks} size="md" /></IconBox>
            <IconBox><Icon as={ArrowsOut} size="md" /></IconBox>
            <IconBox><Icon as={EyeSlash} size="md" /></IconBox>
            <IconBox size="sm"><Icon as={Plus} size="xs" weight="bold" /></IconBox>
          </div>
          <p className="font-mono text-2xs text-text-3 mt-3">&lt;IconBox&gt;: bordered icon container for feature cards / empty states</p>

          <div className="grid grid-cols-6 gap-3 mt-6 font-mono text-2xs text-text-3 text-center">
            <IconRef icon={Sparkle} name="Sparkle" />
            <IconRef icon={ArrowRight} name="ArrowRight" />
            <IconRef icon={Plus} name="Plus" />
            <IconRef icon={Check} name="Check" />
            <IconRef icon={PencilSimple} name="PencilSimple" />
            <IconRef icon={Eye} name="Eye" />
            <IconRef icon={EyeSlash} name="EyeSlash" />
            <IconRef icon={Clock} name="Clock" />
            <IconRef icon={CircleNotch} name="CircleNotch" />
            <IconRef icon={ListChecks} name="ListChecks" />
            <IconRef icon={ArrowsOut} name="ArrowsOut" />
            <IconRef icon={FileText} name="FileText" />
            <IconRef icon={MagnifyingGlass} name="Magnifier" />
          </div>
        </Section>

        {/* Cards */}
        <Section label="Stat card">
          <div className="grid grid-cols-3 gap-px rounded-xl overflow-hidden border border-line bg-line">
            <StatCard value="~25min" label="saved per wiki entry vs. manual writing" />
            <StatCard value="6" label="structured entry types for any fiction universe" />
            <StatCard value="0" label="accidental spoilers when you set your progress" />
          </div>
        </Section>

        <Section label="Empty state">
          <div className="rounded-lg border border-line bg-bg-2 p-6">
            <EmptyState
              className="py-10"
              label="Nothing here yet"
              icon={<Icon as={FileText} size="sm" />}
            />
          </div>
        </Section>

        {/* Field grid */}
        <Section label="Field grid">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
            <Field k="Affiliation" v="Sunken Archive (Outsider)" />
            <Field k="Age" v="23" />
            <Field k="Species" v="Human" />
            <Field k="Status" v="Active warden" />
          </div>
        </Section>

        {/* NavLogo */}
        <Section label="NavLogo">
          <div className="space-y-4 rounded-lg border border-line bg-bg-2 p-6">
            <div className="flex items-center gap-6">
              <NavLogo size="md" />
              <span className="font-mono text-2xs text-text-3">size=&quot;md&quot;</span>
            </div>
            <div className="flex items-center gap-6">
              <NavLogo size="sm" />
              <span className="font-mono text-2xs text-text-3">size=&quot;sm&quot;</span>
            </div>
          </div>
        </Section>

      </div>
    </main>
  );
}


function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="mb-14">
      <div className="mb-4 flex items-center gap-2">
        <span className="font-mono text-2xs uppercase tracking-ui-xl text-text-3">{label}</span>
        <span className="h-px flex-1 bg-line" />
      </div>
      {children}
    </section>
  );
}

function Sized({ cls, sample, serif, mono }: { cls: string; sample: string; serif?: boolean; mono?: boolean }) {
  const family = serif ? 'font-serif' : mono ? 'font-mono' : 'font-sans';
  return (
    <div className="flex items-baseline gap-4">
      <code className="font-mono text-3xs text-text-3 w-32 flex-shrink-0">{cls}</code>
      <span className={`${family} ${cls} text-text leading-tight`}>{sample}</span>
    </div>
  );
}

function Swatch({ className, name, hex }: { className: string; name: string; hex: string }) {
  return (
    <div className={`${className} rounded-md border border-line p-3`}>
      <div className="font-mono text-2xs text-text">{name}</div>
      <div className="font-mono text-3xs text-text-3">{hex}</div>
    </div>
  );
}

function Field({ k, v }: { k: string; v: string }) {
  return (
    <div className="bg-bg-2 px-4 py-3">
      <FieldLabel className="mb-1">{k}</FieldLabel>
      <div className="text-sm text-text">{v}</div>
    </div>
  );
}

function IconRef({ icon: IconComponent, name }: { icon: React.ComponentType<{ size?: number; weight?: 'regular' | 'fill' | 'bold' }>; name: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <IconComponent size={16} weight="regular" />
      <span>{name}</span>
    </div>
  );
}
