import React from 'react';

interface Props {
  title: string;
  description: string;
  logo?:any;
}

export default function Card(props: Props){
  const logo: any = props.logo;
  return (
    <div className="card">
      <div style={{ margin: 20 }}>{logo}</div>
      <h3 style={{color: "orange"}}>{props.title}</h3>
      <p style={{ marginTop: 20 }}>{props.description}</p>
    </div>
  );
}
