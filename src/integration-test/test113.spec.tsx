
import { test, expect } from "@playwright/experimental-ct-react";
import App113 from "../example/App113.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App113 />);
  await expect(component).toContainText("Learn React");
});
