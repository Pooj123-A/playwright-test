
import { test, expect } from "@playwright/experimental-ct-react";
import App918 from "../example/App918.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App918 />);
  await expect(component).toContainText("Learn React");
});
