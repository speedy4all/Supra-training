import Table from "../../components/Table";
import { render, screen, act, fireEvent } from "../utils";

const onRowClickMock = jest.fn();

const columns = [
  {
    label: "Col1",
    dataIndex: "col1",
  },
];

const data = [{ col1: "Test data col1", age: 25 }];

describe("<Table />", () => {
  it("should render the component", () => {
    expect.assertions(1);
    render(<Table data={[]} columns={[]} title="Test table" />);

    expect(
      screen.getByRole("table", { name: "Test table" })
    ).toBeInTheDocument();
  });

  it("should render the data and handle row click event", () => {
    expect.assertions(4);
    render(
      <Table
        data={data}
        columns={columns}
        title="Test table"
        onRowClick={onRowClickMock}
      />
    );

    expect(
      screen.getByRole("table", { name: "Test table" })
    ).toBeInTheDocument();
    expect(screen.queryByText("Test data col1")).toBeInTheDocument();

    act(() => {
      const row = screen.getByRole("row", { name: "1 Test data col1" });
      fireEvent.click(row);
    });

    expect(onRowClickMock).toHaveBeenCalledTimes(1);
    expect(onRowClickMock).toHaveBeenCalledWith({
      col1: "Test data col1",
      age: 25,
    });
  });
});
