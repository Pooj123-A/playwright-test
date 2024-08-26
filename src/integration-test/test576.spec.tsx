
import { test, expect } from "@playwright/experimental-ct-react";
import App576 from "../example/App576.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App576 />);
  await expect(component).toContainText("Learn React");
});
