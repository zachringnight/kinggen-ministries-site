import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Card, { FeatureCard, StatCard, TestimonialCard } from '../Card'

describe('Card', () => {
  it('renders children correctly', () => {
    render(<Card>Card content</Card>)
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('applies default padding', () => {
    render(<Card>Content</Card>)
    const card = screen.getByText('Content').closest('div')
    expect(card).toHaveClass('p-8')
  })

  it('applies custom padding sizes', () => {
    render(<Card padding="sm">Small padding</Card>)
    const card = screen.getByText('Small padding').closest('div')
    expect(card).toHaveClass('p-4')
  })

  it('renders as a link when href is provided', () => {
    render(<Card href="/services">Link Card</Card>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/services')
  })

  it('applies custom className', () => {
    render(<Card className="custom-class">Custom</Card>)
    const card = screen.getByText('Custom').closest('div')
    expect(card).toHaveClass('custom-class')
  })
})

describe('FeatureCard', () => {
  it('renders icon, title, and description', () => {
    render(
      <FeatureCard
        icon={<span data-testid="icon">Icon</span>}
        title="Feature Title"
        description="Feature description text"
      />
    )
    expect(screen.getByTestId('icon')).toBeInTheDocument()
    expect(screen.getByText('Feature Title')).toBeInTheDocument()
    expect(screen.getByText('Feature description text')).toBeInTheDocument()
  })
})

describe('StatCard', () => {
  it('renders value and label', () => {
    render(<StatCard value="100+" label="Happy clients" />)
    expect(screen.getByText('100+')).toBeInTheDocument()
    expect(screen.getByText('Happy clients')).toBeInTheDocument()
  })

  it('renders optional icon', () => {
    render(
      <StatCard
        value="50"
        label="Projects"
        icon={<span data-testid="stat-icon">Icon</span>}
      />
    )
    expect(screen.getByTestId('stat-icon')).toBeInTheDocument()
  })
})

describe('TestimonialCard', () => {
  it('renders quote and author', () => {
    render(
      <TestimonialCard
        quote="This is a great testimonial"
        author="Jane Doe"
      />
    )
    expect(screen.getByText(/This is a great testimonial/)).toBeInTheDocument()
    expect(screen.getByText('Jane Doe')).toBeInTheDocument()
  })

  it('renders optional role', () => {
    render(
      <TestimonialCard
        quote="Another testimonial"
        author="John Smith"
        role="Client"
      />
    )
    expect(screen.getByText('Client')).toBeInTheDocument()
  })

  it('displays author initial in avatar', () => {
    render(
      <TestimonialCard
        quote="Test quote"
        author="Mary"
      />
    )
    // The avatar should show "M" for Mary
    const avatar = screen.getByText('M')
    expect(avatar).toBeInTheDocument()
  })
})
