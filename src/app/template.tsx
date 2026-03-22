/**
 * Server-only route template — keeps the page RSC slot healthy.
 * (A client Framer Motion template here was causing the main content to render as 404.)
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
