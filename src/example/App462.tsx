
import { test, expect } from "@playwright/experimental-ct-react";
import App462 from "./App462.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App462 />);
  await expect(component).toContainText("Learn React");
});
