
import { test, expect } from "@playwright/experimental-ct-react";
import App2690 from "./App2690.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2690 />);
  await expect(component).toContainText("Learn React");
});
