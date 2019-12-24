import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  list: any[];
  handleToggle: any;
  navlinksa?: string;
}

function LinkList(props: Props) {
  const AllList: any = props.list.map((l, i) => (
    <li key={i} id="list">
      <Link to={l.route} onClick={props.handleToggle} className={props.navlinksa}>
        {l.name}
      </Link>
    </li>
  ));
  return AllList;
}

export default LinkList;
