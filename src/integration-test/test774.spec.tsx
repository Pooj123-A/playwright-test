
import { test, expect } from "@playwright/experimental-ct-react";
import App774 from "../example/App774.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App774 />);
  await expect(component).toContainText("Learn React");
});
