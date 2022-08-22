import { UserView } from "../../components/User";
import { render, screen } from "../utils";

const user = {
  id: "62fb57af7dc2d857f3486e2a",
  name: "Bogdan Ion Buescu",
  age: "41",
  email: "speedy4all@gmail.com",
  address: "Valea Cetatii 11",
  phone: "+12222",
  tags: ["asd", "asd", "dddd", "asdasfdsf"],
  balance: "asd",
};

const saveUserHandler = jest.fn();
const goBackHandler = jest.fn();
const cancelEditHandler = jest.fn();
const editHandler = jest.fn();

const mockComponent = (
  loading = false,
  readonly = false,
) => {
  return (
    <UserView
      user={user}
      readonly={readonly}
      cancelEditHandler={cancelEditHandler}
      editHandler={editHandler}
      goBackHandler={goBackHandler}
      loading={loading}
      saveUserHandler={saveUserHandler}
    />
  );
};

describe("<UserView />", () => {
  it("should render component", () => {
    expect.assertions(1);
    
    render(mockComponent());

    const userInput = screen.getByRole('textbox', { name: 'name'});

    expect(userInput).toBeInTheDocument();
  });
});
