
import { test, expect } from "@playwright/experimental-ct-react";
import App2868 from "../example/App2868.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2868 />);
  await expect(component).toContainText("Learn React");
});
