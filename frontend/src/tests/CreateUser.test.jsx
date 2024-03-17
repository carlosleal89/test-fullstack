import { render, screen, waitFor } from "@testing-library/react";
import Home from "../pages/Home";
import CreateUser from "../pages/CreateUser";
import UserForm from "../components/UserForm";
import { MemoryRouter } from "react-router-dom";
import { usersListMock } from '../mocks/usersMock';
import api from "../api";


describe("Tests of component Home.", () => {
  it("should have a text 'Novo usuário'.", async () => {
    render(
      <MemoryRouter>
        <CreateUser />
      </MemoryRouter>
    );

    await waitFor(() => {
      const newUserButton = screen.getByText('Novo usuário');
      expect(newUserButton).toBeInTheDocument();
    });
  });

  // it("should have a button 'Criar'.", async () => {
  //   render(
  //     <MemoryRouter>
  //       <UserForm />
  //     </MemoryRouter>
  //   );

  //   await waitFor(() => {
  //     const createButton = screen.getAllByRole('button');
  //     createButton[0].click();
  //     expect("Verifique os dados!").toBeInTheDocument();
  //   });
  // });
})