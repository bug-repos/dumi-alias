import React from 'react';
import {tuple} from '@/utils/type';

const titleTypes = tuple('h1','h2','h3','h4','h5','h6')

export type TTitleType = typeof titleTypes[number]

export interface IFooProps {
  type?: TTitleType;
  title?: string;
}

const Foo: React.FC<IFooProps> = (props) => {

  return <h1>{props.title}</h1>
}

Foo.displayName = 'Foo';
Foo.defaultProps = {
  type: 'h1',
}
export default Foo;
