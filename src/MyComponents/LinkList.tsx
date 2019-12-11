import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  list: any[];
  handleToggle: any;
}

function LinkList(props: Props) {
  const AllList: any = props.list.map((l, i) => (
    <li key={i}>
      <Link to={l.route} onClick={props.handleToggle}>
        {l.name}
      </Link>
    </li>
  ));
  return AllList;
}

export default LinkList;
