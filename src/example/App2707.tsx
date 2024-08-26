
import { test, expect } from "@playwright/experimental-ct-react";
import App2707 from "./App2707.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2707 />);
  await expect(component).toContainText("Learn React");
});
