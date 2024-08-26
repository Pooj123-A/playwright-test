
import { test, expect } from "@playwright/experimental-ct-react";
import App2851 from "../example/App2851.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2851 />);
  await expect(component).toContainText("Learn React");
});
