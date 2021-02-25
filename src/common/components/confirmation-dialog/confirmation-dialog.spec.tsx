import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConfirmationDialogComponent } from "./confirmation-dialog.component";
import userEvent from '@testing-library/user-event';

describe('ConfirmationDialogComponent specs', () => {

  it('Should render modal window when isOpen is true', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title Test',
      labels: {closeButton: "close", acceptButton: "accept" }
    }

    // Act
    render(<ConfirmationDialogComponent {...props} />)
    const elementDialog = screen.getByRole('dialog');

    // Assert
    expect(elementDialog).toBeInTheDocument();

  });

  it('Should not render modal window when isOpen is false', () => {
    // Arrange
    const props = {
      isOpen: false,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title Test',
      labels: {closeButton: "close", acceptButton: "accept" }
    }

    // Act
    render(<ConfirmationDialogComponent {...props} />)
    const elementDialog = screen.queryByRole('dialog');

    // Assert
    expect(elementDialog).not.toBeInTheDocument();

  });

  it('Should display the title when isOpen is true', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title Test',
      labels: {closeButton: "close", acceptButton: "accept" }
    }

    // Act
    render(<ConfirmationDialogComponent {...props} />)
    const element = screen.getByRole('heading', {
      level: 2,
    });

    // Assert
    expect(element.textContent).toEqual('Title Test');

  });

  it('Should display the buttons in enabled state', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title Test',
      labels: {closeButton: "close", acceptButton: "accept" }
    }

    // Act
    render(<ConfirmationDialogComponent {...props} />)
    const element = screen.getAllByRole('button');

    // Assert
    expect(element[0]).toBeEnabled();
    expect(element[1]).toBeEnabled();
    expect(element).toHaveLength(2);

  });

  it('Should close button called when user click on close button', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title Test',
      labels: {closeButton: "close", acceptButton: "accept" }
    }
    // Act
    render(<ConfirmationDialogComponent {...props} />)
    const button =  screen.getAllByRole('button');

    userEvent.click(button[0])

    // Assert
    expect(props.onClose).toHaveBeenCalled();

  });

  it('Should accept button called when user click on accept button', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title Test',
      labels: {closeButton: "close", acceptButton: "accept" }
    }


    // Act
    render(<ConfirmationDialogComponent {...props} />)
    const button =  screen.getAllByRole('button');

    userEvent.click(button[1])

    // Assert
    expect(props.onAccept).toHaveBeenCalled();

  });


});
