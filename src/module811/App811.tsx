
import { test, expect } from "@playwright/experimental-ct-react";
import App811 from "./App811.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App811 />);
  await expect(component).toContainText("Learn React");
});
