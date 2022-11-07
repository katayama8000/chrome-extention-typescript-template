import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RenderInput from "./RenderInput";
import FrameworkList from "./FrameworkList";

afterEach(() => cleanup());

describe("Rendering thi list with props", () => {
    it("should render No Data with no data propped", () => {
        render(<FrameworkList />);
        expect(screen.getByText("No data !")).toBeInTheDocument();
    });
    it("Should render list item correctly", () => {
        const dummyData = [
            { id: 1, item: "React dummy" },
            { id: 2, item: "Angular dummy" },
            { id: 3, item: "Vue dummy" },
        ];
        render(<FrameworkList frameworks={dummyData} />);
        const frameworkItems = screen
            .getAllByRole("listitem")
            .map((ele) => ele.textContent);
        const dummyItems = dummyData.map((ele) => ele.item);
        expect(frameworkItems).toEqual(dummyItems);
        expect(screen.queryByText("No data !")).toBeNull();
    });
});