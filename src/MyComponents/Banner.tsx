import React from 'react';

interface Props {
  title: string;
  subtitle: string;
  children: any;
}
export default function Banner(props: Props) {
  return (
    <div className="banner">
      <h1>{props.title}</h1>
      <div></div>
      <p>{props.subtitle}</p>
      {props.children}
    </div>
  );
}
