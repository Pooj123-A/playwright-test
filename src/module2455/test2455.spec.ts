
import { test, expect } from "@playwright/experimental-ct-react";
import App2455 from "./App2455.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2455 />);
  await expect(component).toContainText("Learn React");
});
