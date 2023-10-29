type Props = {};

const Sidebar = (props: Props) => {
  return (
    <nav className="fixed h-full left-0 top-0 flex flex-col items-center gap-8 z-10 border pt-20 px-4">
      <p>Home</p>
      <p>Shorts</p>
      <p>Subscriptions</p>
      <p>You</p>
    </nav>
  );
};

export default Sidebar;
