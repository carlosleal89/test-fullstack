import { render, screen, waitFor } from "@testing-library/react";
import Home from "../pages/Home";
import { MemoryRouter } from "react-router-dom";
import { usersListMock } from '../mocks/usersMock';
import api from "../api";


describe("Tests of component Home.", () => {
  it("should have 'Listagem de usuários'.", async () => {
    // jest.spyOn(api.get('users/')).mockResolvedValueOnce({ message: usersListMock });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    await waitFor(() => {
      const title = screen.getByText('Listagem de usuários');
      expect(title).toBeInTheDocument();

      // const button = screen.getAllByText('Editar');
      // expect(button[0]).toBeInTheDocument();

      // button[0].click();
    });
  });

  it("should have a button 'Novo Cliente'.", async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    await waitFor(() => {
      const newUserButton = screen.getByText('Novo Cliente');
      expect(newUserButton).toBeInTheDocument();
    });
  });
});