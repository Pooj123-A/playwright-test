
import { test, expect } from "@playwright/experimental-ct-react";
import App710 from "./App710.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App710 />);
  await expect(component).toContainText("Learn React");
});
