
import { test, expect } from "@playwright/experimental-ct-react";
import App2678 from "./App2678.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2678 />);
  await expect(component).toContainText("Learn React");
});
