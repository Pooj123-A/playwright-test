
import { test, expect } from "@playwright/experimental-ct-react";
import App985 from "../example/App985.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App985 />);
  await expect(component).toContainText("Learn React");
});
