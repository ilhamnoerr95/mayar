import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Navbar from "react-bootstrap/Navbar";
import "./_header.scss";

import { useDispatch } from "react-redux";
import { searching } from "store/movie";
import { useEffect, useState } from "react";

function Header() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(searching(search));
  });

  return (
    <Navbar>
      <p style={{ width: "10rem", textAlign: "right" }} className="h6">
        LIST MOVIE
      </p>
      <InputGroup size="sm" className="px-4 py-2">
        <InputGroup.Text>Search</InputGroup.Text>
        <Form.Control
          aria-label="First name"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Find your Movie or Actors"
        />
      </InputGroup>
    </Navbar>
  );
}

export default Header;
