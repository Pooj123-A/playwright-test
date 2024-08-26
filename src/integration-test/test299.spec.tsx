
import { test, expect } from "@playwright/experimental-ct-react";
import App299 from "../example/App299.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App299 />);
  await expect(component).toContainText("Learn React");
});
