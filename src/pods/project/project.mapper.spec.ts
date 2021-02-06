import { mapProjectFromApiToVm } from "./project.mapper";
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';


describe('mappers specs', ()=> {
  it('Should return empty project when it feeds undefined', ()=>{
    // Arrange
    const employees: apiModel.Project = undefined;
    const expectedResult = viewModel.createEmptyProject();

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(employees)

    // Assert
    expect(result).toEqual(expectedResult);

  });

  it('Should return empty project when it feeds null', ()=>{
    // Arrange
    const employees: apiModel.Project = null;
    const expectedResult = viewModel.createEmptyProject();

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(employees)

    // Assert
    expect(result).toEqual(expectedResult);

  });

  it('Should return array one mapped item with empty employees array when it feeds undefined employess', ()=>{
    // Arrange
    const employees: apiModel.Project = {
      id: "AO27",
      name: "Name Test",
      isActive: false,
      employees: undefined
    };

    const expectedResult: viewModel.Project =
    {
      id: "AO27",
      name: "Name Test",
      isActive: false,
      employees: []
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(employees)

    // Assert
    expect(result).toEqual(expectedResult);

  });

  it('Should return array one mapped item with empty employees array when it feeds undefined employess', ()=>{
    // Arrange
    const employees: apiModel.Project = {
      id: "AO27",
      name: "Name Test",
      isActive: false,
      employees: null
    };

    const expectedResult: viewModel.Project =
    {
      id: "AO27",
      name: "Name Test",
      isActive: false,
      employees: []
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(employees)

    // Assert
    expect(result).toEqual(expectedResult);

  });

  it('Should return array one mapped item with all properties completed when it feeds with an item completed', ()=>{
    // Arrange

    const employeeSummary: apiModel.EmployeeSummary[] = [{
      id: "ID Test",
      isAssigned: false,
      employeeName: "name Test"
    },
    {
      id: "Id2 Test",
      employeeName: "name2 Test"
    }];

    const employees: apiModel.Project = {
      id: "AO27",
      name: "Name Test",
      externalId: "externalId Test",
      comments: "Comment Test",
      isActive: false,
      employees: employeeSummary
    };


    const expectedResult: viewModel.Project =
    {
      id: "AO27",
      name: "Name Test",
      externalId: "externalId Test",
      comments: "Comment Test",
      isActive: false,
      employees: [{
        id: "ID Test",
        isAssigned: false,
        employeeName: "name Test"
      },
      {
        id: "Id2 Test",
        employeeName: "name2 Test"
      }]
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(employees)

    // Assert
    expect(result).toEqual(expectedResult);

  });
});
