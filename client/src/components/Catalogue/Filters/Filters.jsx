import { useForm } from "../../../hooks/useForm";
import "./Filters.css";

const Filters = ({ onSearchSubmit }) => {
  const { values, changeHandler, onSubmit } = useForm(
    {
      name: "",
      artist: "",
      movement: "",
      year: "",
    },
    onSearchSubmit
  );

  return (
    <form className="filters" onSubmit={onSubmit}>
      <label htmlFor="name"></label>
      <input
        className="filter"
        value={values.name}
        onChange={changeHandler}
        type="text"
        name="name"
        id="name"
        placeholder="Name"
      />
      <label htmlFor="artist"></label>
      <input
        value={values.artist}
        onChange={changeHandler}
        type="text"
        name="artist"
        id="artist"
        placeholder="Artist"
      />
      <label htmlFor="movement"></label>
      <input
        value={values.movement}
        onChange={changeHandler}
        type="text"
        name="movement"
        id="movement"
        placeholder="Movement"
      />
      <label htmlFor="year"></label>
      <input
        value={values.year}
        onChange={changeHandler}
        type="number"
        name="year"
        id="year"
        placeholder="Year"
      />
      <input className="btn-filter" type="submit" value="Search" />
    </form>
  );
};

export default Filters;
