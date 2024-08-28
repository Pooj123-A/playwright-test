
import { test, expect } from "@playwright/experimental-ct-react";
import App773 from "./App773.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App773 />);
  await expect(component).toContainText("Learn React");
});
