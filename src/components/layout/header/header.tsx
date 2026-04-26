import HeaderUpperLayer from './header-upper-layer';

export default function Header() {
  return (
    <header className="sticky top-0 w-full px-4 z-50 bg-[var(--primary-white-80)] backdrop-blur-sm">
      <HeaderUpperLayer />
    </header>
  );
}
