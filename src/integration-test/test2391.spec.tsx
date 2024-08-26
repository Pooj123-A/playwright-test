
import { test, expect } from "@playwright/experimental-ct-react";
import App2391 from "../example/App2391.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2391 />);
  await expect(component).toContainText("Learn React");
});
