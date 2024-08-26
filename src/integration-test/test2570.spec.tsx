
import { test, expect } from "@playwright/experimental-ct-react";
import App2570 from "../example/App2570.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2570 />);
  await expect(component).toContainText("Learn React");
});
