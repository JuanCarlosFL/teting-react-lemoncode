import React from 'react';
import {render, screen} from '@testing-library/react';
import * as promiseTraker from 'react-promise-tracker';
import userEvent from '@testing-library/user-event';
import { SpinnerComponent } from './spinner.component';

describe('spinner.component spec',   () => {
  it('', async ()=> {
    //Arrange
    const stub = jest.spyOn(promiseTraker, 'usePromiseTracker')
      
    //Act
    render(<SpinnerComponent);
    const element = screen.queryByRole('presentation');
    //Assert
    expect(element).not.toBeInTheDocument();
  })
})
