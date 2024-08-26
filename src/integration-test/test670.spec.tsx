
import { test, expect } from "@playwright/experimental-ct-react";
import App670 from "../example/App670.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App670 />);
  await expect(component).toContainText("Learn React");
});
