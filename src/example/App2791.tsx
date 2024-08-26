
import { test, expect } from "@playwright/experimental-ct-react";
import App2791 from "./App2791.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2791 />);
  await expect(component).toContainText("Learn React");
});
