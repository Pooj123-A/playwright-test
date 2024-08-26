
import { test, expect } from "@playwright/experimental-ct-react";
import App2269 from "./App2269.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2269 />);
  await expect(component).toContainText("Learn React");
});
