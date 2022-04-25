import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
const { TextInput } = require(".");

describe("<InputText>", () => {
  it("should have a value of searchValue", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue="testando" />);

    const input = screen.getByPlaceholderText(/Search posts/i);
    expect(input.value).toBe("testando");
  });

  it("should call handleChange function on each key pressed", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} />);

    const input = screen.getByPlaceholderText(/Search posts/i);
    const value = "o valor";

    userEvent.type(input, value);

    expect(input.value).toBe(value);
    expect(fn).toBeCalledTimes(value.length);
  });

  it("should match snapshot", () => {
    const { container } = render(<TextInput />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
