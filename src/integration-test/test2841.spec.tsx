
import { test, expect } from "@playwright/experimental-ct-react";
import App2841 from "../example/App2841.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2841 />);
  await expect(component).toContainText("Learn React");
});
