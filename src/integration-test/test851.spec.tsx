
import { test, expect } from "@playwright/experimental-ct-react";
import App851 from "../example/App851.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App851 />);
  await expect(component).toContainText("Learn React");
});
