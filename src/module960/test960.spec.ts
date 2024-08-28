
import { test, expect } from "@playwright/experimental-ct-react";
import App960 from "./App960.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App960 />);
  await expect(component).toContainText("Learn React");
});
