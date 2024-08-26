
import { test, expect } from "@playwright/experimental-ct-react";
import App2699 from "../example/App2699.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2699 />);
  await expect(component).toContainText("Learn React");
});
