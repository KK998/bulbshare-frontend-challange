// I unfortunately didn't have time to write tests for the front-end of the project
// I would have used Jest and React Testing Library to write the tests
// For network request I would mock it with Jest
/**
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();
*/
import '@testing-library/jest-dom'; // Need to import this or tests will fail
import { render, screen, waitFor, within } from "@testing-library/react";
import List from "../components/Comments/List";

const mockBriefref = "brief-DD650C75-1401-11ED-B757-0A9E4A196D19";
const mockBrand = "mockBrand";
const mockBrandName = "mockBrandName";

describe("Comments", () => {
    describe("List", () => {
        it("should render the comments list", async () => {

        })
    })
    describe("Comment Card", () => {

    });
});