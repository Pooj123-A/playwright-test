
import { test, expect } from "@playwright/experimental-ct-react";
import App497 from "../example/App497.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App497 />);
  await expect(component).toContainText("Learn React");
});
