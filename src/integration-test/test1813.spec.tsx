
import { test, expect } from "@playwright/experimental-ct-react";
import App1813 from "../example/App1813.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1813 />);
  await expect(component).toContainText("Learn React");
});
