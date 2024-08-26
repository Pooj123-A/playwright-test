
import { test, expect } from "@playwright/experimental-ct-react";
import App326 from "../example/App326.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App326 />);
  await expect(component).toContainText("Learn React");
});
