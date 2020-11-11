import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Campaigner from '../index';
import sortConst from '../../../consts/sortConst';
import noop from '../../../utils/noop';

test('Campigner rendered', async () => {
  const { findByText } = render(<Campaigner sortBy={sortConst[0]} onClick={noop} />);

  const regEx = new RegExp(sortConst[0], 'i');
  const orderBy = await findByText(regEx);
  expect(orderBy).toBeInTheDocument();
});
