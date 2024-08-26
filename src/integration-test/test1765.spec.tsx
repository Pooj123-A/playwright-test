
import { test, expect } from "@playwright/experimental-ct-react";
import App1765 from "../example/App1765.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1765 />);
  await expect(component).toContainText("Learn React");
});
