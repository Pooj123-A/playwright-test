
import { test, expect } from "@playwright/experimental-ct-react";
import App271 from "../example/App271.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App271 />);
  await expect(component).toContainText("Learn React");
});
