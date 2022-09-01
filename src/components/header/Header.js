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
      <h5 style={{ width: "10rem" }}>LIST MOVIE</h5>
      <InputGroup className="">
        <InputGroup.Text>Find Movie</InputGroup.Text>
        <Form.Control
          aria-label="First name"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="FIND YOUR MOVIE OR ACTORS"
        />
      </InputGroup>
    </Navbar>
  );
}

export default Header;
