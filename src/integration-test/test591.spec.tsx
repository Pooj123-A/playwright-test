
import { test, expect } from "@playwright/experimental-ct-react";
import App591 from "../example/App591.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App591 />);
  await expect(component).toContainText("Learn React");
});
