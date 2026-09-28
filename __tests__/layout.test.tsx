import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import RootLayout, { metadata } from "../app/layout";

vi.mock("next/font/google", () => ({
  Geist: () => ({ variable: "font-geist-sans" }),
  Geist_Mono: () => ({ variable: "font-geist-mono" }),
}));

describe("RootLayout", () => {
  it("shows the page content inside the layout", () => {
    render(
      <RootLayout params={Promise.resolve({})}>
        <p>Page content</p>
      </RootLayout>,
    );
    expect(screen.getByText("Page content")).toBeDefined();
  });

  it("sets the page language to English", () => {
    render(
      <RootLayout params={Promise.resolve({})}>
        <p>Page content</p>
      </RootLayout>,
    );
    expect(document.documentElement.lang).toBe("en");
  });

  it("has the correct page title", () => {
    expect(metadata.title).toBe("Create Next App");
  });
});