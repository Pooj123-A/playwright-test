
import { test, expect } from "@playwright/experimental-ct-react";
import App161 from "./App161.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App161 />);
  await expect(component).toContainText("Learn React");
});
