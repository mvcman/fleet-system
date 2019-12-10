import React from 'react';

interface Props {
  children: any;
  hero: string;
}

export default function Hero(props: Props) {
  return <div className={props.hero}>{props.children}</div>;
}
