
import { test, expect } from "@playwright/experimental-ct-react";
import App291 from "../example/App291.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App291 />);
  await expect(component).toContainText("Learn React");
});
