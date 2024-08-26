
import { test, expect } from "@playwright/experimental-ct-react";
import App276 from "../example/App276.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App276 />);
  await expect(component).toContainText("Learn React");
});
