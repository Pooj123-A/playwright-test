
import { test, expect } from "@playwright/experimental-ct-react";
import App771 from "../example/App771.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App771 />);
  await expect(component).toContainText("Learn React");
});
