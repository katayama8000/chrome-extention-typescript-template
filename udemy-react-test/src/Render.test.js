/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import { render, screen } from "@testing-library/react";
import Render from "./Render";

describe("Rendering", () => {
    it("should render without crashing", () => {
        render(<Render />);
        //screen.debug();
        screen.debug(screen.getByRole("heading"));
        expect(screen.getByRole("heading")).toBeTruthy();
        expect(screen.getByRole("textbox")).toBeTruthy();
        expect(screen.getAllByRole("button")[0]).toBeTruthy();
        expect(screen.getAllByRole("button")[1]).toBeTruthy();
        expect(screen.getByText("Udemy")).toBeTruthy();
        expect(screen.queryByText("Udemyyy")).toBeNull();
        expect(screen.getByTestId("copyright")).toBeTruthy();
    });
});