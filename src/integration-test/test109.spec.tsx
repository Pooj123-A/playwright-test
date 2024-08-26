
import { test, expect } from "@playwright/experimental-ct-react";
import App109 from "../example/App109.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App109 />);
  await expect(component).toContainText("Learn React");
});
