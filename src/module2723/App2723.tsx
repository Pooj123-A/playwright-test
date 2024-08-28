
import { test, expect } from "@playwright/experimental-ct-react";
import App2723 from "./App2723.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2723 />);
  await expect(component).toContainText("Learn React");
});
