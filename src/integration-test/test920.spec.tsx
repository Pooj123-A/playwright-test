
import { test, expect } from "@playwright/experimental-ct-react";
import App920 from "../example/App920.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App920 />);
  await expect(component).toContainText("Learn React");
});
