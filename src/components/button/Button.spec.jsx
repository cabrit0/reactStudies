import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from ".";

describe("<Button />", () => {
  it("should render the button with the text 'Load more posts'", () => {
    render(<Button text="load more posts" />);
    expect.assertions(1);

    const button = screen.getByRole("button", { name: /load more posts/i });
    expect(button).toBeInTheDocument();
  });

  it("should call function on button click", () => {
    const fn = jest.fn();
    render(<Button text="load more posts" onClick={fn} />);

    const button = screen.getByRole("button", { name: /load more posts/i });
    userEvent.click(button);
    expect(fn).toHaveBeenCalled();
  });

  it("should be disabled when disables is true", () => {
    const fn = jest.fn();
    render(<Button text="load more posts" disabled={true} />);

    const button = screen.getByRole("button", { name: /load more posts/i });
    expect(button).toBeDisabled();
  });

  it("should be enebled when disabled is false", () => {
    const fn = jest.fn();
    render(<Button text="load more posts" disabled={false} />);

    const button = screen.getByRole("button", { name: /load more posts/i });
    expect(button).toBeEnabled();
  });

  it("should match snapshot", () => {
    const fn = jest.fn();
    const { container } = render(
      <Button text="Load more" disabled={false} onClick={fn} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
