import { useState } from "react";

import { useAuthContext } from "../../context/AuthContext";
import "./CreateArt.css";

const CreateArt = ({ onCreateArt }) => {
  const { isAuthenticated, userId } = useAuthContext();
  const [formValues, setFormValues] = useState({
    name: "",
    artist: "",
    imageUrl: "",
    year: "",
    movement: "",
    method: "",
    size: "",
    description: "",
    ownerId: userId,
  });

  const onValueChange = (e) => {
    setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    onCreateArt(formValues);
  };

  return (
    <div>
      <h2>Create Art</h2>
      <form action="post" onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="name"></label>
          <input
            value={formValues.name}
            onChange={onValueChange}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
        </div>
        <div>
          <label htmlFor="artist"></label>
          <input
            value={formValues.artist}
            onChange={onValueChange}
            type="text"
            name="artist"
            id="artist"
            placeholder="Artist"
          />
        </div>
        <div>
          <label htmlFor="imageUrl"></label>
          <input
            value={formValues.imageUrl}
            onChange={onValueChange}
            type="text"
            name="imageUrl"
            id="imageUrl"
            placeholder="Image"
          />
        </div>
        <div>
          <label htmlFor="year"></label>
          <input
            value={formValues.year}
            onChange={onValueChange}
            type="number"
            name="year"
            id="year"
            placeholder="Year"
          />
        </div>
        <div>
          <label htmlFor="method"></label>
          <input
            value={formValues.method}
            onChange={onValueChange}
            type="text"
            name="method"
            id="method"
            placeholder="Method"
          />
        </div>
        <div>
          <label htmlFor="movement"></label>
          <input
            value={formValues.movement}
            onChange={onValueChange}
            type="text"
            name="movement"
            id="movement"
            placeholder="Movement"
          />
        </div>
        <div>
          <label htmlFor="size"></label>
          <input
            value={formValues.size}
            onChange={onValueChange}
            type="text"
            name="size"
            id="size"
            placeholder="Size"
          />
        </div>
        <div>
          <label htmlFor="description"></label>
          <textarea
            value={formValues.description}
            onChange={onValueChange}
            name="description"
            id="description"
            placeholder="Description"
          ></textarea>
        </div>
        <input className="button" type="submit" value="Create Art" />
      </form>
    </div>
  );
};

export default CreateArt;
