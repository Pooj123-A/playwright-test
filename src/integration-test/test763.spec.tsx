
import { test, expect } from "@playwright/experimental-ct-react";
import App763 from "../example/App763.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App763 />);
  await expect(component).toContainText("Learn React");
});
