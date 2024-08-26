
import { test, expect } from "@playwright/experimental-ct-react";
import App569 from "../example/App569.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App569 />);
  await expect(component).toContainText("Learn React");
});
