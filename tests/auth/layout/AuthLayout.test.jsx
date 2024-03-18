import { render, screen } from "@testing-library/react";
import { AuthLayout } from "../../../src/auth/layout/AuthLayout";
import "@testing-library/jest-dom";

describe("AuthLayout", () => {
    it("renders the title and children correctly", () => {
        const testTitle = "Test Title";
        const testChildText = "Test child";

        render(
            <AuthLayout title={testTitle}>
                <div>{testChildText}</div>
            </AuthLayout>
        );

        expect(screen.getByText(testTitle)).toBeInTheDocument();
        expect(screen.getByText(testChildText)).toBeInTheDocument();
    });
});
