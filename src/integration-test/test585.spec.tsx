
import { test, expect } from "@playwright/experimental-ct-react";
import App585 from "../example/App585.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App585 />);
  await expect(component).toContainText("Learn React");
});
