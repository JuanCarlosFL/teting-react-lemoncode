import { renderHook } from '@testing-library/react-hooks';
import { createEmptyLookup, Lookup } from 'common/models';
import { act } from 'react-dom/test-utils';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('confirmation-dialog hook specs', () => {
  it('Should return isOpen to false when it calls it', () => {

    // Act
    const { result } = renderHook( () => useConfirmationDialog());

    //Assert
    expect(result.current.isOpen).toEqual(false);
  });

  it('Should return empty object when it calls it', () => {

    // Act
    const { result } = renderHook( () => useConfirmationDialog());

    //Assert
    expect(result.current.itemToDelete.name).toEqual('');
    expect(result.current.itemToDelete.id).toEqual('');
  });

  it('Should return functions it calls it', () => {

    // Act
    const { result } = renderHook( () => useConfirmationDialog());

    //Assert
    const anyFunction = expect.any(Function);
    expect(result.current.onAccept).toEqual(anyFunction);
    expect(result.current.onClose).toEqual(anyFunction);
    expect(result.current.onOpenDialog).toEqual(anyFunction);
  });

  it('Should update isOpen, name and id when onOpenDialog receive an object', () => {

    const item: Lookup = {
      name: 'Name test',
      id: "1",
    };

    // Act
    const { result } = renderHook( () => useConfirmationDialog());
    act(()=>{
      result.current.onOpenDialog(item);
    })

    //Assert
    expect(result.current.isOpen).toEqual(true);
    expect(result.current.itemToDelete.name).toEqual('Name test');
    expect(result.current.itemToDelete.id).toEqual('1');
  });

  it('Should update isOpen to false when itemToDelete have data and onClose is used', () => {

    const item: Lookup = {
      name: 'Name test',
      id: "1",
    };

    // Act
    const { result } = renderHook( () => useConfirmationDialog());
    act(()=>{
      result.current.onOpenDialog(item);
      result.current.onClose();
    });


    //Assert
    expect(result.current.isOpen).toEqual(false);
  });

  it('Should update item values to empty when onAccept is used', () => {

    const item: Lookup = {
      name: 'Name test',
      id: "1",
    };

    // Act
    const { result } = renderHook( () => useConfirmationDialog());
    act(()=>{
      result.current.onOpenDialog(item);
      result.current.onAccept();
    });


    //Assert
    expect(result.current.itemToDelete.name).toEqual('');
    expect(result.current.itemToDelete.id).toEqual('');
  });


})
