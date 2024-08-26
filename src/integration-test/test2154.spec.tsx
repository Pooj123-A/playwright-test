
import { test, expect } from "@playwright/experimental-ct-react";
import App2154 from "../example/App2154.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2154 />);
  await expect(component).toContainText("Learn React");
});
