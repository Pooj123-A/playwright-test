
import { test, expect } from "@playwright/experimental-ct-react";
import App824 from "../example/App824.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App824 />);
  await expect(component).toContainText("Learn React");
});
