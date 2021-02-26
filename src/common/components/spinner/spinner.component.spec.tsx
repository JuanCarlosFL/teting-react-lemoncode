import React from 'react';
import {render, screen} from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import Modal from '@material-ui/core/Modal';

describe('spinner.component spec',   () => {
  it('Should be render de spinner when modal recive true', async ()=> {
    //Arrange
    const renderWithModal = component => {
      return {
        ...render(
          <Modal open={true}>
            <div>
            {component}
            </div>
          </Modal>
        )
      };
    };

    //Act
    renderWithModal(<SpinnerComponent />);
    const element = screen.getByRole('presentation');

    //Assert
    expect(element).toBeInTheDocument();
  });

  it('Should not be render de spinner when modal recive false', async ()=> {
    //Arrange
    const renderWithModal = component => {
      return {
        ...render(
          <Modal open={false}>
            <div>
            {component}
            </div>
          </Modal>
        )
      };
    };

    //Act
    renderWithModal(<SpinnerComponent />);
    const element = screen.queryByRole('presentation');

    //Assert
    expect(element).not.toBeInTheDocument();
  });

})
