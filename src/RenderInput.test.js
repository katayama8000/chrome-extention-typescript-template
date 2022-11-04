import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RenderInput from "./RenderInput";



describe("Rendering", () => {
    it("should render without crashing", () => {
        render(<RenderInput />);
        expect(screen.getByRole("button")).toBeTruthy();
        expect(screen.getByPlaceholderText("Enter")).toBeTruthy();
    });
});

describe("Input value", () => {
    it("should update on change", async () => {
        render(<RenderInput />);
        const inputValue = screen.getByPlaceholderText("Enter");
        console.log(inputValue);
        await userEvent.type(inputValue, "test");
        expect(inputValue.value).toBe("test");
    });
});