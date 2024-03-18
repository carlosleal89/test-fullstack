import { render, screen, waitFor } from "@testing-library/react";
import Home from "../pages/Home";
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
  it("should have the text 'Listagem de usuários'.", async () => {

    render(<Home />);

    await waitFor(() => {
      const title = screen.getByText('Listagem de usuários');
      expect(title).toBeInTheDocument();
    });
  });

  it("should have a button 'Novo Cliente'.", async () => {
    render(<Home />);

    await waitFor(() => {
      const newUserButton = screen.getByText('Novo Cliente');
      expect(newUserButton).toBeInTheDocument();
    });
  });

  it("should have a client named 'Geralt of Rivia'.", async () => {
    render(
        <Home />
    );

    await waitFor(() => {
      const newUserButton = screen.getByText('Geralt of Rivia');
      expect(newUserButton).toBeInTheDocument();
    });
  });
});