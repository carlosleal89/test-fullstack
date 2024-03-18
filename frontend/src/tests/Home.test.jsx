import { render, screen, waitFor } from "@testing-library/react";
import Home from "../pages/Home";
import { MemoryRouter } from "react-router-dom";
import { usersListMock } from '../mocks/usersMock';
import api from "../api";


describe("Tests of component Home.", () => {
  it("should return clients list'.", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(usersListMock)
    });

    const data = await api.get('users/');

    expect(data.data).toEqual(usersListMock);
  });
  it("should have 'Listagem de usuários'.", async () => {

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    await waitFor(() => {
      const title = screen.getByText('Listagem de usuários');
      expect(title).toBeInTheDocument();
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