
import { test, expect } from "@playwright/experimental-ct-react";
import App1571 from "../example/App1571.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1571 />);
  await expect(component).toContainText("Learn React");
});
