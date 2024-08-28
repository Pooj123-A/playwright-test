
import { test, expect } from "@playwright/experimental-ct-react";
import App632 from "./App632.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App632 />);
  await expect(component).toContainText("Learn React");
});
