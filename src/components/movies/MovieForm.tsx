import { ChangeEvent, FormEvent, useState } from "react";

interface MovieFormProps {
  search: (query: string) => void;
}

const MovieForm = ({ search }: MovieFormProps) => {
  const [query, setQuery] = useState<string>("");

  function handleQueryChange(evt: ChangeEvent<HTMLInputElement>) {
    setQuery(evt.target.value);
  }

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    search(query);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleQueryChange} />
      <button type="submit">Seach</button>
    </form>
  );
};

export default MovieForm;
