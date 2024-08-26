
import { test, expect } from "@playwright/experimental-ct-react";
import App231 from "../example/App231.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App231 />);
  await expect(component).toContainText("Learn React");
});
