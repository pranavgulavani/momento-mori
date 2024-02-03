export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="basis-12 flex h-full justify-center items-center">
      <p>&copy; {year} Pranav Gulavani </p>
    </footer>
  );
}
