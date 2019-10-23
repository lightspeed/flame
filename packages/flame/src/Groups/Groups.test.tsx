import * as React from 'react';
import { createComponent } from 'test-utils';
import { InputGroup } from './Groups';
import { Input } from '../Input';
import { Button } from '../Button';

describe('Group', () => {
  describe('Snaphots', () => {
    it('should adjust border radii', () => {
      const component = createComponent(
        <InputGroup>
          <Input />
          <Button>action</Button>
        </InputGroup>,
      );
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('should adjust border radii when surrounded', () => {
      const component = createComponent(
        <InputGroup>
          <Button>action</Button>
          <Input />
          <Button>action</Button>
        </InputGroup>,
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
