// I unfortunately didn't have time to write tests for the front-end of the project
// I would have used Jest and React Testing Library to write the tests
// For network request I would mock it with Jest
/**
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();
*/

import '@testing-library/jest-dom'; // Need to import this or tests will fail
import { render, screen, within } from "@testing-library/react";
import List from "../components/Feed/List";

describe("Feed", () => {
    describe("List", () => {
        it("should render the feed list", () => {
            render(<List />)
            const list = screen.getByTestId("feed-list")

            expect(list).toBeInTheDocument();
        })

        it("should render 3 placeholders at first", () => {
            render(<List />)
            const list = screen.getByTestId("feed-list")
            const items = within(list).getAllByTestId("feed-card-loader")

            expect(items).toHaveLength(3);
        })
    })
    describe("Feed Card", () => {

    });
});