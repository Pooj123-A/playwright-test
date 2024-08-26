
import { test, expect } from "@playwright/experimental-ct-react";
import App396 from "../example/App396.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App396 />);
  await expect(component).toContainText("Learn React");
});
