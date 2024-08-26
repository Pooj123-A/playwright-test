
import { test, expect } from "@playwright/experimental-ct-react";
import App728 from "../example/App728.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App728 />);
  await expect(component).toContainText("Learn React");
});
