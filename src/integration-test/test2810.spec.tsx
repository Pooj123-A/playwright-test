
import { test, expect } from "@playwright/experimental-ct-react";
import App2810 from "../example/App2810.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2810 />);
  await expect(component).toContainText("Learn React");
});
