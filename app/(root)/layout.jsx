export default function FrontPageLayout({ children }) {
  return (
    <>
      <span>Head</span>
      <br />
      {children}
      <br />
      <span>Foot</span>
    </>
  );
}
