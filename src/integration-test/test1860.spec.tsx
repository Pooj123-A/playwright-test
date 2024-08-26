
import { test, expect } from "@playwright/experimental-ct-react";
import App1860 from "../example/App1860.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1860 />);
  await expect(component).toContainText("Learn React");
});
