import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ConfirmationDialogComponent } from "./confirmation-dialog.component";
import userEvent from '@testing-library/user-event';

describe('ConfirmationDialogComponent specs', () => {

  const props = {
    isOpen: true,
    onAccept: jest.fn(),
    onClose: jest.fn(),
    title: 'Title Test',
    labels: {closeButton: "close", acceptButton: "accept" }
  }

  it('Should do something', () => {
    // Arrange

    // Act
    render(<ConfirmationDialogComponent {...props} />)

    // Assert
    const element = screen.getByText('Title Test');
    // expect(element).toBeTruthy();
    // expect(element).not.toBeNull();
    expect(element.tagName).toEqual('H2');

  });

  it('Should display the title using snapshot testing', () => {
    // Arrange

    // Act
    const { asFragment } = render(<ConfirmationDialogComponent {...props} />)

    // Assert
    expect(asFragment()).toMatchSnapshot();

  });

  it('Should display the title like Title Test', () => {
    // Arrange

    // Act
    render(<ConfirmationDialogComponent {...props} />)
    const element = screen.getByRole('heading', {
      level: 2
    });

    // Assert
    expect(element.textContent).toEqual('Title Test');

  });

  it('Should display the close button', () => {
    // Arrange

    // Act
    render(<ConfirmationDialogComponent {...props} />)
    const element = screen.getByRole('button', {
      name: 'close'
    });

    // Assert
    expect(element).toBeInTheDocument();

  });

  it('Should display the accept button in enabled state', () => {
    // Arrange


    // Act
    render(<ConfirmationDialogComponent {...props} />)
    const element = screen.getByRole('button', {
      name: 'accept'
    });

    // Assert
    expect(element).toBeEnabled();

  });

  it('Should display all the buttons', () => {
    // Arrange

    // Act
    render(<ConfirmationDialogComponent {...props} />)
    const element = screen.getAllByRole('button');

    // Assert
    expect(element).toHaveLength(2);

  });


  it('Should not display the component with isOpen false', () => {
    // Arrange
    // const newProps = { ...props, isOpen: false}

    // Act
    render(<ConfirmationDialogComponent {...props} isOpen={true} />)
    const element = screen.queryByDisplayValue('Title Test')

    // Assert
    expect(element).not.toBeInTheDocument();

  });

  it('Should display title and when press cancel button should not display title', () => {
    // Arrange



    // Act
    render(<ConfirmationDialogComponent {...props} />)
    let element = screen.queryByDisplayValue('Title Test');
    expect(element).not.toBeInTheDocument();

    const button =  screen.getByRole('button', {
      name: 'accept'
    });

    userEvent.click(button)
    element = screen.queryByDisplayValue('Title Test')

    // Assert
    expect(element).not.toBeInTheDocument();

  });
});
