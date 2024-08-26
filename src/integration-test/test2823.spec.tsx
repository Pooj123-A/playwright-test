
import { test, expect } from "@playwright/experimental-ct-react";
import App2823 from "../example/App2823.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2823 />);
  await expect(component).toContainText("Learn React");
});
