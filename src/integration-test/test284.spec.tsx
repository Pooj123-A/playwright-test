
import { test, expect } from "@playwright/experimental-ct-react";
import App284 from "../example/App284.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App284 />);
  await expect(component).toContainText("Learn React");
});
