export const Header = ({
  value,
  setSearchQuery,
}: {
  value: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element => {
  return (
    <header>
      <h1>Cards</h1>
      <div className="search">
        <input
          type="text"
          name="search"
          placeholder="Search for a card"
          value={value}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus
        />
      </div>
    </header>
  );
};
