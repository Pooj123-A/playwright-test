
import { test, expect } from "@playwright/experimental-ct-react";
import App46 from "../example/App46.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App46 />);
  await expect(component).toContainText("Learn React");
});
