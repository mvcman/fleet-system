import React, { ReactNode } from 'react';
import LinkList from './LinkList';

interface Props {
  handleToggle: any;
  isOpen: boolean;
  prev_opt: string;
  next_opt: string;
  list: any[];
}

function UnorderList(props: Props) {
  return (
    <ul className={props.isOpen ? props.prev_opt : props.next_opt}>
      <LinkList list={props.list} handleToggle={props.handleToggle} />
    </ul>
  );
}

export default UnorderList;
