
import { test, expect } from "@playwright/experimental-ct-react";
import App293 from "../example/App293.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App293 />);
  await expect(component).toContainText("Learn React");
});
