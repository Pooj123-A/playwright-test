
import { test, expect } from "@playwright/experimental-ct-react";
import App706 from "../example/App706.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App706 />);
  await expect(component).toContainText("Learn React");
});
