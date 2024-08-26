
import { test, expect } from "@playwright/experimental-ct-react";
import App672 from "../example/App672.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App672 />);
  await expect(component).toContainText("Learn React");
});
