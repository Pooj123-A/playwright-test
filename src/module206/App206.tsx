
import { test, expect } from "@playwright/experimental-ct-react";
import App206 from "./App206.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App206 />);
  await expect(component).toContainText("Learn React");
});
