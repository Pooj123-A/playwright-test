
import { test, expect } from "@playwright/experimental-ct-react";
import App106 from "../example/App106.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App106 />);
  await expect(component).toContainText("Learn React");
});
