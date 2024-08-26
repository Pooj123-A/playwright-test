
import { test, expect } from "@playwright/experimental-ct-react";
import App1918 from "../example/App1918.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1918 />);
  await expect(component).toContainText("Learn React");
});
