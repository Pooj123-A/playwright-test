
import { test, expect } from "@playwright/experimental-ct-react";
import App131 from "./App131.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App131 />);
  await expect(component).toContainText("Learn React");
});
